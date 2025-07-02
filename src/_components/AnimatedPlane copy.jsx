"use client";

import Plane from "../_assets/plane-base.dxf.png";
import PlaneShadow from "../_assets/plane-base-shadow.svg";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { random, sample } from "lodash";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const positions = [
  "top_left",
  "top_right",
  "bottom_left",
  "bottom_right",
  "middle_left",
  "middle_right",
];

const getCoords = (posString = "") => {
  const [yString, xString] = posString?.split("_");

  const positionToCoord = {
    left: 0,
    right: 100,
    top: 0,
    bottom: 100,
    middle: 50,
  };

  return [positionToCoord[xString] || 0, positionToCoord[yString] || 0];
};

const AnimatedPlane = () => {
  const [isDipped, setIsDipped] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const curXy = [sample([-10, 0, 10, 90, 100, 110]), sample([100, 50, 0])];
  const [x, y] = curXy;
  const previousPosition = usePrevious(curXy);
  const [prevX, prevY] = previousPosition || [];

  useEffect(() => {
    const timout = setTimeout(() => {
      // setIsDipped(!isDipped);
      setIsMoving(sample([true, false]));
    }, random(4000, 6000));

    return () => clearTimeout(timout);
  }, [isDipped, isMoving]);

  return (
    <div
      className="animate-[plane-idle_1.5s_ease-in-out_infinite]  w-[100px] h-[100px] absolute"
      style={{
        left: `calc(${x + random(-10, 0)}% - 100px)`,
        top: `${y}%`,
        zIndex: 100,
        transition: "all 6s",
      }}
    >
      <div className="[perspective: 100px]" style={{ perspective: "100px" }}>
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
              transition: "all 1s",
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
              left: isDipped ? "-90%" : "-70%",
              top: isDipped ? "90%" : "70%",
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

export default AnimatedPlane;
