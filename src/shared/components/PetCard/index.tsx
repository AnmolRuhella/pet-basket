"use client";
import { Card, CardContent } from "@/components/ui/card";

type Pet = {
  name: string;
  type: string;
  image: string;
};

export default function PetCard({ name, type, image }: Pet) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-muted-foreground">{type}</p>
      </CardContent>
    </Card>
  );
}
