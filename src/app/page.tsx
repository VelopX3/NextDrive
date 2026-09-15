"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import CarCard from "@/components/CarCard";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import { BadgeTag } from "@/components/ui/badge-tag";
import { seedCars } from "@/lib/data";
import { MapPin, Calendar, Search } from "lucide-react";

export default function Home() {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const todayStr = today.toISOString().split('T')[0];
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    
    // Format to YYYY-MM-DD for the input type="date"
    setPickupDate(todayStr);
    setReturnDate(tomorrowStr);
    setMinDate(todayStr);
  }, []);

  const handleSearch = () => {
    if (!location || !pickupDate || !returnDate) {
      alert("Please select a location, pick-up date, and return date to search for available cars.");
      return;
    }
    // Scroll to fleet
    document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero & Navbar */}
      <div className="relative flex flex-col min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Full Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 z-0"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-20 pt-28 md:pt-32 pb-24 md:pb-32 h-full flex flex-col justify-center mt-12 md:mt-0">
          <BadgeTag 
            label="Special Offer" 
            text="Get flat 20% off on your first booking!" 
            className="mb-4 md:mb-6 w-fit" 
          />
          <h1 className="font-bold text-white leading-[1.1] drop-shadow-lg max-w-3xl" style={{ fontSize: 'clamp(2.5rem, 5vw + 1rem, 4.5rem)' }}>
            Looking to rent a car<br />or motorbike in Guwahati?
          </h1>
          <p className="text-white/90 mt-4 md:mt-6 max-w-xl text-base md:text-lg drop-shadow-md font-medium">
            You can check available vehicles for your dates here.<br className="hidden md:block" />
            Please, choose Pick-up/Return date and time in the form.
          </p>
        </div>

        {/* Floating Navbar injected into the top */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
      </div>

      {/* Floating Search Bar */}
      <div className="relative z-20 container mx-auto px-4 -mt-16 md:-mt-10 mb-16 md:mb-20 flex justify-center">
        <div className="bg-white rounded-3xl md:rounded-full shadow-[0_10px_40px_rgb(0,0,0,0.1)] p-4 md:p-3 flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-8 w-full max-w-5xl">
          
          <div className="flex items-center gap-3 px-2 md:px-6 flex-1 text-zinc-600 w-full border-b md:border-b-0 md:border-r border-zinc-100 pb-3 md:pb-0">
            <MapPin className="w-5 h-5 shrink-0 text-zinc-400" />
            <select 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent border-none outline-none w-full font-medium cursor-pointer text-sm md:text-base py-1"
            >
              <option value="">Choose a location</option>
              <option value="Airport">Guwahati Airport</option>
              <option value="Railway">Guwahati Railway Station</option>
              <option value="City">Guwahati City Center</option>
            </select>
          </div>
          
          <div className="flex items-center gap-3 px-2 md:px-6 flex-1 text-zinc-600 w-full border-b md:border-b-0 md:border-r border-zinc-100 pb-3 md:pb-0">
            <Calendar className="w-5 h-5 shrink-0 text-zinc-400" />
            <div className="flex flex-col w-full">
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-0.5">Pick-up Date</span>
              <input 
                type="date" 
                value={pickupDate}
                min={minDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="bg-transparent border-none outline-none font-medium text-sm md:text-base text-zinc-800 w-full py-1 cursor-pointer" 
              />
            </div>
          </div>

          <div className="flex items-center gap-3 px-2 md:px-6 flex-1 text-zinc-600 w-full pb-3 md:pb-0">
            <Calendar className="w-5 h-5 shrink-0 text-zinc-400" />
            <div className="flex flex-col w-full">
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-0.5">Return Date</span>
              <input 
                type="date" 
                value={returnDate}
                min={pickupDate || minDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="bg-transparent border-none outline-none font-medium text-sm md:text-base text-zinc-800 w-full py-1 cursor-pointer" 
              />
            </div>
          </div>

          <button 
            onClick={handleSearch}
            className="bg-primary text-white md:w-32 py-4 md:py-0 md:h-14 rounded-2xl md:rounded-full font-bold hover:bg-orange-600 transition-colors shrink-0 mt-2 md:mt-0"
          >
            Search
          </button>
        </div>
      </div>

      <main className="flex-1 pb-20">
        {/* Fleet Section */}
        <section id="fleet" className="pb-20">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {seedCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <Reviews />

        {/* Gallery Section */}
        <Gallery />

        {/* FAQ Section */}
        <Faq />

      </main>

      <Footer />
      <FloatingButton />
    </div>
  );
}
