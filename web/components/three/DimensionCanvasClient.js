'use client';

import dynamicImport from 'next/dynamic';

// The dimension backdrop is browser-only — never rendered on the server.
const DimensionCanvas = dynamicImport(() => import('./DimensionCanvas'), {
  ssr: false,
  loading: () => null,
});

export default function DimensionCanvasClient() {
  return <DimensionCanvas />;
}
