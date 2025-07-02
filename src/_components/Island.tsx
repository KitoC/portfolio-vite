"use client";
import React from "react";
import AnimatedCloudSection from "./AnimatedCloudSection";

interface IslandProps {
  children: React.ReactNode;
  islandPosition?: "left" | "right";
  flip?: boolean;
}

const Island: React.FC<IslandProps> = ({
  children,
  islandPosition = "left",
  flip,
}) => {
  return (
    <AnimatedCloudSection hasIsland islandPosition={islandPosition} flip={flip}>
      <div
        className={`animate-island-shallows bg-[#f6d896] p-4 pt-1 rounded-[40px] island relative`}
      >
        <div className="bg-[#a6cd51] p-5 lg:p-8 rounded-[40px] flex gap-4 lg:gap-8 relative text-green-900">
          {children}
        </div>
      </div>
    </AnimatedCloudSection>
  );
};

export default Island;
