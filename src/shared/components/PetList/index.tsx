import React from 'react';
import PetCard from '../PetCard';
import { pets } from '@/shared/data/mockdata.constant';



export default function PetsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {pets.map(pet => (
        <PetCard key={pet.id} {...pet} />
      ))}
    </div>
  );
}
