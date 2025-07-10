"use client";
import { useParams } from "next/navigation";
import { pets } from "@/shared/data/mockdata.constant";
import PetCard from "@/shared/components/PetCard";

export default function SubCategoryPage() {
  const params = useParams();
  const { category, subCategory } = params as { category: string; subCategory: string };

  // Filter pets
  const filteredPets = pets.filter(
    pet => pet.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="w-full"> {/* full width */}

      {/* ✨ Beautiful header section */}
      <section className="relative bg-gradient-to-r from-red-900 to-red-300 text-white py-12 px-4 shadow">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold capitalize mb-3">{subCategory}</h1>
          <p className="text-lg md:text-xl opacity-95">Discover the best pets in the {category} category</p>
        </div>
      </section>

      {/* ✨ Pets grid */}
      <section className="px-4 py-10">
        {filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPets.map(pet => (
              <PetCard key={pet.id} {...pet} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <p className="text-lg">No pets found in this subcategory.</p>
          </div>
        )}
      </section>
    </main>
  );
}
