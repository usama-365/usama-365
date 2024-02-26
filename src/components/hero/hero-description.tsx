"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

import H1 from "@/components/typography/h1";
import H3 from "@/components/typography/h3";
import { cn } from "@/lib/utils";

const NAME = "Usama";
const PROFESSION = "Web & Mobile App Developer";
const YEARS_OF_EXPERIENCE = calculateYearsOfExperience();

const initial = {
  opacity: 0,
  y: 100,
};

const final = {
  opacity: 1,
  y: 0,
};

export default function HeroDescription() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
      className="text-center"
    >
      <H1 className="mb-5 mt-5">
        Hello! I&apos;m <span className="text-primary">{NAME}.</span>
      </H1>

      <H3 className="mb-8 max-w-2xl text-center text-muted-foreground">
        <Highlight>{PROFESSION}. </Highlight>
        <span>
          Building robust and innovative Full-Stack solutions for over
        </span>
        <Highlight className="text-nowrap">
          {" "}
          {YEARS_OF_EXPERIENCE} years.
        </Highlight>
      </H3>
    </motion.div>
  );
}

function Highlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("text-foreground", className)}>{children}</span>;
}

function calculateYearsOfExperience(from = "2020-06-01") {
  return (
    Math.round(
      (Date.now() - Date.parse(from)) / (1000 * 60 * 60 * 24 * 365.25),
    ) || 0
  );
}
