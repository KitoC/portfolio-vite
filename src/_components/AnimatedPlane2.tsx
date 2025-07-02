"use client";

import React, { useEffect, useState } from "react";
import Plane from "../_assets/plane-base.dxf.png";
import PlaneShadow from "../_assets/plane-base-shadow.svg";
import clsx from "clsx";
import { random } from "lodash";
import { usePrevious } from "../_utils/usePrevious";

const positions = [
  "top_left",
  "top_right",
  "bottom_left",
  "bottom_right",
  "middle_left",
  "middle_right",
] as const;

type Position = (typeof positions)[number];

const getCoords = (posString: Position = "top_left"): [number, number] => {
  const [yString, xString] = posString?.split("_") as [string, string];

  const positionToCoord: Record<string, number> = {
    left: 0,
    right: 100,
    top: 0,
    bottom: 100,
    middle: 50,
  };

  return [positionToCoord[xString] || 0, positionToCoord[yString] || 0];
};

const AnimatedPlane2: React.FC = () => {
  const [isDipped, setIsDipped] = useState<boolean>(false);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>(positions[1]);

  const previousPosition = usePrevious(position);
  const [prevX] = getCoords(previousPosition || "top_left");
  const [x, y] = getCoords(position);

  useEffect(() => {
    if (isMoving) return;

    const interval = setInterval(() => {
      setIsDipped(!isDipped);
    }, 2000);

    return () => clearInterval(interval);
  }, [isDipped, isMoving]);

  useEffect(() => {
    const timout1 = setTimeout(() => {
      const availablePositions = positions.filter((pos) => pos !== position);
      setPosition(availablePositions[random(0, availablePositions.length - 1)]);
      setIsMoving(true);
    }, 8000);

    const timeout2 = setTimeout(() => {
      setIsMoving(false);
    }, 4000);
    return () => {
      clearTimeout(timout1);
      clearTimeout(timeout2);
    };
  }, [position]);

  const left = `calc(${x + random(-10, 10)}% - 100px)`;
  const top = `calc(${y + random(-10, 10)}% ${y > 90 ? "-" : "+"} 146px)`;

  return (
    <div
      className="animate-[plane-idle_1.5s_ease-in-out_infinite]  w-[100px] h-[100px] absolute"
      style={{ left, top, zIndex: 100, transition: "all 4s" }}
    >
      <div
        className="[perspective: 100px]"
        style={{ perspective: "100px", transform: "rotate(180deg)" }}
      >
        <div
          style={{ perspective: "100px" }}
          className={clsx("w-fit relative", {
            "animate-dip-right": x > prevX,
            "animate-dip-left": x < prevX,
          })}
        >
          <div
            style={{
              animationFillMode: "forwards",
              transform: isDipped ? "scale(0.9)" : "scale(1)",
              transition: "all 4s",
            }}
            className={clsx("w-fit relative", {
              "animate-plane-dip": !isDipped,
              "animate-plane-rise": isDipped,
            })}
          >
            <div className="relative z-10">
              <img src={Plane} alt="A quantas plane" height="100" width="100" />
            </div>
          </div>
          <div
            className="absolute z-0"
            style={{
              right: !isDipped ? "-70%" : "-90%",
              bottom: !isDipped ? "70%" : "90%",
              transform: "scale(0.5)",
              transition: "all 1s",
            }}
          >
            <img
              src={PlaneShadow}
              alt="A quantas plane"
              height="100"
              width="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPlane2;
