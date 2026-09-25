'use client';

import { useRef, useState } from 'react';

/**
 * Free wall-art preview: upload a room photo, drag museum prints into
 * place at true scale, then take the mock-up straight to checkout.
 */
const SIZES = [
  { key: '8x10', label: '8×10', price: 65, w: 8, h: 10 },
  { key: '16x20', label: '16×20 · Signature', price: 145, w: 16, h: 20 },
  { key: '24x36', label: '24×36 · Statement', price: 295, w: 24, h: 36 },
];

const PRINT_SRC = '/images/corridor/corridor-1.jpg';

export default function WallVisualizer() {
  const canvasRef = useRef(null);
  const roomImgRef = useRef(null);
  const printImgRef = useRef(null);
  const [size, setSize] = useState(SIZES[1]);
  const [hasRoom, setHasRoom] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [note, setNote] = useState(null);

  // Print placement state in room-image pixel space.
  const state = useRef({ x: 0, y: 0, dragging: false, scale: 1 });

  const loadRoom = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new window.Image();
      img.onload = () => {
        roomImgRef.current = img;
        state.current.x = img.width / 2;
        state.current.y = img.height / 2;
        setHasRoom(true);
        setPlaced(false);
        setNote(null);
        requestAnimationFrame(draw);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const room = roomImgRef.current;
    const print = printImgRef.current;
    if (!canvas || !room) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = canvas.clientWidth;
    const ch = Math.max(1, Math.round((cw * room.height) / room.width));
    if (canvas.width !== Math.round(cw * dpr) || canvas.height !== Math.round(ch * dpr)) {
      canvas.width = Math.round(cw * dpr);
      canvas.height = Math.round(ch * dpr);
      canvas.style.height = ch + 'px';
    }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.drawImage(room, 0, 0, cw, ch);

    if (print && placed) {
      const { x, y, scale } = state.current;
      // True scale: assume a credit card (~3.37in) spans ~3% of the room
      // photo width; the print derives its pixel size from that ratio.
      const inchesPerPx = 3.37 / (room.width * 0.03);
      const wPx = (size.w / inchesPerPx) * scale;
      const hPx = (size.h / inchesPerPx) * scale;
      ctx.save();
      ctx.shadowColor = 'rgba(26,23,21,0.45)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 10;
      ctx.drawImage(print, x - wPx / 2, y - hPx / 2, wPx, hPx);
      ctx.restore();
      ctx.strokeStyle = 'rgba(169,128,82,0.9)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x - wPx / 2, y - hPx / 2, wPx, hPx);
    }
  };

  const canvasPoint = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const sx = canvas.width / rect.width;
    return { x: (e.clientX - rect.left) * sx, y: (e.clientY - rect.top) * sx };
  };

  const onPointerDown = (e) => {
    if (!placed) return;
    e.preventDefault();
    const p = canvasPoint(e);
    state.current.dragging = true;
    state.current.x = p.x;
    state.current.y = p.y;
    requestAnimationFrame(draw);
  };
  const onPointerMove = (e) => {
    if (!state.current.dragging) return;
    const p = canvasPoint(e);
    state.current.x = p.x;
    state.current.y = p.y;
    requestAnimationFrame(draw);
  };
  const stopDrag = () => {
    state.current.dragging = false;
  };

  const place = () => {
    if (!hasRoom) {
      setNote('Upload a room photo first — then place your print.');
      return;
    }
    if (printImgRef.current) {
      setPlaced(true);
      requestAnimationFrame(draw);
      return;
    }
    const img = new window.Image();
    img.onload = () => {
      printImgRef.current = img;
      setPlaced(true);
      setNote(null);
      requestAnimationFrame(draw);
    };
    img.src = PRINT_SRC;
  };

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-sm border border-charcoal/15 bg-charcoal-deep" style={{ aspectRatio: '4 / 3' }}>
        {hasRoom ? (
          <canvas
            ref={canvasRef}
            className="h-full w-full cursor-move touch-none object-contain"
            aria-label="Your room with a museum print preview"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stopDrag}
            onPointerLeave={stopDrag}
          />
        ) : (
          <div className="flex h-full items-center justify-center p-8 text-center font-body text-sm text-ivory/60">
            Upload a photo of your wall — place museum prints at true scale before you buy.
          </div>
        )}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="btn-luxury btn-luxury-glass w-full cursor-pointer justify-center !border-charcoal/25 !text-charcoal">
          Upload Room Photo
          <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files && e.target.files[0]; if (f) loadRoom(f); }} />
        </label>
        <button type="button" onClick={place} className="btn-luxury btn-luxury-primary w-full justify-center">
          Place {size.label} Print
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {SIZES.map((s) => (
          <button
            key={s.key}
            type="button"
            aria-pressed={size.key === s.key}
            onClick={() => { setSize(s); if (placed) requestAnimationFrame(draw); }}
            className={`min-h-[44px] rounded-full border px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.18em] transition-all ${
              size.key === s.key ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/25 text-charcoal/70 hover:border-charcoal'
            }`}
          >
            {s.label} · ${s.price}
          </button>
        ))}
        <div className="flex items-center gap-2 font-body text-xs text-charcoal/60">
          Scale
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.05"
            defaultValue="1"
            aria-label="Print scale"
            onChange={(e) => { state.current.scale = Number(e.target.value); if (placed) requestAnimationFrame(draw); }}
            className="accent-brass"
          />
        </div>
      </div>

      {note && <p className="mt-3 font-body text-xs text-rose">{note}</p>}
      <p className="mt-3 font-body text-[0.68rem] font-light text-charcoal/55">
        Drag the print to position it — scale assumes a credit card (~3.4in) spans about 3% of your photo width. Loving a size? Order the museum print below.
      </p>
    </div>
  );
}
