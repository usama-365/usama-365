import Hero from "@/app/(sections)/hero";
import About from "@/app/(sections)/about";
import Skills from "@/app/(sections)/skills";
import Portfolio from "@/app/(sections)/portfolio";
import Services from "@/app/(sections)/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Services />
    </main>
  );
}
