import { PawPrint, Heart, Star } from "lucide-react";

const features = [
  { icon: PawPrint, title: "Wide Variety", desc: "From dogs to reptiles, we list them all." },
  { icon: Heart, title: "Loved & Trusted", desc: "Trusted by hundreds of pet lovers." },
  { icon: Star, title: "Easy to Use", desc: "Simple design to help you find pets fast." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-pink-50">
      <h2 className="text-2xl font-semibold mb-8 text-center text-primary">Why Choose PetBasket?</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <Icon className="w-10 h-10 text-primary mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
