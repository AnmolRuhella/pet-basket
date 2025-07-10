"use client";
import { useParams } from "next/navigation";
import { pets } from "@/shared/data/mockdata.constant";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/app/store/useCartStore";

export default function PetDetailsPage() {
  const params = useParams();
  const { id } = params as { id: string };

  const pet = pets.find((p) => p.id === parseInt(id));
  const addToCart = useCartStore((state) => state.addToCart);

  if (!pet) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Pet not found.
      </div>
    );
  }

  return (
    <main className="bg-white w-full">
      {/* ✨ Hero / Image section */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Pet image */}
          <div className="bg-white rounded shadow p-4 flex items-center justify-center">
            <img
              src={pet.image}
              alt={pet.name}
              className="rounded w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>

          {/* Pet details */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold">{pet.name}</h1>
            <p className="capitalize text-gray-500">Category: {pet.category}</p>

            <div className="text-2xl md:text-3xl text-pink-600 font-semibold">
              ₹{pet.price}
            </div>

            <p className="text-gray-700 leading-relaxed">
              {pet.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => addToCart(pet)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ✨ Extra details: behavior & feedback */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
        {/* Behavior */}
        <div className="bg-gray-50 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Behavior</h2>
          <p className="text-gray-600">
            Friendly, playful, and loyal companion. Perfect for families and kids!
          </p>
        </div>

        {/* Customer feedback */}
        <div className="bg-gray-50 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Customer Feedback</h2>
          <p className="text-gray-600 italic">
            &quot;We adopted Max and he’s the sweetest! Loves to play in the yard.&quot;
          </p>
        </div>
      </div>
    </main>
  );
}
