import { allPets } from "@/shared/mockdata/mockdata.constant";
import PetCard from "../PetCard";


export default function FeaturedPets() {
  const featured = allPets.slice(0, 8); // first 8 pets

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {featured.map((pet) => (
        <PetCard key={pet.name} {...pet} />
      ))}
    </div>
  );
}
