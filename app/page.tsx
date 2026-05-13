import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandBar from "@/components/BrandBar";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandBar />
      <Categories />
      <Products />
      <Brands />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}