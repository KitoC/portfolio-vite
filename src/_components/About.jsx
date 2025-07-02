import LINKS from "../_constants/links";

const About = () => {
  const headingClassname =
    "font-semibold text-lg mb-2 mt-4 first:mt-0 capitalize";
  const linkClassName = "underline font-semibold";

  return (
    <div>
      <h3 className={headingClassname}>My story</h3>
      <p>
        I started my coding journey in 2018 by attending a{" "}
        <a className={linkClassName} href={LINKS.CODER_ACADEMY} target="_blank">
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
        I enjoy blending creativity with logic in my quest to solve real world
        problems in the cyber universe. I am a firm believer in fostering a
        collaborative environment, where knowledge sharing and mutual growth are
        key to enhancing the efficiency and performance of the teams I work
        with.
        <br />
      </p>
      <h3 className={headingClassname}>My interests</h3>
      <p>
        In my personal time I enjoy travel, surfing and Muay Thai. I also have a
        new found passion for woodworking, specifically wooden surfboards.
      </p>

      <p className="mt-8 font-bold">
        Scroll the skies to see where my journey has taken me!
      </p>
    </div>
  );
};

export default About;
