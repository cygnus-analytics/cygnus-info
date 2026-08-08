"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Autoplaying background video that defers its network request instead of
 * competing with critical page resources on initial load.
 *
 * - deferUntilIdle: for above-the-fold decorative video — waits until the
 *   browser is idle (or a timeout) after mount before fetching the source.
 * - default: for below-the-fold video — only fetches once it scrolls near
 *   the viewport.
 */
export default function LazyVideo({
  src,
  className,
  deferUntilIdle = false,
  ...rest
}) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (deferUntilIdle) {
      const load = () => setShouldLoad(true);
      if (typeof window.requestIdleCallback === "function") {
        const id = window.requestIdleCallback(load, { timeout: 2000 });
        return () => window.cancelIdleCallback(id);
      }
      const timeoutId = setTimeout(load, 1000);
      return () => clearTimeout(timeoutId);
    }

    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [deferUntilIdle]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      autoPlay={shouldLoad}
      muted
      loop
      playsInline
      preload="none"
      className={className}
      {...rest}
    />
  );
}
