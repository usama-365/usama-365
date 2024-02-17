import { Button } from "@/components/ui/button";
import Header from "@/app/(sections)/header";
import About from "./(sections)/about";
import Portfolio from "./(sections)/portfolio";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Portfolio />
    </main>
  );
}
