import Header from "@/app/(sections)/header";
import About from "./(sections)/about";
import Skills from "./(sections)/skills";
import Portfolio from "./(sections)/portfolio";
import Testimonials from "@/app/(sections)/testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Testimonials />
    </main>
  );
}
