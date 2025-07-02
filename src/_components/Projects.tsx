import React from "react";
import SkillPill from "./SkillPill";
import Island from "./Island";
import ProjectStatus, { STATUS } from "./ProjectStatus";
import LINKS from "../_constants/links";

const ExternalLinkIcon = ({
  className = "",
  size = "16",
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
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  name: string;
  company: string;
  yearLastTouched: string;
  links: ProjectLink[];
  description: string;
  skills: string[];
  status: STATUS;
}

const projects: Project[] = [
  {
    name: "Capability Psychology",
    company: "Freelance project",
    yearLastTouched: "2023",
    links: [{ label: "Live site", href: LINKS.CAPABILITY_PSYCHOLOGY }],
    description:
      "A freelance project where I redesigned the entire website for a psychology practice, implementing modern design and content management capabilities.",
    skills: ["Gatsby", "Contentful", "React", "JavaScript", "CSS"],
    status: STATUS.LIVE,
  },
  {
    name: "Fleet Byron Bay",
    company: "Personal project",
    yearLastTouched: "2024",
    links: [{ label: "Instagram", href: LINKS.FLEET_BYRON_BAY_IG }],
    description:
      "In 2023, I found a passion for building hollow wooden surfboards. Each surfboard is unique and made with Australian grown Paulownia and Australian red cedar.",
    skills: ["Woodcrafting", "Surfboard Shaping", "Shape3D"],
    status: STATUS.LIVE,
  },
  {
    name: "Mockend",
    company: "Personal project",
    yearLastTouched: "2019",
    links: [{ label: "Github", href: LINKS.GITHUB_MOCKEND }],
    description:
      "A backend as a service for rapidly generating database models with REST and GraphQL endpoints.",
    skills: ["Typescript", "Node.JS", "SQL", "Postgres", "REST", "GraphQL"],
    status: STATUS.ABANDONED,
  },
  {
    name: "Pixel Frontier",
    company: "Personal project",
    yearLastTouched: "2022",
    links: [{ label: "Github", href: LINKS.GITHUB_PIXEL_FRONTIER }],
    description:
      "Started playing around with phaser.io with a pixel based open RPG sandbox game.",
    skills: [
      "Typescript",
      "Node.JS",
      "SQL",
      "Postgres",
      "REST",
      "Phaser.io",
      "Pixel art",
    ],
    status: STATUS.ABANDONED,
  },
  {
    name: "Up Tracker",
    company: "Personal project",
    yearLastTouched: "2022",
    links: [
      { label: "Github", href: LINKS.GITHUB_UP_TRACKER },
      { label: "Live website", href: LINKS.UP_TRACKER },
    ],
    description:
      "A simple UI that uses the Up banking api for display purchase data including budgeting.",
    skills: ["Typescript", "React"],
    status: STATUS.IN_PROGRESS,
  },
  {
    name: "Folk Service",
    company: "Personal project",
    yearLastTouched: "2021",
    links: [
      { label: "Github", href: LINKS.GITHUB_FOLK_SERVICE },
      { label: "Live backend url", href: LINKS.FOLK_SERVICE },
    ],
    description:
      "This is a personal user and authentication micro-service that I build for any personal apps that I have built.",
    skills: ["Typescript", "Node.JS"],
    status: STATUS.IN_PROGRESS,
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <div className="px-24">
        <h1 className="text-3xl">PROJECTS</h1>
      </div>

      <Island>
        <div className="flex flex-col gap-10">
          <p>
            In my spare time I like to tinker with things. I have always enjoyed
            learning new things or figuring out better ways of doing things.
            Most of these projects are tech based, however there might be some
            here that aren&apos;t because they are just cool and fun!
            <br />
            <br />
            <strong>Green</strong> flight towers means they are active being
            worked on and potentially deployed.
            <br /> <strong>Yellow</strong>, deployed but not actively worked on.{" "}
            <br />
            <strong>Red</strong>, abandoned/defunct.
          </p>
        </div>
      </Island>
      {projects
        .sort(
          (a, b) => parseInt(b.yearLastTouched) - parseInt(a.yearLastTouched)
        )
        .map((project, index) => (
          <React.Fragment key={project.name}>
            <div className="px-24"></div>
            <Island flip={index % 2 === 1}>
              <div className="flex flex-col gap-10 ">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold mb-2">{project.name}</h2>

                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      className="underline"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <ExternalLinkIcon className="ml-2" size="16" />
                    </a>
                  ))}
                </div>

                {project.description}
                <div className="flex gap-2 flex-wrap">
                  {project.skills.map((skill) => (
                    <SkillPill key={skill} skill={skill}></SkillPill>
                  ))}
                </div>

                <div className="flex">
                  <p>Last updated in {project.yearLastTouched}</p>
                </div>

                <div className="absolute right-0 top-[-80px] p-8">
                  <ProjectStatus status={project.status} />
                </div>
              </div>
            </Island>
          </React.Fragment>
        ))}
    </>
  );
};

export default Projects;
