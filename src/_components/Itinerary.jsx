import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { useWindowScroll } from "@uidotdev/usehooks";

const Itinerary = () => {
  const [state, scrollTo] = useWindowScroll();

  return (
    <div className="fixed bottom-0 w-full flex justify-center z-40">
      <button
        onClick={() => {
          document
            .getElementById("scroll-container")
            .scrollTo({ left: 0, top: 0, behavior: "smooth" });
        }}
        className="bg-white text-black p-3 px-4 rounded-t"
      >
        <FontAwesomeIcon icon={faAngleDoubleUp} />
      </button>
    </div>
  );
};

export default Itinerary;
