import { Car, Globe, MessageCircle, Camera, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white py-8 border-t border-zinc-100">
      <div className="container mx-auto px-4 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="DriveNext Logo" className="h-8 w-auto" />
        </div>
        
        <div className="flex items-center gap-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#" className="hover:text-primary transition-colors">Services</a>
          <a href="#" className="hover:text-primary transition-colors">Partners</a>
          <a href="#" className="hover:text-primary transition-colors">Feedbacks</a>
          <a href="#" className="hover:text-primary transition-colors">Booking</a>
        </div>

        <div className="flex items-center gap-6 text-zinc-400">
          <a href="#" className="hover:text-primary transition-colors" aria-label="Website"><Globe className="w-4 h-4" /></a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="Chat"><MessageCircle className="w-4 h-4" /></a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="Social"><Camera className="w-4 h-4" /></a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="Video"><Video className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
