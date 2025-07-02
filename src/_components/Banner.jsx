import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <div className="bg-white text-slate-800 w-full sticky top-0 z-40 p-4 lg:p-8 px-8 lg:px-24 flex flex-col ">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold uppercase mb-1">
            Kito Clark - Senior software developer
          </h1>
          <h2>
            Ace fullstack developer with a specialty in React, Node.js & humor.
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/KitoC" target="_blank">
            <FontAwesomeIcon size="2xl" icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/kito-clark" target="_blank">
            <FontAwesomeIcon size="2xl" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
