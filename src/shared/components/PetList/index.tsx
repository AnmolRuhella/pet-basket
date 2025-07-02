import PetCard from "../PetCard";

type Pet = {
  name: string;
  type: string;
  image: string;
};

export default function PetList({ pets }: { pets: Pet[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {pets.map((pet) => (
        <PetCard key={pet.name} {...pet} />
      ))}
    </div>
  );
}
