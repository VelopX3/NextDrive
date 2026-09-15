"use client";

import Link from "next/link";
import { Mail, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent pt-6 absolute top-0 left-0 z-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 flex items-center justify-between">
        {/* Left Side Navigation */}
        <div className="flex items-center justify-between w-full md:w-auto md:gap-12">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="DriveNext Logo" className="h-8 md:h-10 w-auto" />
          </Link>
          
          {/* Hamburger Icon */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-white/90">
            <Link href="#fleet" className="transition-colors hover:text-primary">
              Our fleet
            </Link>
            <Link href="#gallery" className="transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              Contacts
            </Link>
          </nav>
        </div>

        {/* Right Side Contact Info - Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-white z-10">
          <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <Mail className="w-4 h-4" />
            <span className="hidden lg:inline">info@drivenext.com</span>
          </div>
          <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">+91 91962 73197</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col p-6 shadow-xl border-t border-white/10">
          <nav className="flex flex-col gap-6 text-base font-bold text-white/90 mb-8">
            <Link href="#fleet" onClick={() => setIsOpen(false)} className="transition-colors hover:text-primary">
              Our fleet
            </Link>
            <Link href="#gallery" onClick={() => setIsOpen(false)} className="transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="transition-colors hover:text-primary">
              Contacts
            </Link>
          </nav>
          
          <div className="flex flex-col gap-4 text-sm font-bold text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <span>info@drivenext.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span>+91 91962 73197</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
