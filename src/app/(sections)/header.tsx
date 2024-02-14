import HeaderImage from "@/components/header/header-image";
import HeaderDescription from "@/components/header/header-description";
import HeaderButtons from "@/components/header/header-buttons";

export default function Header() {
  return (
    <header className="relative flex min-h-screen w-full flex-col items-center justify-center px-4">
      <div className="-z-999 border-full pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-primary blur-[15rem]" />
      {/* <div className="-z-999 border-full pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary-foreground blur-[10rem]" /> */}
      <HeaderImage />
      <HeaderDescription />
      <HeaderButtons />
    </header>
  );
}
