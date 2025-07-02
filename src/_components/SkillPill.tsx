import React from "react";

// Note: This component is simplified and only shows the skill name
// The complex styling with houses, roofs, etc. is commented out below

interface SkillPillProps {
  skill: string;
}

const SkillPill: React.FC<SkillPillProps> = ({ skill }) => {
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
