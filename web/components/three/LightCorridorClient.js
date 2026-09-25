'use client';

import dynamicImport from 'next/dynamic';

const LightCorridor = dynamicImport(() => import('./LightCorridor'), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center bg-charcoal-deep">
      <div className="text-center">
        <p className="font-display text-3xl font-light italic text-ivory/80">Developing your film…</p>
        <div className="mx-auto mt-4 h-[1px] w-32 overflow-hidden bg-ivory/15">
          <div className="h-full w-1/2 animate-pulse bg-brass-light" />
        </div>
      </div>
    </div>
  ),
});

export default function LightCorridorClient() {
  return <LightCorridor />;
}
