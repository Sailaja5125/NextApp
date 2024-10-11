"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          >
          </MenuItem>
        </Link>
        <Link href={"/pages"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Our Courses"
          >
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/pages">All Courses</HoveredLink>
            <HoveredLink href="/">Basic Music Theory</HoveredLink>
            <HoveredLink href="/">Advanced Composition</HoveredLink>
            <HoveredLink href="/">Music Production</HoveredLink>
          </div>
          </MenuItem>

        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact us"
          >
           
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
