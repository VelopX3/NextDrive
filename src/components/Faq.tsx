"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What documents are required to rent a car?",
    answer: "You typically need:\n• A valid driving license\n• Government-issued ID (Passport/Aadhaar/PAN card)\n• International customers may also need an International Driving Permit (IDP)."
  },
  {
    question: "What is the minimum age requirement to rent a car?",
    answer: "Most rental services require drivers to be at least 21 years old. Some vehicle categories may require drivers to be 25+ years."
  },
  {
    question: "Can I rent a car without a driver?",
    answer: "Yes. We offer:\n• Self-drive rentals\n• Chauffeur-driven rentals\nYou can choose your preferred option while booking."
  },
  {
    question: "How do I make a booking?",
    answer: "You can book a car through:\n• Our website\n• Phone call or WhatsApp\n• Visiting our office directly\nAdvance booking is recommended for availability."
  },
  {
    question: "What is the fuel policy for rental cars?",
    answer: "Two fuel options:\n• Fuel-inclusive packages\n• Without fuel: Return the car with the same fuel level."
  },
  {
    question: "What happens if I return the car late?",
    answer: "Late returns may incur additional hourly or daily charges. Please inform us in advance if you expect delays."
  },
  {
    question: "Is there a security deposit?",
    answer: "Yes, a refundable security deposit is required. The amount varies depending on the vehicle category."
  },
  {
    question: "Are the cars insured?",
    answer: "Yes, all vehicles are covered under insurance. However, customers may be liable for damages caused due to negligence or violation of rental terms."
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes. Bookings can usually be modified or canceled before the scheduled pickup time. Cancellation charges may apply depending on timing."
  },
  {
    question: "Can I take the car outside the city or state?",
    answer: "Yes, outstation travel is allowed for selected vehicles. Please inform us during booking so permits can be arranged if required."
  },
  {
    question: "How do I pay for the rental?",
    answer: "We accept:\n• Credit/Debit cards\n• UPI payments\n• Net banking\n• Cash (at select locations)"
  },
  {
    question: "Can someone else drive the rental car?",
    answer: "Only drivers registered in the rental agreement are allowed to drive the vehicle."
  },
  {
    question: "Are tolls, parking fees, and taxes included?",
    answer: "No. Tolls, parking fees, and interstate taxes must be paid by the customer during the trip."
  },
  {
    question: "Do you offer long-term or monthly rentals?",
    answer: "Yes, we provide cars for weekly and monthly rentals. Contact us for customized plans."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4 lg:px-20 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-500">Everything you need to know about renting a car with DriveNext.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-semibold text-zinc-800 text-lg">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ml-4", 
                    openIndex === index ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="text-zinc-600 whitespace-pre-line leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
