"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { random, range } from "lodash";
import CSSCloud from "./CSSCloud";
import clsx from "clsx";

const AnimatedCloud: React.FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(0);
  const [coords, setCoords] = useState<[number, number]>([0, 0]);
  const [idleCoords, setIdleCoords] = useState<[number, number]>([0, 0]);
  const [x, y] = idleCoords;

  const ref = useRef<HTMLDivElement>(null);

  const animateCloud = useCallback(() => {
    setIdleCoords([random(-20, 20), random(-20, 20)]);
    setScale(random(0.9, 1.4, true));
    setCoords([random(-10, 110), random(-10, 110)]);
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    if (scale === 0) {
      animateCloud();
      setTimeout(() => {
        setIsReady(true);
      }, 100);
    }

    const interval = setInterval(() => {
      animateCloud();
    }, random(3000, 5000));

    return () => clearInterval(interval);
  }, [scale, animateCloud]);

  return (
    <div
      className={clsx("z-20 w-fit absolute transition-all")}
      style={{
        left: `${coords[0]}%`,
        top: `${coords[1]}%`,
        transitionDuration: !isReady ? "0s" : "100s",
      }}
    >
      <div
        ref={ref}
        className={clsx("z-20 w-fit absolute transition-all")}
        style={{
          scale,
          transform: `translate(${x}px, ${y}px)`,
          transitionDuration: !isReady ? "0s" : "5s",
        }}
      >
        <CSSCloud />
      </div>
    </div>
  );
};

interface AnimatedCloudsProps {
  children?: React.ReactNode;
  hasIsland?: boolean;
  flip?: boolean;
  islandPosition?: "left" | "right";
}

const AnimatedClouds: React.FC<AnimatedCloudsProps> = ({
  children,
  hasIsland,
  flip,
}) => {
  if (hasIsland) {
    return (
      <div
        className={clsx(
          "w-screen relative flex flex-col lg:flex-row cloud-section lg:gap-16",
          { "lg:flex-row-reverse": flip }
        )}
      >
        <div className="w-full p-1 lg:p-24 lg:w-11/12 xl:w-5/6">{children}</div>

        <div className="p-10 grow relative pointer-events-none">
          {range(2).map((cloud: number) => (
            <AnimatedCloud key={cloud} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-1/2 pointer-events-none relative">
      {range(4).map((cloud: number) => (
        <AnimatedCloud key={cloud} />
      ))}
    </div>
  );
};

export default AnimatedClouds;
