import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fff7ed] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500 text-white text-xl">
              🍕
            </div>
            <h2 className="text-2xl font-bold text-orange-600">TastyBites</h2>
          </div>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Delicious food delivered to your doorstep. Fresh ingredients,
            amazing flavors, and fast delivery.
          </p>

          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
          <ul className="space-y-2">
            {["Our Menu", "About Us", "Contact", "Careers"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-orange-600 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
          <ul className="space-y-2">
            {["FAQ", "Delivery Info", "Privacy Policy", "Terms of Service"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-orange-600 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <span>123 Food Street, City 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <span>hello@tastybites.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-5 text-center text-sm text-gray-500">
        © 2024 TastyBites. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
