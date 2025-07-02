"use client";

import React, { useCallback, useEffect, useState, useMemo } from "react";
import PlaneImage from "../_assets/plane-base.dxf.png";
import PlaneShadow from "../_assets/plane-base-shadow.svg";
import clsx from "clsx";
import { useWindowSize } from "@uidotdev/usehooks";
import { useGesture } from "@use-gesture/react";
import { usePrevious } from "../_utils/usePrevious";

const FLY_SPEED = 1000;
const IDLE_SPEED = 200;

const STATES = {
  LANDED: "LANDED",
  FLYING: "FLYING",
  IDLING: "IDLING",
  TAKING_OFF: "TAKING_OFF",
  POSITIONING: "POSITIONING",
  POSITIONED: "POSITIONED",
} as const;

type STATES = (typeof STATES)[keyof typeof STATES];

interface Position {
  x: number;
  y: number;
}

interface Offset {
  x: number;
  y: number;
}

interface AnimationProps {
  img: string;
  offset?: Offset;
  scrollDirection: "s" | "n";
  position: Position;
  state: STATES;
  movementSpeed?: number;
}

const Animation: React.FC<AnimationProps> = ({
  img,
  offset = { x: 0, y: 0 },
  scrollDirection,
  position,
  state,
}) => {
  const prevPosition = usePrevious(position);
  const [direction, setDirection] = useState<number>(270);

  const handleDirectionChange = useCallback(
    (dir: number) => {
      let newDirection = dir;

      while (Math.abs(direction - newDirection) > 180) {
        if (newDirection > direction) {
          newDirection -= 360;
        } else if (newDirection < direction) {
          newDirection += 360;
        }
      }

      setDirection(newDirection);
    },
    [direction]
  );

  useEffect(() => {
    if (
      state === STATES.IDLING ||
      state === STATES.POSITIONING ||
      state === STATES.POSITIONED
    ) {
      const delt = {
        x: (prevPosition?.x || 0) - position.x,
        y: (prevPosition?.y || 0) - position.y,
      };

      if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return;

      handleDirectionChange(
        Math.floor((Math.atan2(delt.y, delt.x) * 180) / Math.PI)
      );
    } else {
      handleDirectionChange(scrollDirection === "s" ? 270 : 90);
    }
  }, [
    prevPosition,
    position,
    direction,
    handleDirectionChange,
    scrollDirection,
    state,
  ]);

  return (
    <div
      className="w-[100px] h-[100px] absolute z-10 transition-all duration-1000"
      style={{ left: offset.x, top: offset.y }}
    >
      <div className={clsx("pointer-events-none absolute", {})} style={{}}>
        <div
          className="[perspective: 100px] w-[100px] h-[100px] transition-all ease-linear"
          style={{
            perspective: "100px",
            transform: `rotate(${direction - 90}deg)`,
            transitionDuration: `200ms`,
          }}
        >
          <div
            className={clsx("w-fit relative", {
              "animate-plane-idle": state !== STATES.LANDED,
            })}
            style={{
              perspective: "100px",
            }}
          >
            <div
              className={clsx("w-fit relative", {})}
              style={{ animationFillMode: "forwards" }}
            >
              <div className="relative z-10">
                <img src={img} alt="A quantas plane" height="100" width="100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PlaneProps {
  initialCoords: [number, number];
}

const Plane: React.FC<PlaneProps> = ({ initialCoords }) => {
  const [index, setIndex] = useState<number>(0);
  const [state, setState] = useState<STATES>(STATES.LANDED);
  const [idleCoords, setIdleCoords] = useState<Position[]>([]);
  const [position, setPosition] = useState<Position>({
    x: initialCoords[0],
    y: initialCoords[1],
  });
  const [scrollY, setScrollY] = useState<number>(initialCoords[1]);
  const [scrollDirection, setScrollDirection] = useState<"s" | "n">("s");

  const movementSpeed = state === STATES.IDLING ? IDLE_SPEED : FLY_SPEED;

  const windowSize = useWindowSize();

  const windowCenter = useMemo(
    () => ({
      x: ((windowSize.width || 0) - 100) / 2,
      y: ((windowSize.height || 0) - 192) / 2,
    }),
    [windowSize]
  );

  const handleTakeoff = useCallback(() => {
    const el = document.getElementById("scroll-container");
    if (!el) return;

    if (el.scrollTop >= 220) {
      setState(STATES.TAKING_OFF);

      setTimeout(() => {
        if (idleCoords[index]) {
          setPosition(idleCoords[index]);
        }
        setState(STATES.POSITIONING);
      }, 1000);
    }
  }, [idleCoords, index]);

  useGesture(
    {
      onScroll: () => {
        const el = document.getElementById("scroll-container");
        if (!el) return;

        const nextDirection: "s" | "n" = scrollY < el.scrollTop ? "s" : "n";
        setScrollY(el.scrollTop);

        if (scrollDirection !== nextDirection && scrollY !== el.scrollTop) {
          setScrollDirection(nextDirection);
        }

        if (state === STATES.TAKING_OFF) return;

        if (state === STATES.LANDED) {
          handleTakeoff();
        } else {
          setState(STATES.FLYING);
        }
      },
      onScrollEnd: () => {
        if (state !== STATES.LANDED && state !== STATES.TAKING_OFF) {
          setState(STATES.IDLING);
        }
      },
    },
    {
      target: document.getElementById("scroll-container") || undefined,
    }
  );

  useEffect(() => {
    const points: Position[] = [];
    const items = 128;
    const r = 200;

    for (let i = 0; i < items; i++) {
      const x = windowCenter.x + r * Math.cos((2 * Math.PI * i) / items);
      const y = windowCenter.y + r * Math.sin((2 * Math.PI * i) / items);

      points.push({ x, y });
    }
    setIdleCoords(points);
    setIndex(Math.floor(items / 4) - 1);
  }, [windowCenter]);

  useEffect(() => {
    if (
      state === STATES.FLYING ||
      state === STATES.LANDED ||
      state === STATES.TAKING_OFF
    ) {
      return;
    }

    const moveToNextPoint = () => {
      const nextIndex = index === idleCoords.length - 1 ? 0 : index + 1;

      if (idleCoords[nextIndex]) {
        setPosition(idleCoords[nextIndex]);
      }

      setIndex(nextIndex);
    };

    const timeout = setTimeout(moveToNextPoint, movementSpeed);
    return () => clearTimeout(timeout);
  }, [index, state, movementSpeed, idleCoords]);

  const shadowDisplacement = state === STATES.LANDED ? 13 : 80;

  return (
    <>
      <div className="fixed w-screen h-screen z-10 pointer-events-none">
        <div
          onClick={handleTakeoff}
          className={clsx("absolute w-[100px] h-0 z-10 transition-all", {
            "ease-in": state === STATES.TAKING_OFF,
            "ease-linear": state !== STATES.TAKING_OFF,
          })}
          style={{
            left: `${position?.x}px`,
            top: `${position?.y}px`,
            transitionDuration: `${movementSpeed}ms`,
          }}
        >
          <div
            className={clsx("w-full h-full", {
              "animate-plane-take-off": state !== STATES.LANDED,
            })}
            style={{
              transform: `scale(0.6) translateY(-30px)`,
            }}
          >
            <Animation
              position={position}
              scrollDirection={scrollDirection}
              img={PlaneShadow}
              offset={{
                x: -shadowDisplacement,
                y: shadowDisplacement,
              }}
              state={state}
            />
            <Animation
              position={position}
              scrollDirection={scrollDirection}
              img={PlaneImage}
              state={state}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Plane;
