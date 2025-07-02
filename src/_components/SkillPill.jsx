import { random, sample } from "lodash";
import { useState } from "react";
import Color from "color";
import clsx from "clsx";

const outlineColor = "#55324f";

const roofColors = {
  dark: "#5a5f56",
  brown: "#a6856d",
  green: "#89995f",
  terracotta: "#cf944f",
  blue: "#a5c3cf",
  cream: "#d7d0c2",
};

const wallColors = {
  white: "#d7d0c2",
  blue: "#a5c3cf",
  brown: "#a6856d",
  yellow: "#cf944f",
};

const colorCombos = [
  { roof: roofColors.dark, wall: wallColors.white },
  { roof: roofColors.dark, wall: wallColors.blue },
  { roof: roofColors.dark, wall: wallColors.brown },
  { roof: roofColors.dark, wall: wallColors.yellow },

  { roof: roofColors.brown, wall: wallColors.white },
  { roof: roofColors.brown, wall: wallColors.blue },
  { roof: roofColors.brown, wall: wallColors.brown },
  { roof: roofColors.brown, wall: wallColors.yellow },

  { roof: roofColors.green, wall: wallColors.white },
  // { roof: roofColors.green, wall: wallColors.blue },
  { roof: roofColors.green, wall: wallColors.brown },
  { roof: roofColors.green, wall: wallColors.yellow },

  { roof: roofColors.terracotta, wall: wallColors.white },
  { roof: roofColors.terracotta, wall: wallColors.blue },
  { roof: roofColors.terracotta, wall: wallColors.brown },
  { roof: roofColors.terracotta, wall: wallColors.yellow },

  { roof: roofColors.blue, wall: wallColors.white },
  // { roof: roofColors.blue, wall: wallColors.blue },
  { roof: roofColors.blue, wall: wallColors.brown },
  { roof: roofColors.blue, wall: wallColors.yellow },

  // { roof: roofColors.cream, wall: wallColors.white },
  { roof: roofColors.cream, wall: wallColors.blue },
  { roof: roofColors.cream, wall: wallColors.brown },
  { roof: roofColors.cream, wall: wallColors.yellow },
];

const SlantedRoof = (props) => {
  const color = Color(props.color);
  const className = "absolute top-[-45%] w-[calc(50%)] h-[70%]";

  const pattern = (
    <div
      className="w-full h-full"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,0,0, 0.25), rgba(0,0,0, 0.25) 2px, transparent 1px, transparent 7px)",
      }}
    />
  );
  return (
    <>
      <div
        className={clsx(className, "skew-y-[-18deg]")}
        style={{
          left: "calc(0% - 8px)",
          width: "calc(50% + 8px)",
          backgroundColor: color.darken(0.5),
          border: `2px solid ${color.darken(0.8)}`,
        }}
      >
        {pattern}
        {/* <Image src={RoofLines} alt="roof texture" /> */}
        <div
          className={clsx("absolute bottom-[-5px] h-[5px]")}
          style={{
            backgroundColor: color.darken(0.5).lighten(0.5),
            border: `2px solid ${color.darken(0.5).darken(0.5)}`,
            width: "calc(100% + 4px)",
            left: "-2px",
          }}
        />
      </div>
      <div
        className={clsx(className, "skew-y-[18deg]")}
        style={{
          right: "calc(0% - 8px)",
          width: "calc(50% + 9px)",
          backgroundColor: color,
          border: `2px solid ${color.darken(0.5)}`,
        }}
      >
        {pattern}
        {/* <Image src={RoofLines} alt="roof texture" /> */}

        <div
          className={clsx("absolute bottom-[-5px] h-[5px]")}
          style={{
            backgroundColor: color.lighten(0.5),
            border: `2px solid ${color.darken(0.5)}`,
            width: "calc(100% + 4px)",
            left: "-2px",
          }}
        />
      </div>
    </>
  );
};

const SkillPill = ({ skill }) => {
  const [height, setHeight] = useState(1);
  const [marginLeft, setMarginLeft] = useState(1);
  const [wallColor, setWallColor] = useState(wallColors.white);
  const [roofColor, setRoofColor] = useState(roofColors.brown);

  useState(() => {
    setHeight(random(10, 16));
    setMarginLeft(random(5, 55));
    const colors = sample(colorCombos);
    setRoofColor(colors.roof);
    setWallColor(colors.wall);
  }, []);

  const pattern = (
    <div
      className="left-0 top-0 absolute w-full h-full"
      style={{
        // backgroundSize: "100px",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,0,0, 0.15), rgba(0,0,0, 0.15) 2px, transparent 3px, transparent 7px)",
      }}
    />
  );

  return (
    // <div className={`flex flex-col h-fit relative z-0`} style={{ marginLeft }}>
    //   <div className="border-slate-300 border-2  z-10 rounded">
    //     <p className="bg-slate-500 border-slate-600 border-2 border-l-slate-400 border-b-0 px-3 py-1 w-fit text-white rounded">
    //       {skill}
    //     </p>
    //   </div>

    //   <div
    //     className="absolute w-full h-full rounded z-0"
    //     style={{
    //       top: `${(height + 8) * 1.5}px`,
    //       left: "-8px",
    //       width: "calc(100% + 5px)",
    //       height: `calc(100% - ${height + 8}px)`,
    //       backgroundColor: "rgba(0,0,0,0.2)",
    //       transform: "skew(-15deg)",
    //     }}
    //   ></div>
    //   <div
    //     className="border-yellow-700 border-2 rounded relative z-0"
    //     style={{
    //       height: `${height + 4}px`,
    //       backgroundColor: wallColor,
    //       top: "-4px",
    //     }}
    //   ></div>
    // </div>
    // <div
    //   className="relative mr-3 mb-8 px-3 pb-2 pt-8 z-0"
    //   style={{
    //     marginLeft: `${marginLeft}px`,
    //     backgroundColor: wallColor,
    //     border: `2px solid ${outlineColor}`,
    //     borderRadius: "3px",
    //     borderBottom: "none",
    //   }}
    // >
    //   {pattern}
    //   <SlantedRoof color={roofColor} />
    //   <p
    //     className="p-1 text-black relative z-10"
    //     style={{
    //       backgroundColor: wallColor,
    //       border: `2px solid ${Color(wallColor).darken(0.5)}`,
    //     }}
    //   >
    //     {skill}
    //   </p>
    // </div>

    <p
      className={`px-4 py-1 rounded text-white relative bg-[#55324f]`}
      // style={{
      //   backgroundColor: wallColor,
      //   border: `2px solid ${Color(wallColor).darken(0.5)}`,
      // }}
    >
      {skill}
    </p>
  );
};

export default SkillPill;
