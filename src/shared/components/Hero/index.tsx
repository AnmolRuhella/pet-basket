"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-yellow-100 to-pink-100 text-center py-20 px-4 relative">
      <h1 className="text-5xl font-bold mb-4">Find your perfect pet friend 🐾</h1>
      <p className="text-gray-700 mb-6">Thousands of pets are waiting to meet you</p>

      <Link href="/category/dogs/labrador">
        <Button size="lg" className="bg-primary text-white hover:scale-105 transition">
          Browse Pets
        </Button>
      </Link>

      <img
        src="/assest/logo1.png"
        alt="Cute Dog"
        className="absolute bottom-0 right-4 w-40 hidden md:block "
      />
    </section>
  );
}
