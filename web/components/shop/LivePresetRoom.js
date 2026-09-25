'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const PRESETS = [
  { id: 'original', name: 'Original', exposure: 0, contrast: 1, saturation: 1, temperature: 0, fade: 0, grain: 0, vignette: 0, mono: 0, product: null },
  { id: 'halton-film', name: 'Halton Film', exposure: 0.06, contrast: 1.08, saturation: 0.86, temperature: 0.1, fade: 0.14, grain: 0.35, vignette: 0.3, mono: 0, product: 'film-essence-presets' },
  { id: 'golden-hour-glow', name: 'Golden Hour Glow', exposure: 0.12, contrast: 1.04, saturation: 1.08, temperature: 0.32, fade: 0.1, grain: 0.22, vignette: 0.22, mono: 0, product: 'film-essence-presets' },
  { id: 'muskoka-autumn', name: 'Muskoka Autumn', exposure: 0.04, contrast: 1.14, saturation: 1.14, temperature: 0.2, fade: 0.06, grain: 0.28, vignette: 0.34, mono: 0, product: 'master-cinematic-suite' },
  { id: 'gairloch-rose', name: 'Gairloch Rose', exposure: 0.08, contrast: 0.96, saturation: 0.92, temperature: 0.14, fade: 0.2, grain: 0.3, vignette: 0.18, mono: 0, product: 'master-cinematic-suite' },
  { id: 'studio-high-key', name: 'Studio High Key', exposure: 0.22, contrast: 0.92, saturation: 0.95, temperature: 0.02, fade: 0.24, grain: 0.15, vignette: 0.08, mono: 0, product: 'master-cinematic-suite' },
  { id: 'heirloom-mono', name: 'Heirloom Monochrome', exposure: 0.05, contrast: 1.18, saturation: 0.0, temperature: 0, fade: 0.16, grain: 0.42, vignette: 0.4, mono: 1, product: 'master-cinematic-suite' },
];

const VERT = 'attribute vec2 aPos; varying vec2 vUv; void main() { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }';

const FRAG = [
  'precision mediump float;',
  'uniform sampler2D uImage;',
  'uniform float uExposure, uContrast, uSaturation, uTemperature, uFade, uGrain, uVignette, uMono, uTime;',
  'uniform vec2 uCanvasSize;',
  'uniform vec2 uImageSize;',
  'varying vec2 vUv;',
  'vec2 coverUv(vec2 uv) {',
  '  float cr = uCanvasSize.x / uCanvasSize.y;',
  '  float ir = uImageSize.x / uImageSize.y;',
  '  vec2 ratio = cr > ir ? vec2(1.0, ir / cr) : vec2(cr / ir, 1.0);',
  '  return (uv - 0.5) * ratio + 0.5;',
  '}',
  'float rand(vec2 co) { return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453); }',
  'void main() {',
  '  vec2 uv = coverUv(vUv);',
  '  vec3 c = texture2D(uImage, clamp(uv, 0.0, 1.0)).rgb;',
  '  c *= pow(2.0, uExposure);',
  '  c = (c - 0.5) * uContrast + 0.5;',
  '  float luma = dot(c, vec3(0.299, 0.587, 0.114));',
  '  vec3 warm = vec3(1.015 + uTemperature * 0.35, 1.0 + uTemperature * 0.08, 1.0 - uTemperature * 0.28);',
  '  c *= warm;',
  '  c = mix(vec3(luma), c, uSaturation);',
  '  c = mix(c, vec3(luma), uMono);',
  '  c = mix(c, vec3(0.92, 0.88, 0.82), uFade * 0.5);',
  '  float g = rand(vUv * uCanvasSize + fract(uTime)) - 0.5;',
  '  c += g * uGrain * 0.12;',
  '  float d = distance(vUv, vec2(0.5));',
  '  c *= 1.0 - smoothstep(0.35, 0.85, d) * uVignette;',
  '  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);',
  '}',
].join('\n');

const DEFAULT_SRC = '/images/corridor/corridor-1.jpg';

