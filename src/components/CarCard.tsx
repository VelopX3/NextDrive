"use client";

import { Users, Settings, Fuel, DoorOpen } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export interface CarType {
  id: string;
  name: string;
  seats: number;
  pricePerDay: number;
  image?: string;
  doors?: number;
  fuel?: string;
  transmission?: string;
}

export default function CarCard({ car }: { car: CarType }) {
  const brand = car.name.split(" ")[0];
  const model = car.name.split(" ").slice(1).join(" ");

  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col relative pb-6 pt-6 px-6 mt-8">
      {/* Top row: Brand & Price */}
      <div className="flex justify-between items-start z-10 relative">
        <div>
          <h3 className="text-xl font-bold text-foreground leading-tight">{brand}</h3>
          <p className="text-sm text-muted-foreground">{model}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground uppercase font-semibold">From</p>
          <p className="text-lg font-extrabold text-foreground">{car.pricePerDay} ₹</p>
        </div>
      </div>

      {/* Car Image */}
      <div className="relative h-40 flex items-center justify-center my-4 z-10">
        {car.image ? (
          <img src={car.image} alt={car.name} className="object-contain w-[110%] h-[110%] max-w-none transform -translate-x-2 drop-shadow-xl" />
        ) : (
          <div className="w-full h-full bg-zinc-100 rounded-lg flex items-center justify-center">No Image</div>
        )}
      </div>

      {/* Features row */}
      <div className="flex justify-between items-center text-xs text-muted-foreground mb-6 z-10 px-2">
        <div className="flex flex-col items-center gap-1">
          <Fuel className="w-4 h-4 text-zinc-400" />
          <span>{car.fuel || "Petrol"}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Settings className="w-4 h-4 text-zinc-400" />
          <span>{car.transmission || "Auto"}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Users className="w-4 h-4 text-zinc-400" />
          <span>{car.seats} Seats</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <DoorOpen className="w-4 h-4 text-zinc-400" />
          <span>{car.doors || 4} Doors</span>
        </div>
      </div>

      {/* Centered Pill Button inside bottom */}
      <div className="mt-auto flex justify-center z-20">
        <InteractiveHoverButton 
          text="Book" 
          onClick={() => window.open(`https://wa.me/919196273197?text=Hi, I would like to book the ${car.name}`, "_blank")}
          className="w-48 bg-white border-zinc-200 py-3 shadow-md text-lg"
        />
      </div>
    </div>
  );
}
