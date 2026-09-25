'use client';

import { useCallback, useEffect, useMemo, useRef, useSyncExternalStore } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import Image from 'next/image';

const IMAGES = [
  '/images/corridor/corridor-1.jpg',
  '/images/corridor/corridor-2.jpg',
  '/images/corridor/corridor-3.jpg',
  '/images/corridor/corridor-4.jpg',
  '/images/corridor/corridor-5.jpg',
  '/images/corridor/corridor-6.jpg',
];

const DARK = new THREE.Color('#241c15');
const GOLD = new THREE.Color('#c9a76f');

/** Deterministic PRNG — stable, render-safe random values for the dust field. */
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function FilmFrame({ position, rotationY, texture, index, total }) {
  const group = useRef();
  const planeW = 2.7;
  const planeH = 3.4;
  const border = 0.12;

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.position.y = position[1] + Math.sin(t * 0.5 + index * 1.7) * 0.06;
    group.current.rotation.z = Math.sin(t * 0.3 + index) * 0.015;
  });

  return (
    <group ref={group} position={position} rotation={[0, rotationY, 0]}>
      {/* Archival matte backing */}
      <mesh position={[0, 0, -0.06]}>
        <planeGeometry args={[planeW + border * 2 + 0.1, planeH + border * 2 + 0.1]} />
        <meshStandardMaterial color="#efe9e1" roughness={0.9} metalness={0} />
      </mesh>
      {/* The photograph */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[planeW, planeH]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      {/* Brass frame edge glow */}
      <mesh position={[0, 0, 0.02]}>
        <ringGeometry args={[Math.max(planeW, planeH) * 0.74, Math.max(planeW, planeH) * 0.745, 4, 1]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Corridor({ progressRef, textures, count }) {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = DARK;
    scene.fog = new THREE.Fog(DARK, 6, 19);
    return () => {
      scene.fog = null;
      scene.background = null;
    };
  }, [scene]);

  const frames = [];
  for (let i = 0; i < count; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const z = -3.2 - i * 4.1;
    frames.push({
      key: i,
      position: [side * 2.05, i % 2 === 0 ? 0.12 : -0.1, z],
      rotationY: side * -0.42,
      texture: textures[i % textures.length],
    });
  }

  return (
    <group>
      {frames.map((f) => (
        <FilmFrame key={f.key} position={f.position} rotationY={f.rotationY} texture={f.texture} index={f.key} total={count} />
      ))}
      {/* Warm corridor floor bounce */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.1, -6]}>
        <planeGeometry args={[7, 30]} />
        <meshStandardMaterial color="#221e1a" roughness={0.4} metalness={0.35} />
      </mesh>
    </group>
  );
}

