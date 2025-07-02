import SkillPill from "./SkillPill";
import Island from "./Island";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import LINKS from "../_constants/links";
import dayjs from "dayjs";

const jobs = [
  {
    name: "Bridj",
    location: "Brisbane, Australia",
    from: "01/01/2019",
    to: "03/01/2021",
    type: "Full-time",
    link: LINKS.BRIDJ,
    description: (
      <p>
        Bridj is a SAAS for public transport. Our mission was to create a
        smarter transport system where operators could design hybrid bus routes.
        Operators can design services that would be fixed-route during peak
        hours and on-demand during off-peak.
      </p>
    ),
    achievements: [
      "Implemented interactive map interfaces with live vehicle tracking.",
      "Architected modular frontend.",
      "Deployed realtime messaging service.",
      "Improved build configurations with webpack.",
      "Built out component library with Storybook.",
      "Designed interfaces in Figma for proof of concept work.",
    ],
    skills: [
      "Javascript",
      "React",
      "Vue",
      "Ruby on Rails",
      "Redux",
      "Python",
      "Node.js",
      "Webpack",
      "Google maps API",
      "Web-sockets",
      "Storybook",
      "Figma",
      "Postgres",
      "Sequelize",
      "REST",
    ],
  },
  {
    name: "QLD Gov",
    location: "Brisbane, Australia",
    from: "05/05/2021",
    to: "08/08/2023",
    type: "Contract",
    description: (
      <p>
        Qld government initiative, Tell Us Once, designed to bring all the
        services under one roof. Our goal was to create a platform to improve
        cross department inter-operability.
      </p>
    ),
    achievements: [
      "Implemented web-components to embed components agnostic of framework.",
      "Implemented custom form builder.",
      "Bug hunting and fixing.",
    ],
    skills: ["Javascript", "React", "Node.js", "Webpack", "Web Components"],
  },
  {
    name: "NextPractice",
    location: "Remote",
    from: "09/09/2021",
    from: "10/10/2022",
    type: "Full-time",
    link: LINKS.NEXT_PRACTICE,
    description: (
      <p>
        NextPractice is a franchise model for GP clinics that provide an in
        house EHR solution. The mission was to provide the best medical clinic
        experience on the planet.
      </p>
    ),
    achievements: [
      "Created a suite of headless react components to implement into a 3rd party EHR platform.",
      "Strategized backend APIs.",
      "Integrated with third party APIs for Medicare and Tyro.",
      " Brainstormed and implemented user experiences for smart billing and batching interfaces.",
      "Optimized webpack configurations.",
      "Designed database schemas.",
    ],
    skills: [
      "React",
      "React-Query",
      "Node.js",
      "Webpack",
      "Headless Components",
      "MySQL",
      "Knex.JS",
      "Typescript",
      "Backbone.js",
      "Marionette",
      "GraphQL",
    ],
  },
  {
    name: "SandboxAQ",
    location: "Remote",
    from: "10/10/2022",
    to: "03/03/2023",
    type: "Contract",
    link: LINKS.SANDBOX_AQ,
    description: (
      <p>
        SandboxAQ is at the forefront of quantum cyber security, leveraging the
        compound effects of AI and Quantum technologies to solve hard challenges
        impacting society.
      </p>
    ),
    achievements: [
      "Implemented unique approach for a legacy rewrite with web-components.",
      "Rebuilt legacy pages and components with modern design and react.",
      "Developed a powerful table search and filtering UI.",
    ],
    skills: [
      "React",
      "Typescript",
      "PHP",
      "Web Components",
      "Webpack",
      "GraphQL",
    ],
  },
  {
    name: "Simplero",
    location: "Remote",
    from: "03/03/2023",
    to: "09/09/2023",
    type: "Contract",
    link: LINKS.SIMPLERO,
    description: (
      <p>
        Simplero is a CRM for online business owners. The mission was simply
        simplifying the day to day management of online businesses for coaches,
        consultants, course creators, and service businesses.
      </p>
    ),
    achievements: [
      "Migrated legacy codebase into modernized React.",
      "Rebuilt in-browser site and landing page editor.",
      "Developed new site builder sections with Liquid.",
      "Developed new features in Ruby on Rails.",
      "Bug hunting and fixes.",
    ],
    skills: [
      "React",
      "Typescript",
      "React-Relay",
      "GraphQL",
      "JQuery",
      "Ruby on Rails",
      "Liquid",
      "Stimulus",
      "ViewComponent",
    ],
  },
  {
    name: "Short career interlude",
    location: "Remote, Australia",
    from: "09/09/2023",
    to: "02/01/2023",
    type: "Fulltime",
    link: LINKS.TEAMFORM,
    description: (
      <p>
        I took a short career break to follow a passion project. I found a
        passion in building surfboards from wood. I spent time in the workshop
        crafting a variety of surfboards and learning the art of shaping. I also
        spent time freelancing for a few clients to ensure my coding skills
        didn&apos;t get too dusty.
      </p>
    ),
    skills: [
      "Surfboard shaping",
      "Woodworking skills",
      "Machinery skills",
      "Hand carving tools",
    ],
    achievements: [
      "Built 12 surfboards of varying shapes and sizes.",
      "Learned how to use a variety of woodworking tools.",
      "Learned how to use a surfboard shaping software.",
      "Put myself out there with my creations at a few markets to show my boards to the community.",
    ],
  },
  {
    name: "TeamForm",
    location: "Remote, Australia",
    from: "02/01/2023",
    to: "Present",
    type: "Fulltime",
    link: LINKS.TEAMFORM,
    description: (
      <p>
        TeamForm allows provides an interface with a teams first view of
        organizations. It shows full visibility of the teams, their roles and
        objectives. It provides visualization tools to understand your
        organization better and a host of other useful features that help in
        providing clarity within large companies.
      </p>
    ),
    skills: [
      "React",
      "React Flow",
      "Graphs/Visualizations",
      "GraphQL",
      "NodeJS",
      "Jest",
      "PostgresQL",
      "Storybook",
      "ElasticSearch",
    ],
    achievements: [
      "Consolidated two apps into one to bring parity between the two.",
      "Refactored existing code for better readability and maintainability.",
      "Worked on complex SQL queries for providing recursive data structures.",
      "Developed visualization UI with React.",
      "Developed complex and functional org charts with React Flow",
      "Developed complex node visualizations for displaying relationships between OKRs, work tasks and teams with React Flow",
    ],
  },
];

