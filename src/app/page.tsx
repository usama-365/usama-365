import Header from "@/app/(sections)/header";
import About from "@/app/(sections)/about";
import Skills from "@/app/(sections)/skills";
import Portfolio from "@/app/(sections)/portfolio";
import Services from "@/app/(sections)/services";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Services />
    </main>
  );
}
