"use client";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Dogs", emoji: "🐶" },
  { name: "Cats", emoji: "🐱" },
  { name: "Birds", emoji: "🐦" },
  { name: "Fish", emoji: "🐟" },
  { name: "Rabbits", emoji: "🐰" },
  { name: "Reptiles", emoji: "🦎" },
  { name: "Small Pets", emoji: "🐹" },
  { name: "Horses", emoji: "🐴" },
];

export default function CategorySection() {
  return (
    <div className="flex overflow-x-auto gap-3 py-2 justify-center">
      {categories.map(({ name, emoji }) => (
        <Button key={name} variant="outline" className="rounded-full flex-shrink-0 hover:scale-105 transition">
          {emoji} {name}
        </Button>
      ))}
    </div>
  );
}
