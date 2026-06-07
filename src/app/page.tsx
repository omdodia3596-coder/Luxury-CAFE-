import Hero from "@/components/luxury/Hero";
import About from "@/components/luxury/About";
import Collections from "@/components/luxury/Collections";
import Gallery from "@/components/luxury/Gallery";
import Events from "@/components/luxury/Events";
import ReservationForm from "@/components/luxury/ReservationForm";
import Contact from "@/components/luxury/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-matte-black w-full">
      {/* 1. Cinematic Landing Section */}
      <Hero />
      
      {/* 2. Brand Storytelling Section */}
      <About />
      
      {/* 3. Curated Menu Collections Overview */}
      <Collections />
      
      {/* 4. Masonry Portfolio Gallery */}
      <Gallery />
      
      {/* 5. Nights & Theme Shows Section */}
      <Events />
      
      {/* 6. Reservation Request Form */}
      <ReservationForm />
      
      {/* 7. Contact Details & Iframe Map */}
      <Contact />
    </div>
  );
}
