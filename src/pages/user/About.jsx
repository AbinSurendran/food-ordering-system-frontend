import { Truck, ShieldCheck, Clock, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#fffaf5] min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
            About TastyBites
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Delicious Food, <span className="text-orange-500">Delivered With Love</span>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            TastyBites is your trusted food ordering platform bringing meals from the best restaurants
            straight to your door. We focus on quality, speed, and customer happiness.
          </p>
          <p className="mt-3 text-gray-600">
            Built as a modern food delivery system, TastyBites combines technology with taste.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Food"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Happy Customers", value: "10k+" },
          { label: "Food Items", value: "500+" },
          { label: "Restaurants", value: "120+" },
          { label: "Cities Covered", value: "25+" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 text-center shadow">
            <h2 className="text-3xl font-bold text-orange-500">{item.value}</h2>
            <p className="text-gray-600 mt-1">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Why Choose <span className="text-orange-500">TastyBites</span>
          </h2>
          <p className="text-gray-500 mt-2">We deliver more than food — we deliver happiness.</p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature icon={<Truck />} title="Fast Delivery" desc="Get your food delivered in under 30 minutes." />
            <Feature icon={<Clock />} title="Real-time Tracking" desc="Track your order from kitchen to doorstep." />
            <Feature icon={<ShieldCheck />} title="Safe & Hygienic" desc="Sealed packaging and quality checks." />
            <Feature icon={<Heart />} title="Loved by Users" desc="Thousands of happy food lovers." />
          </div>
        </div>
      </section>

    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-[#fffaf5] p-8 rounded-2xl shadow hover:shadow-lg transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>
    </div>
  );
}
