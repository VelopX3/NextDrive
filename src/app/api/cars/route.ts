import { NextResponse } from "next/server";
import { seedCars } from "@/lib/data";

export async function GET() {
  return NextResponse.json(seedCars);
}
