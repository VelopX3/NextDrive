import React from "react";
import { cn } from "@/lib/utils";

interface BadgeTagProps {
  label: string;
  text: string;
  className?: string;
}

export function BadgeTag({ label, text, className }: BadgeTagProps) {
  return (
    <div className={cn("inline-flex items-center space-x-2.5 border border-orange-500/30 rounded-full bg-white/10 p-1 text-sm text-white backdrop-blur-md shadow-lg", className)}>
        <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full px-4 py-1">
            <p>{label}</p>
        </div>
        <p className="pr-4 font-medium">{text}</p>
    </div>
  );
}
