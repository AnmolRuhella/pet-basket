import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 via-pink-100 to-yellow-100 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Get Pet Updates & Tips</h2>
      <p className="mb-6 text-gray-700">Join our newsletter and never miss a pet update!</p>
      <div className="flex max-w-md mx-auto">
        <Input placeholder="Your email" className="rounded-l-full" />
        <Button className="rounded-r-full bg-primary text-white">Subscribe</Button>
      </div>
    </section>
  );
}
