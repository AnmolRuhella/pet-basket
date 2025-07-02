"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; 
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 py-3 border-b shadow-sm">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          🐾 PetBasket
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/">
            <Button variant="outline">Home</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact</Button>
          </Link>
           <Link href="/logout">
            <Button variant="destructive">Logout</Button>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile menu (only if open) */}
      {menuOpen && (
        <div className="flex flex-col gap-2 mt-2 md:hidden">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start">Home</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="w-full justify-start">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="w-full justify-start">Contact</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
