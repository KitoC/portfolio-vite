import React from "react";
import LINKS from "../_constants/links";

const About: React.FC = () => {
  const headingClassname =
    "font-semibold text-lg mb-2 mt-4 first:mt-0 capitalize";
  const linkClassName = "underline font-semibold";

  return (
    <div>
      <h3 className={headingClassname}>My story</h3>
      <p>
        I started my coding journey in 2018 by attending a{" "}
        <a
          className={linkClassName}
          href={LINKS.CODER_ACADEMY}
          target="_blank"
          rel="noopener noreferrer"
        >
          coding boot-camp
        </a>{" "}
        and discovered a hidden passion (and at times unhealthy addiction) from
        the first line of code I wrote. This journey has provided me with the
        skills and privilege of building software in a range of companies and
        industries including{" "}
        <a className={linkClassName} href="#Bridj">
          public transport
        </a>
        ,{" "}
        <a className={linkClassName} href="#NextPractice">
          health care
        </a>
        ,{" "}
        <a className={linkClassName} href="#SandboxAQ">
          cyber security
        </a>{" "}
        and{" "}
        <a className={linkClassName} href="#Simplero">
          online marketing and course creation.
        </a>{" "}
      </p>

      <h3 className={headingClassname}>My ethos</h3>
      <p>
        As a senior software developer, my primary focus is on building
        resilient and maintainable software solutions. I blend creativity with
        logical problem-solving to develop innovative solutions. I am a firm
        believer in fostering a collaborative environment, where knowledge
        sharing and mutual growth are key to enhancing the efficiency and
        performance of the teams I work with.
      </p>
      <h3 className={headingClassname}>My interests</h3>
      <p>
        In my personal time I enjoy travel, surfing and Muay Thai. I also have a
        newfound passion for woodworking, and in specific building wooden
        surfboards.
      </p>
      <p>
        I'm also passionate about automation and efficiency, particularly using
        tools like N8N to automate mundane tasks and integrating AI to
        streamline workflows. I find great satisfaction in identifying
        repetitive processes and building intelligent solutions that save time
        and reduce manual effort.
      </p>
      <p>
        Beyond automation, I'm deeply excited about being part of the evolution
        of technology and how we interact with it. I'm particularly passionate
        about voice agents and AI, exploring how these technologies can create
        more intuitive and natural ways for people to engage with software.
        There's something truly compelling about building systems that
        understand and respond to human communication in real-time, making
        technology more accessible and human-centered.
      </p>

      <p className="mt-8 font-bold">
        Scroll the skies to see where my journey has taken me!
      </p>
    </div>
  );
};

export default About;
