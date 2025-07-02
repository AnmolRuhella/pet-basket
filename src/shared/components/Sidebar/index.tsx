"use client";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Dogs",
  "Cats",
  "Birds",
  "Fish",
  "Rabbits",
  "Reptiles",
  "Small Pets",
  "Horses",
  "Others",
];

export default function Sidebar({
  selectedCategory,
  onSelectCategory
}: {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}) {
  return (
    <aside className="w-64 min-h-screen border-r p-4 hidden md:block">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="justify-start"
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </aside>
  );
}
