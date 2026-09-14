const imageMap: Record<string, string> = {
  "Maruti Suzuki Swift": "/cars/Maruti Suzuki Swift.avif",
  "Maruti Suzuki Dzire": "/cars/Maruti Suzuki Dzire.avif",
  "Hyundai Grand i10 Nios": "/cars/Hyundai Grand i10 Nios.png",
  "Hyundai Aura": "/cars/Hyundai Aura.png",
  "Hyundai i20": "/cars/hyundai i20.avif",
  "Maruti Suzuki Ertiga": "/cars/Maruti Suzuki Ertiga.avif",
  "Maruti Suzuki XL6": "/cars/Maruti Suzuki XL6.avif",
  "Kia Carens": "/cars/Kia Carens.webp",
  "Toyota Innova Crysta": "/cars/Toyota Innova Crysta.avif",
  "Toyota Innova Hycross": "/cars/Innova Hycross.webp",
  "Mahindra Scorpio": "/cars/Mahindra Scorpio.avif",
  "Mahindra Scorpio-N": "/cars/Mahindra Scorpio-N.avif",
  "Mahindra Thar": "/cars/Mahindra Thar.avif",
  "Kia Seltos": "/cars/Kia Seltos.jpg",
  "Hyundai Creta": "/cars/Hyundai Creta.webp",
  "Toyota Fortuner": "/cars/Toyota fortuner.avif"
};

export const seedCars = [
  { name: "Maruti Suzuki Swift", seats: 5, pricePerDay: 1800, doors: 4, fuel: "Petrol", transmission: "Manual" },
  { name: "Maruti Suzuki Dzire", seats: 5, pricePerDay: 2000, doors: 4, fuel: "Petrol", transmission: "Manual" },
  { name: "Hyundai Grand i10 Nios", seats: 5, pricePerDay: 1700, doors: 4, fuel: "Petrol", transmission: "Manual" },
  { name: "Hyundai Aura", seats: 5, pricePerDay: 2000, doors: 4, fuel: "Petrol", transmission: "Manual" },
  { name: "Hyundai i20", seats: 5, pricePerDay: 2000, doors: 4, fuel: "Petrol", transmission: "Manual" },
  { name: "Maruti Suzuki Ertiga", seats: 7, pricePerDay: 3200, doors: 4, fuel: "Petrol", transmission: "Manual" },
  { name: "Maruti Suzuki XL6", seats: 6, pricePerDay: 3200, doors: 4, fuel: "Petrol", transmission: "Manual" },
  { name: "Kia Carens", seats: 7, pricePerDay: 2800, doors: 4, fuel: "Diesel", transmission: "Automatic" },
  { name: "Toyota Innova Crysta", seats: 7, pricePerDay: 3500, doors: 4, fuel: "Diesel", transmission: "Manual" },
  { name: "Toyota Innova Hycross", seats: 7, pricePerDay: 3800, doors: 4, fuel: "Hybrid", transmission: "Automatic" },
  { name: "Mahindra Scorpio", seats: 7, pricePerDay: 4000, doors: 4, fuel: "Diesel", transmission: "Manual" },
  { name: "Mahindra Scorpio-N", seats: 7, pricePerDay: 4000, doors: 4, fuel: "Diesel", transmission: "Automatic" },
  { name: "Mahindra Thar", seats: 4, pricePerDay: 3800, doors: 2, fuel: "Diesel", transmission: "Manual" },
  { name: "Kia Seltos", seats: 5, pricePerDay: 3600, doors: 4, fuel: "Petrol", transmission: "Automatic" },
  { name: "Hyundai Creta", seats: 5, pricePerDay: 2700, doors: 4, fuel: "Petrol", transmission: "Automatic" },
  { name: "Toyota Fortuner", seats: 7, pricePerDay: 4500, doors: 4, fuel: "Diesel", transmission: "Automatic" },
].map((car, i) => ({
  id: String(i + 1),
  image: imageMap[car.name] || "/cars/Toyota fortuner.avif",
  ...car
}));
