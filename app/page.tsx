import Navbar from "@/components/homepage/Navbar";
import Hero from "@/components/homepage/Hero";
import About from "@/components/homepage/About";
import Services from "@/components/homepage/Services";
import MissionVision from "@/components/homepage/MissionVision";
import Gallery from "@/components/homepage/Gallery";
import Contact from "@/components/homepage/ContactUs";
import Footer from "@/components/homepage/Footer";

export default function SkylightHomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MissionVision />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}