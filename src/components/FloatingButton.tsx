"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButton() {
  const phoneNumber = "+919196273197";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href={`tel:${phoneNumber}`}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors flex items-center justify-center group relative"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-card text-foreground px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Call Us
        </span>
      </a>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center group relative"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-card text-foreground px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
