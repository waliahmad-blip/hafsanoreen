'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const VOID = new THREE.Color('#14110f');
const GOLD = new THREE.Color('#c9a76f');

/** Deterministic PRNG — stable particle field, no render-time randomness. */
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Golden bokeh dust rising slowly through the void. */
function DustField({ count = 520 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const rand = mulberry32(0x51ab2c);
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = rand() * Math.PI * 2;
      const r = 2.2 + rand() * 10;
      pos[i * 3] = Math.cos(theta) * r * (0.5 + rand() * 0.5);
      pos[i * 3 + 1] = (rand() - 0.5) * 11;
      pos[i * 3 + 2] = -rand() * 16 + 2;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const arr = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += 0.0045 + Math.sin(t * 0.3 + i) * 0.0012;
      arr[i * 3] += Math.cos(t * 0.2 + i * 0.6) * 0.0009;
      if (arr[i * 3 + 1] > 5.6) arr[i * 3 + 1] = -5.6;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={GOLD} size={0.05} transparent opacity={0.5} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

/** Three slow aperture rings encircling the conversation — the lens you stepped through. */
function ApertureRings() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const [r1, r2, r3] = group.current.children;
    r1.rotation.x = Math.PI / 2.4 + Math.sin(t * 0.12) * 0.18;
    r1.rotation.z = t * 0.06;
    r2.rotation.y = Math.sin(t * 0.1) * 0.5;
    r2.rotation.x = t * -0.07;
    r3.rotation.x = Math.PI / 3;
    r3.rotation.y = t * 0.045;
  });

  return (
    <group ref={group}>
      {[2.1, 3.0, 3.9].map((radius, i) => (
        <mesh key={radius}>
          <torusGeometry args={[radius, 0.008 + i * 0.004, 3, 128]} />
          <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.32} transparent opacity={0.5 - i * 0.12} emissive="#5a4326" emissiveIntensity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

/** The Haffu sigil — a brass octahedron diamond breathing at the centre. */
function HaffuSigil() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.35;
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    const s = 1 + Math.sin(t * 0.9) * 0.05;
    ref.current.scale.setScalar(s);
  });

  return (
    <mesh ref={ref} position={[0, 0.15, -2.4]}>
      <octahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial color="#a98052" metalness={0.92} roughness={0.22} emissive="#3a2c18" emissiveIntensity={0.55} flatShading />
    </mesh>
  );
}

/** Gentle mouse parallax so the dimension feels alive and responsive. */
function Rig() {
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.tx = (e.clientX / window.innerWidth - 0.5) * 0.7;
      mouse.current.ty = (e.clientY / window.innerHeight - 0.5) * 0.45;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame((state) => {
    const m = mouse.current;
    m.x += (m.tx - m.x) * 0.05;
    m.y += (m.ty - m.y) * 0.05;
    state.camera.position.x = m.x;
    state.camera.position.y = -m.y;
    state.camera.lookAt(0, 0, -2.2);
  });

  return null;
}

function Scene() {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = VOID;
    scene.fog = new THREE.Fog(VOID, 5, 18);
    return () => {
      scene.fog = null;
      scene.background = null;
    };
  }, [scene]);

  return (
    <>
      <Rig />
      <ambientLight intensity={0.5} color="#f2e6d4" />
      <pointLight position={[0, 0.6, 1.6]} intensity={14} distance={12} color="#c9a76f" />
      <DustField />
      <ApertureRings />
      <HaffuSigil />
    </>
  );
}

/**
 * The WebGL backdrop of the Haffu dimension — a dark void, golden dust,
 * aperture rings, and the breathing brass sigil behind the conversation.
 */
export default function DimensionCanvas() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ fov: 50, position: [0, 0, 7], near: 0.1, far: 40 }}
        gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }}
        fallback={null}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
