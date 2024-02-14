import H1 from "@/components/typography/h1";
import H3 from "@/components/typography/h3";
import H4 from "../typography/h4";
import type { ReactNode } from "react";

const NAME = "Usama";
const PROFESSION = "Web & Mobile App Developer";
const YEARS_OF_EXPERIENCE = calculateYearsOfExperience();

export default function HeaderDescription() {
  return (
    <>
      <H1 className="mb-5 mt-5">
        Welcome! I&apos;m <span className="text-primary">{NAME}.</span>
      </H1>
      <H3 className="mb-8 max-w-2xl text-center text-muted-foreground">
        <Highlight>{PROFESSION}. </Highlight>
        <span>
          Building robust and innovative Full-Stack solutions for over
        </span>
        <Highlight> {YEARS_OF_EXPERIENCE} years.</Highlight>
      </H3>
    </>
  );
}

function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-foreground">{children}</span>;
}

function calculateYearsOfExperience(from = "2020-06-01") {
  return (
    Math.round(
      (Date.now() - Date.parse(from)) / (1000 * 60 * 60 * 24 * 365.25),
    ) || 0
  );
}