function LightShafts() {
  const shafts = useRef();
  useFrame((state) => {
    if (!shafts.current) return;
    shafts.current.children.forEach((child, i) => {
      const m = child.material;
      m.opacity = 0.07 + Math.abs(Math.sin(state.clock.elapsedTime * 0.35 + i * 2.1)) * 0.1;
    });
  });
  return (
    <group ref={shafts}>
      {[-1.1, 0.15, 1.25].map((x, i) => (
        <mesh key={i} position={[x, 1.4, -4 - i * 2.4]} rotation={[0, 0, 0.28 + i * 0.14]}>
          <planeGeometry args={[1.1, 9]} />
          <meshBasicMaterial
            color={GOLD}
            transparent
            opacity={0.07}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function Dust({ count = 160 }) {
  const ref = useRef();
  const [positions] = useMemo(() => {
    // Seeded PRNG keeps the dust field stable across re-mounts and keeps the
    // render pure (no Math.random() during render).
    const rand = mulberry32(0x2f6ea2);
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (rand() - 0.5) * 6;
      pos[i * 3 + 1] = (rand() - 0.5) * 4.5;
      pos[i * 3 + 2] = -rand() * 14 + 1;
    }
    return [pos];
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const arr = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += Math.sin(t * 0.4 + i) * 0.0012;
      arr[i * 3] += Math.cos(t * 0.25 + i * 0.7) * 0.0008;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={GOLD} size={0.022} transparent opacity={0.55} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function Rig({ progressRef }) {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.tx = (e.clientX / window.innerWidth - 0.5) * 0.55;
      mouse.current.ty = (e.clientY / window.innerHeight - 0.5) * 0.35;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame(() => {
    mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.045;
    mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.045;
    const p = progressRef.current || 0;
    const travel = THREE.MathUtils.clamp(p, 0, 1) * 12.5;
    camera.position.z = 3.2 - travel;
    camera.position.x = mouse.current.x * (1 - p * 0.5);
    camera.position.y = 0.15 - mouse.current.y * 0.6 + Math.sin(p * Math.PI) * 0.25;
    camera.lookAt(0, 0, camera.position.z - 6);
  });
  return null;
}

function SceneContents({ progressRef, count }) {
  const textures = useTexture(IMAGES);
  textures.forEach((t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.minFilter = THREE.LinearFilter;
  });
  return (
    <>
      <Rig progressRef={progressRef} />
      <ambientLight intensity={0.55} color="#f2e6d4" />
      <directionalLight position={[2.5, 3, 2]} intensity={1.5} color="#ecc89a" />
      <pointLight position={[0, 1, -8]} intensity={9} distance={11} color="#c9a76f" />
      <Corridor progressRef={progressRef} textures={textures} count={count} />
      <LightShafts />
      <Dust count={count <= 4 ? 90 : 170} />
    </>
  );
}

/** Subscribe to a CSS media query the React 19 way — no setState-in-effect. */
function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export default function LightCorridor() {
  const sectionRef = useRef(null);
  const progressRef = useRef(0);
  const heroTextRef = useRef(null);
  const scrollCueRef = useRef(null);
  const [contextLost, setContextLost] = useState(false);
  const mobile = useMediaQuery('(max-width: 768px)');
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    let raf;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = THREE.MathUtils.clamp(-rect.top / (total || 1), 0, 1);
      progressRef.current = p;
      // Drive the hero overlay straight from the rAF loop — zero re-renders.
      const fade = 1 - THREE.MathUtils.clamp(p * 2.2, 0, 1);
      if (heroTextRef.current) {
        heroTextRef.current.style.opacity = String(fade);
        heroTextRef.current.style.transform = `translateY(${p * -90}px)`;
      }
      if (scrollCueRef.current) {
        scrollCueRef.current.style.opacity = String(fade);
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const frameCount = mobile ? 4 : 6;

  return (
    <section ref={sectionRef} id="hero" aria-label="Cinematic introduction" className="relative" style={{ height: reduced ? '100vh' : '230vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!reduced && (
          <Canvas
            dpr={[1, mobile ? 1.5 : 2]}
            camera={{ fov: 55, position: [0, 0.15, 3.2], near: 0.1, far: 40 }}
            gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }}
            fallback={
              <div className="absolute inset-0">
                <Image src="/images/corridor/corridor-1.jpg" alt="Golden hour wedding portrait" fill className="object-cover opacity-70" sizes="100vw" />
              </div>
            }
            onCreated={({ gl }) => {
              // If the GPU context drops, degrade to the static golden frame
              // instead of a black screen.
              gl.domElement.addEventListener('webglcontextlost', (e) => {
                e.preventDefault();
                setContextLost(true);
              });
              gl.domElement.addEventListener('webglcontextrestored', () => setContextLost(false));
            }}
          >
            <SceneContents progressRef={progressRef} count={frameCount} />
          </Canvas>
        )}
        {(reduced || contextLost) && (
          <div className="absolute inset-0">
            <Image src="/images/corridor/corridor-1.jpg" alt="Golden hour wedding portrait" fill priority className="object-cover opacity-80" sizes="100vw" />
          </div>
        )}

        {/* Cinematic vignette */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 42%, rgba(26,23,21,0.55) 100%)' }} />

        {/* Readability scrim — guarantees the ivory hero type stays legible over
            bright imagery in every hero state (loading, reduced-motion, WebGL). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(26,23,21,0.45) 0%, rgba(26,23,21,0.12) 38%, rgba(26,23,21,0.18) 62%, rgba(26,23,21,0.6) 100%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 62% 46% at 50% 50%, rgba(26,23,21,0.6) 0%, rgba(26,23,21,0.3) 45%, transparent 72%)' }}
        />

        {/* Hero typography overlay */}
        <div
          ref={heroTextRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center"
        >
          <div className="max-w-3xl">
            <p className="section-label !text-brass-light" style={{ textShadow: '0 2px 12px rgba(26,23,21,0.8)' }}>
              ✦ Toronto · Milton · Oakville Atelier · Est. 2020
            </p>
            <h1 className="display-title mt-6 text-[clamp(2.6rem,8vw,5.5rem)] text-ivory" style={{ textShadow: '0 4px 32px rgba(26,23,21,0.65)' }}>
              Capturing Life Like
              <span className="mt-1 block italic text-brass-light">Scenes From Your Favourite Film.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl font-body text-[0.95rem] font-light leading-relaxed text-ivory/85" style={{ textShadow: '0 2px 12px rgba(26,23,21,0.8)' }}>
              Unscripted laughter, kinetic tenderness, and quiet reverie bathed in golden natural light — across the limestone bluffs of Kelso, the Halton countryside, and Toronto.
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div ref={scrollCueRef} className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <span className="font-body text-[0.62rem] font-bold uppercase tracking-[0.4em] text-ivory/60">Scroll to step inside</span>
          <div className="mx-auto mt-3 h-10 w-[1px] overflow-hidden bg-ivory/15">
            <div className="h-full w-full origin-top animate-pulse bg-brass-light" />
          </div>
        </div>
      </div>
    </section>
  );
}
