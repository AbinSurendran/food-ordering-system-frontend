import { Mail, Phone, MapPin } from "lucide-react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

export default function Contact() {
  function InfoCard({ icon, title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{value}</p>
      </div>
    </div>
  );
}
  return (
    <>
    <Header/>
      <div className="bg-[#fffaf5] min-h-screen">
  
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">
            We’d love to <span className="text-orange-500">hear from you</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or partnership ideas? Reach out to us anytime.
          </p>
        </section>
  
        {/* Content */}
        <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10">
  
          {/* Contact Info */}
          <div className="space-y-6">
            <InfoCard icon={<Mail />} title="Email" value="support@tastybites.com" />
            <InfoCard icon={<Phone />} title="Phone" value="+91 98765 43210" />
            <InfoCard icon={<MapPin />} title="Address" value="TastyBites HQ, Kochi, Kerala, India" />
  
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
              alt="office"
              className="rounded-2xl shadow-lg mt-6"
            />
          </div>
  
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
  
            <form className="space-y-4">
              <input type="text" placeholder="Your name" className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400" />
              <input type="email" placeholder="Your email" className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400" />
              <textarea rows="4" placeholder="Your message" className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"></textarea>
  
              <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </section>
  
      </div>
      <Footer/>
    </>
  );
}


