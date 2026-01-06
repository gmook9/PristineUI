"use client";

import Orb from "../components/Orb";

type OrbBackgroundProps = {
  className?: string;
};

export default function OrbBackground({ className }: OrbBackgroundProps) {
  return (
    <div
      className={
        "pointer-events-none absolute inset-0 overflow-hidden " + (className ?? "")
      }
      aria-hidden="true"
    >
      {/* ReactBits Orb */}
      <div className="absolute inset-0 opacity-70">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Subtle vignette + grid to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/65 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:18px_18px]" />
    </div>
  );
}
