const testimonials = [
  { name: "Priya", text: "Found my perfect kitten here! ❤️" },
  { name: "Arjun", text: "Easy to use and lots of choices." },
  { name: "Sara", text: "PetBasket made adopting my puppy simple." },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-yellow-50">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map(({ name, text }) => (
          <div key={name} className="bg-white rounded-xl shadow p-6 text-center">
            <p className="text-gray-700 italic mb-4">“{text}”</p>
            <p className="font-semibold text-primary">– {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
