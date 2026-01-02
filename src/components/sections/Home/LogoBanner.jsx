import { cn } from "../../../lib/utils";
import React, { useEffect, useState } from "react";

export const LogoBanner = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    let duration = "40s";
    if (speed === "fast") duration = "20s";
    if (speed === "slow") duration = "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative w-full", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-12 sm:gap-10 md:gap-12 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`card-${idx}`}
            className="shrink-0 flex items-center justify-center p-2 transition hover:scale-150"
          >
            <img loading="lazy"
              src={item}
              alt={`banner-${idx}`}
              className="max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-12 object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
