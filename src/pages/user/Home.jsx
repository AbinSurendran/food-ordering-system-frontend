import React from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  FaShippingFast,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaCreditCard,
} from "react-icons/fa";
import { 
  FaApple, 
  FaGooglePlay, 
  FaMobileAlt 
} from "react-icons/fa";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const categories = [
  { name: "Pizza", icon: "🍕" },
  { name: "Burgers", icon: "🍔" },
  { name: "Sushi", icon: "🍣" },
  { name: "Pasta", icon: "🍝" },
  { name: "Salads", icon: "🥗" },
  { name: "Desserts", icon: "🍰" },
  { name: "Drinks", icon: "🥤" },
];

const dishes = [
  {
    name: "Margherita Pizza",
    price: "$14.99",
    time: "20-25 min",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
  },
  {
    name: "Pepperoni Supreme",
    price: "$17.99",
    time: "20-25 min",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
  },
  {
    name: "Bacon BBQ Burger",
    price: "$15.99",
    time: "15-20 min",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    name: "Dragon Roll",
    price: "$18.99",
    time: "25-30 min",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
  },
];

function Home() {
  return (
   <>
      <Header/>
      <div className="bg-[#fffaf3]">
  
  
        {/* ================= HERO ================= */}
        <section className="bg-[#fff7ed]">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
                🚀 Fast Delivery in 30 mins
              </span>
  
              <h1 className="text-5xl font-extrabold mt-6 leading-tight">
                Delicious Food, <br />
                <span className="text-orange-500">Delivered Fast</span>
              </h1>
  
              <p className="mt-4 text-gray-600 max-w-md">
                Order from your favorite restaurants and enjoy fresh, hot meals
                delivered right to your doorstep.
              </p>
  
              <div className="flex mt-6 gap-3">
                <div className="flex items-center bg-white px-4 rounded-xl border w-full max-w-sm">
                  <FaMapMarkerAlt className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter your delivery address"
                    className="py-3 w-full outline-none"
                  />
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium">
                  Find Food →
                </button>
              </div>
  
              <div className="flex gap-6 mt-6 text-sm">
                <span className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                  <FaStar className="text-green-600" /> 4.9 Rating
                </span>
                <span className="flex items-center gap-2 bg-orange-100 px-3 py-1 rounded-full">
                  <FaClock className="text-orange-600" /> Fast Delivery
                </span>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <div className="relative bg-white rounded-full w-[400px] h-[400px] flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3"
                  alt="food"
                  className="w-[380px] h-[380px] object-cover rounded-full shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* ================= CATEGORIES ================= */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold">
            Browse by <span className="text-orange-500">Category</span>
          </h2>
          <p className="text-gray-500 mt-2">Find exactly what you're craving</p>
  
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-7 gap-5 mt-10">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-3xl">{cat.icon}</div>
                <p className="mt-2 font-medium">{cat.name}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* ================= POPULAR DISHES ================= */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">
                Popular <span className="text-orange-500">Dishes</span>
              </h2>
              <button className="text-orange-500 font-medium">View All →</button>
            </div>
  
            <div className="grid md:grid-cols-4 gap-8">
              {dishes.map((dish) => (
                <div
                  key={dish.name}
                  className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
                >
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="h-44 w-full object-cover"
                  />
  
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{dish.name}</h3>
                      <span className="flex items-center gap-1 text-sm bg-orange-100 px-2 rounded-full">
                        <FaStar className="text-orange-500" /> {dish.rating}
                      </span>
                    </div>
  
                    <p className="text-orange-500 font-bold mt-1">{dish.price}</p>
  
                    <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaClock /> {dish.time}
                      </span>
                      <button className="border px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* ================= FEATURES ================= */}
  
  
        <section className="py-16 bg-[#fff7ed]">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
            {[
              {
                icon: <FaShippingFast />,
                title: "Fast Delivery",
                desc: "Under 30 minutes",
              },
              {
                icon: <FaMapMarkedAlt />,
                title: "Real-time Tracking",
                desc: "Kitchen to doorstep",
              },
              {
                icon: <FaShieldAlt />,
                title: "Safe & Hygienic",
                desc: "Sealed packaging",
              },
              {
                icon: <FaCreditCard />,
                title: "Easy Payment",
                desc: "Multiple options",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-orange-100 text-orange-500 text-2xl mb-4 shadow">
                  {item.icon}
                </div>
  
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* ================= APP DOWNLOAD ================= */}
  
  
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl p-14 text-center text-white shadow-xl relative overflow-hidden">
              {/* Top icon */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-white/20 rounded-2xl text-3xl">
                <FaMobileAlt />
              </div>
  
              <h2 className="text-3xl font-bold">Download Our App</h2>
              <p className="mt-3 text-white/90">
                Get exclusive offers and track your orders in real-time.
              </p>
  
              <div className="flex justify-center gap-4 mt-8 flex-wrap">
                <button className="flex items-center gap-2 bg-black px-6 py-3 rounded-xl hover:scale-105 transition">
                  <FaApple className="text-xl" />
                  <span>App Store</span>
                </button>
  
                <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition">
                  <FaGooglePlay className="text-xl text-green-500" />
                  <span>Play Store</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
   </>
  );
}

export default Home;
