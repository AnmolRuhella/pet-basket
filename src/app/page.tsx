import AboutSection from "@/shared/components/AboutSection";
import CategorySection from "@/shared/components/CategorySection";
import Footer from "@/shared/components/Footer";
import Hero from "@/shared/components/Hero";
import Newsletter from "@/shared/components/NewsLetter";
import Testimonials from "@/shared/components/Testimonials";
import FeaturedPets from "@/shared/components/TrendingPets";
import WhyChooseUs from "@/shared/components/WhyChooseUs";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center text-primary">Browse by Category</h2>
        <CategorySection/>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-center text-primary">Trending Pets</h2>
        <FeaturedPets />
      </section>
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
