"use client";

import NextLink from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Portfolio",
    path: "#portfolio",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Services",
    path: "#services",
  },
  {
    name: "Testimonials",
    path: "#testimonials",
  },
  {
    name: "Contact",
    path: "#contact",
  },
] as const;

export default function Header() {
  return (
    <NavigationMenu className="fixed left-0 top-0 w-full max-w-full border-b p-2 shadow backdrop-blur sm:left-1/2 sm:top-5 sm:max-w-max sm:-translate-x-1/2 sm:rounded-lg sm:border">
      <NavigationMenuList className="flex-wrap sm:flex-nowrap">
        {NAV_LINKS.map(({ name, path }, i) => (
          <NavigationMenuItem className="" key={path}>
            <Link
              active={i === 0}
              className="bg-transparent hover:bg-transparent"
              href={path}
            >
              {name}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function Link({
  href,
  children,
  active = false,
  className = "",
}: {
  href: string;
  active?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          active ? "text-primary" : "text-muted-foreground",
          className,
        )}
        active={active}
      >
        {children}
      </NavigationMenuLink>
    </NextLink>
  );
}
