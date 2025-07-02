import { useEffect, useState } from "react";
import clsx from "clsx";
import Color from "color";

export const STATUS = {
  ABANDONED: "ABANDONED",
  LIVE: "LIVE",
  IN_PROGRESS: "IN_PROGRESS",
};

const STATUS_COLORS = {
  [STATUS.ABANDONED]: Color("#dc2626"),
  [STATUS.LIVE]: Color("#65a30d"),
  [STATUS.IN_PROGRESS]: Color("#fbbf24"),
};

const buildingWidth = 60;

const ProjectStatus = ({ status }) => {
  const [lightIsOn, setLightIsOn] = useState(false);

  // const statusColor  = 'red'
  useEffect(() => {
    const interval = setInterval(() => {
      setLightIsOn(!lightIsOn);
    }, 1000);
    return () => clearInterval(interval);
  }, [lightIsOn]);

  return (
    <div className="relative z-0">
      <div
        className={`w-[${buildingWidth}px] h-[40px] rounded-full relative z-10 border-b-2 border-blue-500`}
        style={{ borderRadius: "50%" }}
      >
        <div
          className={`w-full h-full  relative z-10 border-2 border-slate-300`}
          style={{ borderRadius: "50%" }}
        >
          <div
            className="w-full h-full bg-slate-500  z-10 border-2 border-slate-600 border-l-slate-400 border-b-slate-400 relative"
            style={{ borderRadius: "50%" }}
          >
            <div
              className={clsx(
                "w-[12px] h-[30px]  bg-slate-500 border-slate-600 border-r-slate-500 border-2 absolute"
              )}
              style={{
                borderRadius: "8px",
                top: "-60%",
                left: "60%",
                transition: "all 1s",
              }}
            >
              <div
                className={clsx("w-[12px] h-[14px] border-2 absolute")}
                style={{
                  backgroundColor: lightIsOn
                    ? STATUS_COLORS[status]
                    : STATUS_COLORS[status].darken(0.4),
                  borderColor: lightIsOn
                    ? STATUS_COLORS[status].darken(0.1)
                    : STATUS_COLORS[status].darken(0.4),
                  borderRadius: "8px",
                  top: "-4px",
                  left: "-2px",
                  boxShadow: lightIsOn
                    ? `0 0 10px 8px ${STATUS_COLORS[status].alpha(1)}`
                    : "",
                  transition: "all 1s",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[${buildingWidth}px] h-[40px] bottom-[-80px] left-[-16px] rounded-full z-0 bg-[rgba(0,0,0,0.2)] absolute`}
        style={{ borderRadius: "50%" }}
      ></div>
      <div
        className="w-[20px] h-[80px] bg-slate-400 border-l-slate-600 border-2 border-slate-500 absolute z-0"
        style={{
          bottom: "-60px",
          left: "calc(50% - 10px)",
          borderRadius: "8px",
        }}
      ></div>
      <div
        className={`w-[${buildingWidth}px] h-[40px] bg-slate-400 border-l-slate-600 border-2 border-slate-500 absolute z-0`}
        style={{
          top: "16px",
          borderBottomRightRadius: "50%",
          borderBottomLeftRadius: "50%",
        }}
      />
      <div
        className={`w-[${buildingWidth}px] h-[32px] bg-blue-400 border-l-slate-600 border-2 border-slate-500 absolute z-0`}
        style={{
          top: "16px",
          borderBottomRightRadius: "50%",
          borderBottomLeftRadius: "50%",
        }}
      />
    </div>
  );
};

export default ProjectStatus;
