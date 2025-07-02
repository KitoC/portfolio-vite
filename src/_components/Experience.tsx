import React from "react";
import SkillPill from "./SkillPill";
import Island from "./Island";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import LINKS from "../_constants/links";
import dayjs from "dayjs";

interface Job {
  name: string;
  location: string;
  from: string;
  to: string;
  type: string;
  link?: string;
  description: React.ReactElement;
  achievements: string[];
  skills: string[];
}

const jobs: Job[] = [
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
      "Implemented dashboards for real-time bus fleet tracking, improving operational efficiency and tracking up to 20 vehicles at a time",
      "Established micro-services for real-time communication, enhancing customer support responsiveness and connecting 100s of users",
      "Improved vehicle scheduling UX for operators allowing them to complete scheduling jobs 15% faster",
      "Implemented interactive maps using google maps API",
      "Architected and lead development on web-socketed NodeJS messaging service",
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
    from: "05/01/2021",
    to: "08/01/2022",
    type: "Contract",
    description: (
      <p>
        Qld government initiative, Tell Us Once, designed to bring all the
        services under one roof. Our goal was to create a platform to improve
        cross department inter-operability.
      </p>
    ),
    achievements: [
      "Developed web components for cross-departmental solutions, improving data interoperability",
      "Improved platform by squashing bugs",
      "Built out a complex form generator",
    ],
    skills: ["Javascript", "React", "Node.js", "Webpack", "Web Components"],
  },
  {
    name: "NextPractice",
    location: "Remote, Australia",
    from: "09/01/2021",
    to: "10/01/2022",
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
      "Created headless React components for EHR platform integration, enhancing UX for 10 medical practitioners",
      "Integrated Tyro payment systems for EHR platform",
      "Directed backend development for scalable health solutions and data migration",
      "Optimized webpack configurations, improving build speed by 22 minutes",
      "Lead frontend development for headless components library",
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
    from: "10/01/2022",
    to: "03/01/2023",
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
      "Utilised web-components to migrate PHP frontend to React and migrated 20% of original application",
      "Successfully executed objectives and developed features through remote collaboration and asynchronous communication",
      "Improved UX for an advanced table filtering and search feature",
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
    from: "03/01/2023",
    to: "09/01/2023",
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
      "Lead development to modernise codebase, boosting maintainability & improving developer experience",
      "Built and deployed an in-page website builder, enhancing UI and streamlining site creation for 1000s of users",
      "Expanded functionality of graphql API",
      "Developed features with StimulusJS and ruby on rails",
      "Collaborated remotely and communicated asynchronously to deliver objectives and features",
    ],
    skills: [
      "React",
      "Typescript",
      "React-Relay",
      "GraphQL",
      "JQuery",
      "Ruby on Rails",
      "Liquid",
      "StimulusJS",
      "ViewComponent",
    ],
  },
  {
    name: "Career interlude & Freelancing",
    location: "Remote, Australia",
    from: "09/01/2023",
    to: "02/01/2024",
    type: "Freelance",
    description: (
      <p>
        I took a short career break to follow a passion project. I found a
        passion in building surfboards from wood. I spent time in the workshop
        crafting a variety of surfboards and learning the art of shaping. I also
        spent time freelancing for clients including Capability Psychology to
        ensure my coding skills didn&apos;t get too dusty.
      </p>
    ),
    skills: [
      "Surfboard shaping",
      "Woodworking skills",
      "Machinery skills",
      "Hand carving tools",
      "Gatsby",
      "Contentful",
      "React",
    ],
    achievements: [
      "Built 12 surfboards of varying shapes and sizes",
      "Learned how to use a variety of woodworking tools",
      "Learned how to use a surfboard shaping software",
      "Put myself out there with my creations at a few markets to show my boards to the community",
      "Redesigned Capability Psychology site with Gatsby",
      "Added Contentful for content management",
    ],
  },
  {
    name: "TeamForm",
    location: "Remote",
    from: "02/01/2024",
    to: "Present",
    type: "Full-time",
    link: LINKS.TEAMFORM,
    description: (
      <p>
        TeamForm provides an interface with a teams first view of organizations.
        It shows full visibility of the teams, their roles and objectives. It
        provides visualization tools to understand your organization better and
        a host of other useful features that help in providing clarity within
        large companies.
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
      "SQL",
    ],
    achievements: [
      "Consolidated two apps into one to bring parity between the two",
      "Utilised graph libraries to create complex visualisation dashboard",
      "Refactored existing code for better readability and maintainability",
      "Worked on complex SQL queries for providing recursive data structures",
      "Pioneered the implementation of a realtime/low latency voice AI agent that could be used to answer questions about the data and navigate the app",
    ],
  },
];

const formatFromAndTo = (from: string, to: string): React.ReactElement => {
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

const Experience: React.FC = () => {
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
            <Island flip={index % 2 === 1}>
              <div className="flex flex-col gap-8">
                <div className="flex justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    {job.link ? (
                      <a
                        className="text-2xl font-bold"
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.name}
                        <FontAwesomeIcon
                          size="2xs"
                          className="ml-2"
                          icon={faArrowUpRightFromSquare}
                        />
                      </a>
                    ) : (
                      <h2 className="text-2xl font-bold">{job.name}</h2>
                    )}
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
