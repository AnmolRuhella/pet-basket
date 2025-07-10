"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/app/store/useCartStore";
import { Pet } from "@/shared/data/mockdata.constant";

export default function PetCard({ id, name, category, image, price, description }: Pet) {
  const addToCart = useCartStore((state) => state.addToCart);
  const router = useRouter();

  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col relative group cursor-pointer"
      onClick={() => router.push(`/pet/${id}`)}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
      />

      <CardContent className="p-4 flex-1 flex flex-col relative">
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{description}</p>

        <div className="mt-auto">
          <p className="text-pink-600 font-semibold mb-2">₹{price}</p>
          <Button
            onClick={(e) => {
              e.stopPropagation(); // ✅ prevent parent card click
              addToCart({ id, name, category, image, price, description });
            }}
            className="w-full"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
