import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rituraj Saikia",
    location: "Guwahati",
    rating: 5,
    text: "Very smooth experience with DriveNext. The team was professional, helpful, and made the whole process easy. Really happy with the service."
  },
  {
    name: "Priyanka Bora",
    location: "Jorhat",
    rating: 5,
    text: "Excellent service! Everything was explained clearly and the staff were very supportive throughout. Would definitely recommend DriveNext."
  },
  {
    name: "Anupam Dutta",
    location: "Dibrugarh",
    rating: 5,
    text: "Really impressed with the overall experience. Quick response, good communication, and very professional service. Five stars from me!"
  },
  {
    name: "Nandita Hazarika",
    location: "Tezpur",
    rating: 5,
    text: "Had a great experience with DriveNext. The process was simple and hassle-free, and the team was very friendly. Definitely worth recommending."
  },
  {
    name: "Debajit Gogoi",
    location: "Sivasagar",
    rating: 5,
    text: "Great service and very professional team. They were responsive and made everything much easier than I expected. Very satisfied."
  },
  {
    name: "Monika Saikia",
    location: "Nagaon",
    rating: 5,
    text: "Loved the experience with DriveNext. Friendly staff, quick communication, and excellent service. Would happily choose them again."
  },
  {
    name: "Abhijit Kalita",
    location: "Guwahati",
    rating: 4,
    text: "Overall a very good experience. The service was reliable and the team was helpful. There is a little room for improvement in response time, but I'm satisfied."
  },
  {
    name: "Mousumi Das",
    location: "Mangaldoi",
    rating: 4,
    text: "Good service and helpful staff. The overall experience was positive and the process was quite straightforward."
  },
  {
    name: "Bikash Baruah",
    location: "Guwahati",
    rating: 3,
    text: "Decent overall experience. The service was good, although the process took a little longer than I expected. Hopefully it gets even better."
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-zinc-50" id="reviews">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-16">
          <p className="text-xs text-zinc-400 uppercase font-bold tracking-widest mb-2">Testimonials</p>
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full border border-zinc-100 transition-transform hover:-translate-y-1">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < review.rating ? "fill-current" : "text-zinc-200"}`} />
                ))}
              </div>
              <p className="text-zinc-600 italic flex-1 mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="font-bold text-foreground">{review.name}</p>
                <p className="text-sm text-zinc-400 font-medium">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
