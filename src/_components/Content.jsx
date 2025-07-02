"use client";

import About from "./About";
import Banner from "./Banner";
import Itinerary from "./Itinerary";
import Experience from "./Experience";
import Projects from "./Projects";
import Island from "./Island";
import Plane from "./Plane";
import AnimatedCloudSection from "./AnimatedCloudSection";
import { useState, useEffect } from "react";
import clsx from "clsx";

const Content = () => {
  const [initialCoords, setIniticalCoords] = useState();

  useEffect(() => {
    const airStrip = document.getElementById("airstrip-1");
    const { left, top, ...rest } = airStrip.getBoundingClientRect();

    setIniticalCoords([left - 20, top - 124]);
  }, []);

  return (
    <div
      id="content-container"
      className="h-screen w-full relative overflow-hidden"
    >
      <div
        className={clsx(
          "h-screen w-full absolute bg-white flex items-center justify-center text-black z-40 transition-all duration-[3000ms] pointer-events-none",
          { "opacity-0": initialCoords }
        )}
      >
        <h1>Loading...</h1>
      </div>

      <div
        id="scroll-container"
        className={clsx(
          "h-screen w-full overflow-scroll no-scrollbar overflow-x-hidden relative"
        )}
      >
        <Banner />
        <Itinerary />

        {initialCoords && <Plane initialCoords={initialCoords} />}

        <div className="py-8" />
        <Island>
          <div id="about" className="flex md:flex-row flex-col-reverse gap-8">
            <div
              id="airstrip-1"
              className="bg-gray-600 p-4 min-w-[60px] h-[250px] w-[60px] rounded flex justify-center text-black"
            >
              <div className="border-dashed border border-amber-100 h-full w-[1px]" />
            </div>

            <About />
          </div>
        </Island>
        <AnimatedCloudSection />

        <Experience />

        <AnimatedCloudSection />
        <Projects />

        <AnimatedCloudSection />

        <Island>
          <p>
            This site was built with React, NextJS & Tailwind. Everything was
            achieved with CSS except for the plane which I drew in Inkscape.
            <br />
            <br />
            If you would like to get in touch, please feel free to reach out on{" "}
            <a className="underline" href="https://linkedin.com/in/kito-clark">
              LinkedIn
            </a>
          </p>
        </Island>

        <AnimatedCloudSection />
      </div>
    </div>
  );
};

export default Content;
