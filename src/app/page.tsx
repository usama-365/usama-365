import { Button } from "@/components/ui/button";
import Header from "@/app/(sections)/header";
import About from "./(sections)/about";
import Skills from "./(sections)/skills";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
    </main>
  );
}
