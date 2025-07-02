"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { random } from "lodash";
import CSSCloud from "./CSSCloud";

interface AnimatedCloudProps {
  startNow?: boolean;
}

const AnimatedCloud: React.FC<AnimatedCloudProps> = ({ startNow }) => {
  const [shouldRender, setShouldRender] = useState<boolean>(startNow || false);
  const [xPosition, setXPosition] = useState<number>(random(-10, 110));
  const [delay, setDelay] = useState<number>(random(0, 8000));

  useEffect(() => {
    if (!shouldRender) return;

    const timout = setTimeout(() => {
      setXPosition(random(-10, 110));
      setDelay(random(0, 8000));
    }, 8000 + delay);

    return () => clearTimeout(timout);
  }, [xPosition, delay, shouldRender, startNow]);

  useEffect(() => {
    setTimeout(
      () => {
        setShouldRender(true);
      },
      startNow ? 0 : random(0, 6000)
    );
  }, [startNow]);

  const scale = random(0.7, 1, true);

  if (!shouldRender) return null;

  return (
    <div
      key={xPosition}
      className="animate-[cloud-animation_6s]"
      style={{
        scale,
        position: "absolute",
        animationFillMode: "forwards",
        left: `${xPosition}%`,
      }}
    >
      <CSSCloud />
    </div>
  );
};

const AnimatedClouds: React.FC = () => {
  const cloudAnchor = document.getElementById("cloud_anchor");

  if (!cloudAnchor) return null;

  return createPortal(
    <div className="absolute w-screen h-screen left-0 top-0 z-0 overflow-hidden pointer-events-none">
      <AnimatedCloud startNow />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
      <AnimatedCloud />
    </div>,
    cloudAnchor
  );
};

export default AnimatedClouds;
