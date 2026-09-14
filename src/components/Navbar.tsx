import Link from "next/link";
import { Car, Mail, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-transparent pt-6">
      <div className="container mx-auto px-4 lg:px-20 flex items-center justify-between">
        {/* Left Side Navigation */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="DriveNext Logo" className="h-10 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-white/90">
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

        {/* Right Side Contact Info */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-white z-10">
          <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <Mail className="w-4 h-4" />
            <span>info@drivenext.com</span>
          </div>
          <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <Phone className="w-4 h-4" />
            <span>+91 91962 73197</span>
          </div>
        </div>
      </div>
    </header>
  );
}
