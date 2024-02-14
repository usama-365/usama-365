import HeaderImage from "@/components/header/header-image";
import HeaderDescription from "@/components/header/header-description";
import HeaderButtons from "@/components/header/header-buttons";

export default function Header() {
  return (
    <header className="flex min-h-screen flex-col items-center justify-center px-4">
      <HeaderImage />
      <HeaderDescription />
      <HeaderButtons />
    </header>
  );
}