const formatFromAndTo = (from, to) => {
  const fromDate = dayjs(from);
  const toDate = dayjs(to);

  const format = "MMM YYYY";

  return (
    <>
      <span>{fromDate.format(format)}</span>
      <FontAwesomeIcon size="xs" className="mx-3" icon={faPlane} />
      <span>{to === "Present" ? to : toDate.format(format)}</span>
    </>
  );
};
const Experience = () => {
  return (
    <>
      <div className="px-24">
        <h1 className="text-3xl">EXPERIENCE</h1>
      </div>

      {[...jobs].reverse().map((job, index) => {
        const metaInfo = (
          <div className="text-sm">
            <p className="font-semibold mb-1 text-sm">
              {formatFromAndTo(job.from, job.to)}
            </p>
            <p className="font-semibold">
              {job.location}, {job.type}
            </p>
          </div>
        );

        return (
          <div id={job.name} key={job.name}>
            <div className="px-24"></div>
            <Island key={job.name} flip={index % 2}>
              <div className="flex flex-col gap-8">
                <div className="flex justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <a
                      className="text-2xl font-bold"
                      href={job.link}
                      target="_blank"
                    >
                      {job.name}
                      <FontAwesomeIcon
                        size="2xs"
                        className="ml-2"
                        icon={faArrowUpRightFromSquare}
                      />
                    </a>
                    <div className="flex flex-col md:flex-row-reverse md:justify-between gap-2">
                      <div>{metaInfo}</div>

                      <div className="italic text-sm md:w-2/3">
                        {job.description}
                      </div>
                    </div>
                  </div>

                  {/* <div className="max-sm:hidden">{metaInfo}</div> */}
                </div>

                <div>
                  <div>
                    <h3 className="font-bold mb-2 text-base">Achievements:</h3>
                    <ul className="list-disc pl-6">
                      {job.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-base">Skills</h3>

                  <div className="flex items-end gap-2 flex-wrap">
                    {job.skills.map((skill) => (
                      <SkillPill key={skill} skill={skill}></SkillPill>
                    ))}
                  </div>
                </div>
              </div>
            </Island>
          </div>
        );
      })}
    </>
  );
};

export default Experience;
