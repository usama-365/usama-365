import HeroImage from "@/components/hero/hero-image";
import HeroDescription from "@/components/hero/hero-description";
import HeroButtons from "@/components/hero/hero-buttons";

const EMAIL = "usama-365@protonmail.com";
const LINKED_IN_URL = "https://www.linkedin.com/in/usama365/";
const GITHUB_URL = "https://github.com/usama-365";
const CV_NAME = "cv.pdf";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-28"
    >
      {/* Bulb */}
      <div className="-z-999 border-full pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-primary blur-[15rem]" />

      <HeroImage />
      <HeroDescription />
      <HeroButtons
        email={EMAIL}
        linkedinUrl={LINKED_IN_URL}
        githubUrl={GITHUB_URL}
        cvName={CV_NAME}
      />
    </header>
  );
}
