"use client";

import { useEffect, useState } from "react";

export function HeaderScrollAccent() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    function updateProgress() {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      setProgress(Math.min(1, Math.max(0, nextProgress)));
    }

    function handleScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    }

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-slate-800"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-slate-500 via-white to-slate-400 shadow-[0_0_18px_rgba(226,232,240,0.45)] transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
