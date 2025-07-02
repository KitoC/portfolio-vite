import React from "react";

const ChevronUpIcon = ({
  className = "",
  size = "24",
}: {
  className?: string;
  size?: string;
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const Itinerary: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-center z-40">
      <button
        onClick={() => {
          document
            .getElementById("scroll-container")
            ?.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        }}
        className="bg-white text-black p-3 px-4 rounded-t hover:bg-gray-100 transition-colors"
      >
        <ChevronUpIcon />
      </button>
    </div>
  );
};

export default Itinerary;
