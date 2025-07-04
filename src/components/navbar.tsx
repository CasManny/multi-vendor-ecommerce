"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/features",
    children: "Features",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href={"/"} className="pl-6 flex items-center">
        <span className="text-5xl font-semibold">GumRoad</span>
      </Link>
      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavbarItem key={item.href} href={item.href} isActive>
              {item.children}
            </NavbarItem>
          );
        })}
      </div>
      <div className="hidden lg:flex">
        <Button
          asChild
          variant={"secondary"}
          className="border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href={"/sign-in"}>Login</Link>
        </Button>
        <Button
          asChild
          className="border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-black hover:bg-pink-400 transition-colors text-lg text-white"
        >
          <Link href={"/sign-up"}>Start selling</Link>
        </Button>
      </div>
    </div>
  );
};
