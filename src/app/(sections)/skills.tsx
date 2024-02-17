import H2 from "@/components/typography/h2";
import Large from "@/components/typography/large";
import P from "@/components/typography/p";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ReactNode } from "react";

const SKILLS = {
  "Front-End Development": [
    // Front-End Development
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Vue.js",
    "Svelte",
    "Bootstrap",
    "Tailwind CSS",
    "Figma",
    "Sketch",
    "Adobe XD",
    "Redux",
    "MobX",
    "Zustand",
    "Jest",
    "Cypress",
    "Selenium",
  ],
  "Back-End Development": [
    // Back-End Development
    "Python",
    "Django",
    "Flask",
    "JavaScript",
    "Node.js",
    "Express",
    "PHP",
    "Laravel",
    "Ruby",
    "Rails",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "RESTful APIs",
    "GraphQL",
    "OAuth",
    "JWT",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
  ],
  "DevOps & Tooling": [
    // DevOps & Tooling
    "Git",
    "GitHub",
    "Webpack",
    "Parcel",
    "Rollup",
    "Jenkins",
    "Travis CI",
    "CircleCI",
    "Jest",
    "Mocha",
    "Chai",
    "Chrome DevTools",
    "Node Inspector",
  ],
  "Additional Skills": [
    // Additional Skills
    "OWASP Top 10",
    "WCAG Guidelines",
    "Lighthouse",
    "WebPageTest",
    "Agile Methodology",
    "Project Management",
  ],
};

type SkillsType = typeof SKILLS;
type SkillKeyType = keyof SkillsType;

const keys = Object.keys(SKILLS) as SkillKeyType[];

export default function Skills() {
  return (
    <section className="mx-auto max-w-2xl p-8">
      <H2 className="mx-auto mb-8 w-max">My Skills</H2>
      <Tabs className="mx-auto" defaultValue={keys[0]}>
        <TabsList className="mb-4 h-full w-full flex-col rounded-lg md:flex-row">
          {keys.map((key) => (
            <TabsTrigger
              className="w-full rounded-lg md:w-max"
              value={key}
              key={key}
            >
              {key}
            </TabsTrigger>
          ))}
        </TabsList>
        {keys.map((key) => (
          <TabsContent className="" key={key} value={key}>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {SKILLS[key].map((skill) => (
                <SkillBadge key={`${key}/${skill}`}>{skill}</SkillBadge>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

function SkillBadge({ children }: { children: ReactNode }) {
  return (
    <Badge className="rounded-lg shadow">
      <P>{children}</P>
    </Badge>
  );
}
