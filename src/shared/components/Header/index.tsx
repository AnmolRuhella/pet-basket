"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/app/store/useCartStore";
import { categories } from "@/shared/data/mockdata.constant";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const cartItems = useCartStore((state) => state.items);

  // Helper to close dropdowns when a category is clicked
  const handleCategoryClick = () => {
    setShowDropdown(false);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm w-full overflow-x-hidden">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            🐾 PetBasket
          </Link>

          {/* Categories button - desktop */}
          <div className="hidden md:block">
            <Button
              variant="ghost"
              className="text-lg font-semibold"
              onClick={() => setShowDropdown(!showDropdown)}
            >
               Browse by Categories
            </Button>
          </div>

          {/* Cart + Hamburger */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <Link href="/cart" className="relative">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Hamburger - mobile only */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Desktop dropdown */}
      {showDropdown && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[60px] w-[90vw] max-w-5xl bg-gradient-to-b from-red-800 to-red-300 text-white rounded-xl shadow-2xl p-6 z-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.label}>
                <h3 className="text-lg font-bold mb-2">{cat.label}</h3>
                <ul className="pl-2 space-y-1 text-sm">
                  {cat.sub.map((sub) => (
                    <li key={sub}>
                      <Link
                        href={`/category/${cat.label.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className="hover:underline text-white/90"
                        onClick={handleCategoryClick}
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="secondary" onClick={() => setShowDropdown(false)}>
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow">
          <span className="font-semibold text-gray-700 mb-2">Categories</span>
          <div className="flex flex-col gap-3">
            {categories.map((cat) => (
              <div key={cat.label}>
                <p className="text-base font-medium text-primary">{cat.label}</p>
                <ul className="pl-3 space-y-1">
                  {cat.sub.map((sub) => (
                    <li key={sub}>
                      <Link
                        href={`/category/${cat.label.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-700 hover:underline text-sm"
                        onClick={handleCategoryClick}
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
