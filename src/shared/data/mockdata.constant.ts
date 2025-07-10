// pets.ts

export type Pet = {
  id: number;
  name: string;
  category: string;      
  image: string;
  price: number;
  description: string;
};

export const pets: Pet[] = [
  // Dogs
  { id: 1, name: "Buddy", category: "Dogs", image: "/assest/dog.webp", price: 5000, description: "Loyal and energetic companion." },
  { id: 2, name: "Max", category: "Dogs", image: "/assest/dog1.avif", price: 5200, description: "Loves to play fetch and go on walks." },
  { id: 3, name: "Bella", category: "Dogs", image: "/assest/dog3.jpg", price: 4800, description: "Sweet and affectionate." },
  { id: 4, name: "Charlie", category: "Dogs", image: "/assest/dog4.jpg", price: 5500, description: "Great with kids and families." },
  { id: 5, name: "Lucy", category: "Dogs", image: "/assest/dog5.jpg", price: 4700, description: "Calm and friendly nature." },

  // Cats
  { id: 6, name: "Mittens", category: "Cats", image: "/assest/cat1.jpg", price: 3000, description: "Loves naps and cozy corners." },
  { id: 7, name: "Whiskers", category: "Cats", image: "/assest/cat2.jpg", price: 2800, description: "Playful and clever." },
  { id: 8, name: "Luna", category: "Cats", image: "/assest/cat3.jpg", price: 3100, description: "Elegant and calm." },
  { id: 9, name: "Simba", category: "Cats", image: "/assest/cat4.jpg", price: 3200, description: "Loves to climb and explore." },
  { id: 10, name: "Chloe", category: "Cats", image: "/assest/cat5.jpg", price: 2900, description: "Very affectionate lap cat." },

  // Birds
  { id: 11, name: "Tweety", category: "Birds", image: "/assest/bird1.jpg", price: 1200, description: "Small and chirpy bird." },
  { id: 12, name: "Sky", category: "Birds", image: "/assest/bird2.jpg", price: 1400, description: "Sings beautiful tunes." },

  // Fish
  { id: 13, name: "Nemo", category: "Fish", image: "/assest/fish1.jpg", price: 900, description: "Bright and active." },
  { id: 14, name: "Goldie", category: "Fish", image: "/assest/fish2.jpg", price: 850, description: "Peaceful and easy to care." },

  // Rabbits
  { id: 15, name: "Thumper", category: "Rabbits", image: "/assest/rabbit1.jpg", price: 2500, description: "Fluffy and cuddly." },
  { id: 16, name: "Coco", category: "Rabbits", image: "/assest/rabbit2.jpg", price: 2600, description: "Playful hopper." },

  // Reptiles
  { id: 17, name: "Iggy", category: "Reptiles", image: "/assest/reptiles1.jpg", price: 3300, description: "Cool and calm lizard." },
  { id: 18, name: "Spike", category: "Reptiles", image: "/assest/reptiles3.jpg", price: 3400, description: "Unique and quiet." },

  // Small Pets
  { id: 19, name: "Peanut", category: "Small Pets", image: "/smallpet1.jpg", price: 1500, description: "Tiny and curious." },
  { id: 20, name: "Waffles", category: "Small Pets", image: "/smallpet2.jpg", price: 1600, description: "Fun to watch." },

  // Horses
  { id: 21, name: "Spirit", category: "Horses", image: "/assest/horse1.jpg", price: 15000, description: "Majestic and strong." },
  { id: 22, name: "Blaze", category: "Horses", image: "/assest/horse2.jpg", price: 14500, description: "Fast and agile." },

  // Others
  { id: 23, name: "Mystery", category: "Others", image: "/assest/rats2.jpg", price: 2000, description: "Unusual and special companion." },
  { id: 24, name: "Nova", category: "Others", image: "/assest/dog3.jpg", price: 2100, description: "Rare and charming pet." },
];


export const categories = [
  { label: "Dogs", sub: ["Labrador", "Pomeranian", "German Shepherd"] },
  { label: "Cats", sub: ["Persian", "Siamese", "Maine Coon"] },
  { label: "Birds", sub: ["Parrot", "Canary", "Cockatiel"] },
  { label: "Fish", sub: ["Goldfish", "Betta", "Guppy"] },
  { label: "Rabbits", sub: ["Holland Lop", "Netherland Dwarf"] },
  { label: "Reptiles", sub: ["Gecko", "Iguana"] },
  { label: "Horses", sub: ["Arabian", "Mustang"] },
  { label: "Others", sub: ["Ferret", "Hamster"] },
];