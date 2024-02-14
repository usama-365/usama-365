import H1 from "@/components/typography/h1";
import H3 from "@/components/typography/h3";

const NAME = "Usama";
const PROFESSION_1 = "Web & Mobile App Developer";
const PROFESSION_2 = "Designer";
const YEARS_OF_EXPERIENCE = 4;
const FAV_TECH_STACK_1 = "MERN";
const FAV_TECH_STACK_2 = "Next";

export default function HeaderDescription() {
  return (
    <>
      <H1 className="mb-4 mt-5  ">
        Hey There, I&apos;m <span className="text-primary">{NAME}.</span>
      </H1>
      <H3 className="mb-10 max-w-2xl text-center text-muted-foreground">
        <span>A </span>
        <span className="text-foreground">{PROFESSION_1}</span>
        <span> and </span>
        <span className="text-foreground">{PROFESSION_2}</span>
        <span>, with </span>
        <span className="text-foreground">{YEARS_OF_EXPERIENCE} years</span>
        <span> of experience. Introvert by nature.</span>
      </H3>
    </>
  );
}
