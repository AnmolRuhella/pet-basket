
import { pets } from "@/shared/data/mockdata.constant";
import PetCard from "../PetCard";

export default function FeaturedPets() {
  const featured = pets.slice(0, 8); 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {featured.map((pet) => (
        <PetCard key={pet.name} {...pet} />
      ))}
    </div>
  );
}
