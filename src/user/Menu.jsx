import { Search } from "lucide-react";

const categories = [
  "All", "Pizza", "Burgers", "Sushi", "Pasta", "Salads", "Desserts", "Drinks"
];

const items = [
  { name: "Margherita Pizza", price: 14.99, rating: 4.8, time: "20-25 min", img: "https://images.unsplash.com/photo-1601924582975-7e1c0b87b9f1" },
  { name: "Pepperoni Supreme", price: 17.99, rating: 4.9, time: "20-25 min", img: "https://images.unsplash.com/photo-1548365328-8b849e6f49c1" },
  { name: "Classic Cheeseburger", price: 12.99, rating: 4.7, time: "15-20 min", img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { name: "Bacon BBQ Burger", price: 15.99, rating: 4.8, time: "15-20 min", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
];

export default function Menu() {
  return (
    <div className="bg-[#fffaf5] min-h-screen py-14 px-6">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our <span className="text-orange-500">Menu</span></h1>
        <p className="text-gray-500 mt-2">Explore our delicious selection of dishes</p>

        <div className="max-w-xl mx-auto mt-6 relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search for dishes..."
            className="w-full pl-11 pr-4 py-3 rounded-xl shadow-sm border outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`px-5 py-2 rounded-xl border text-sm font-medium shadow-sm
            ${cat === "All" ? "bg-orange-500 text-white" : "bg-white hover:bg-orange-50"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">

            <div className="relative">
              <img src={item.img} alt="" className="h-52 w-full object-cover" />
              <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm shadow">
                ⭐ {item.rating}
              </span>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>

              <div className="flex justify-between items-center mt-2">
                <span className="text-orange-500 font-bold">${item.price}</span>
                <span className="text-sm text-gray-400">⏱ {item.time}</span>
              </div>

              <button className="mt-4 w-full bg-orange-100 text-orange-600 py-2 rounded-xl font-medium hover:bg-orange-200">
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