export default function LivePresetRoom() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    gl: null, texture: null, imageSize: [1600, 1067],
    preset: PRESETS[1], timeStart: 0, raf: null, texLoaded: false, resize: null,
  });
  const [active, setActive] = useState('halton-film');
  const [hasUpload, setHasUpload] = useState(false);
  const [webglBroken, setWebglBroken] = useState(false);

  const loadTexture = (src, isUpload) => {
    const s = stateRef.current;
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const gl = s.gl;
      if (!gl) return;
      if (s.texture) gl.deleteTexture(s.texture);
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      s.texture = tex;
      s.imageSize = [img.naturalWidth, img.naturalHeight];
      s.texLoaded = true;
      if (isUpload) setHasUpload(true);
    };
    img.src = src;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const gl = canvas.getContext('webgl', { antialias: false });
    if (!gl) {
      setWebglBroken(true);
      return undefined;
    }
    const s = stateRef.current;
    s.gl = gl;
    s.timeStart = performance.now();

    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, 'aPos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);
    s.resize = resize;

    const uniforms = {};
    ['uImage', 'uExposure', 'uContrast', 'uSaturation', 'uTemperature', 'uFade', 'uGrain', 'uVignette', 'uMono', 'uTime', 'uCanvasSize', 'uImageSize'].forEach((n) => {
      uniforms[n] = gl.getUniformLocation(program, n);
    });

    const render = () => {
      if (!s.texLoaded) {
        s.raf = requestAnimationFrame(render);
        return;
      }
      resize();
      const p = s.preset;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, s.texture);
      gl.uniform1i(uniforms.uImage, 0);
      gl.uniform1f(uniforms.uExposure, p.exposure);
      gl.uniform1f(uniforms.uContrast, p.contrast);
      gl.uniform1f(uniforms.uSaturation, p.saturation);
      gl.uniform1f(uniforms.uTemperature, p.temperature);
      gl.uniform1f(uniforms.uFade, p.fade);
      gl.uniform1f(uniforms.uGrain, p.grain);
      gl.uniform1f(uniforms.uVignette, p.vignette);
      gl.uniform1f(uniforms.uMono, p.mono);
      gl.uniform1f(uniforms.uTime, (performance.now() - s.timeStart) / 1000);
      gl.uniform2f(uniforms.uCanvasSize, canvas.width, canvas.height);
      gl.uniform2f(uniforms.uImageSize, s.imageSize[0], s.imageSize[1]);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      s.raf = requestAnimationFrame(render);
    };
    s.raf = requestAnimationFrame(render);
    loadTexture(DEFAULT_SRC, false);

    return () => {
      cancelAnimationFrame(s.raf);
      window.removeEventListener('resize', resize);
      if (s.texture) gl.deleteTexture(s.texture);
    };
  }, []);

  const selectPreset = (p) => {
    stateRef.current.preset = p;
    setActive(p.id);
  };

  const onUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => loadTexture(reader.result, true);
    reader.readAsDataURL(file);
  };

  const activePreset = PRESETS.find((p) => p.id === active);

  return (
    <section aria-labelledby="preset-room-heading" className="bg-charcoal py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label !text-brass-light">✦ Experience Before You Buy</p>
          <h2 id="preset-room-heading" className="display-title mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">The Live Preset Room</h2>
          <p className="mt-4 font-body text-sm font-light leading-relaxed text-ivory/70">
            Upload your own photograph and watch Hafsa&rsquo;s signature film grades render live on <em>your</em> image — then take the look home.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="relative overflow-hidden rounded-sm bg-charcoal-deep" style={{ aspectRatio: '16 / 10' }}>
            {webglBroken ? (
              <div className="flex h-full items-center justify-center p-8 text-center font-body text-sm text-ivory/60">
                Your browser paused the WebGL preview — every preset remains fully available below.
              </div>
            ) : (
              <canvas ref={canvasRef} className="h-full w-full" aria-label="Live preset preview canvas" />
            )}
          </div>

          <div>
            <label className="btn-luxury btn-luxury-primary w-full cursor-pointer justify-center">
              Upload Your Photo
              <input type="file" accept="image/*" className="hidden" onChange={onUpload} />
            </label>
            {hasUpload && <p className="mt-3 text-center font-body text-xs text-sage">Beautiful — your photo is on the easel.</p>}

            <div className="mt-6 grid grid-cols-2 gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => selectPreset(p)}
                  aria-pressed={active === p.id}
                  className={`min-h-[48px] rounded-sm border px-4 py-3 text-left font-body text-sm transition-all duration-300 ${
                    active === p.id ? 'border-brass bg-brass/15 text-brass-light' : 'border-ivory/15 text-ivory/75 hover:border-ivory/40'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {activePreset && activePreset.product && (
              <div className="mt-6 rounded-sm border border-brass/40 bg-brass/10 p-5">
                <p className="font-body text-[0.62rem] font-bold uppercase tracking-[0.28em] text-brass-light">Loving this look?</p>
                <p className="mt-2 font-display text-lg font-medium">{activePreset.name} ships inside the full collection.</p>
                <Link href={`/shop/${activePreset.product}`} className="btn-luxury btn-luxury-primary mt-4 w-full justify-center">
                  Get The Collection
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
