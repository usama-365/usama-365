import H2 from "@/components/typography/h2";
import P from "@/components/typography/p";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SKILLS, { type SkillKeyType } from "@/data/skills";
import type { ReactNode } from "react";

const keys = Object.keys(SKILLS) as SkillKeyType[];

export default function Skills() {
  return (
    <section className="mb-12 flex flex-col items-center justify-center px-4">
      <H2 className="mx-auto mb-8 w-max ">My Skills</H2>
      <Tabs
        className="flex flex-col items-center justify-center"
        defaultValue={keys[0]}
      >
        <TabsList className="mb-4 flex h-full flex-wrap">
          {keys.map((key) => (
            <TabsTrigger className="rounded-lg " value={key} key={key}>
              {key}
            </TabsTrigger>
          ))}
        </TabsList>
        {keys.map((key) => (
          <TabsContent className="max-w-2xl" key={key} value={key}>
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
    <Badge className="cursor-default rounded-lg shadow">
      <P>{children}</P>
    </Badge>
  );
}
