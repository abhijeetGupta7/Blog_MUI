import { useEffect, useRef } from "react";

export interface AutoScrollOptions {
  /**
   * Pixels to scroll per frame (60fps).
   * Higher = faster. Default: 0.6
   */
  speed?: number;

  /**
   * Time in milliseconds to wait before resuming scroll
   * after a user interaction (wheel/touch).
   * Default: 1000ms
   */
  resumeDelay?: number;
}

export function useAutoScroll(
  ref: React.RefObject<HTMLDivElement | null>,
  options: AutoScrollOptions = {} 
) {
  
  const { speed = 0.6, resumeDelay = 1000 } = options;

  const pausedRef = useRef(false);
  const scrollPosRef = useRef(0);
  const wheelTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    scrollPosRef.current = container.scrollLeft;

    let rafId: number;

    const tick = () => {
      if (
        !pausedRef.current &&
        container.scrollWidth > container.clientWidth
      ) {
        scrollPosRef.current += speed;

        if (
          scrollPosRef.current + container.clientWidth >=
          container.scrollWidth
        ) {
          scrollPosRef.current = 0;
        }

        container.scrollLeft = scrollPosRef.current;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [speed, ref]); 

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);

    const handleWheel = () => {
      pause();
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
      wheelTimeoutRef.current = window.setTimeout(resume, resumeDelay);
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);
    el.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      el.removeEventListener("wheel", handleWheel);
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
    };
  }, [ref, resumeDelay]); 
}