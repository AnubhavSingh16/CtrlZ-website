import { FaMapMarkerAlt, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-6 lg:px-20">

      <div className="w-full max-w-full mx-auto mt-6 mb-12 border-b border-white"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ----------------- LEFT COLUMN ----------------- */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Work</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* ----------------- MIDDLE COLUMN ----------------- */}
        <div>
          <h3 className="text-xl font-bold mb-6">Get in Touch</h3>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-400" />
              CtrlZs
            </p>

            <p className="flex items-center gap-3">
              <FaGlobe className="text-purple-400" />
              www.ctrlzs.com
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" />
              ctrlzs@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaPhone className="text-purple-400" />
              +91 8800701698
            </p>
          </div>
        </div>

        {/* ----------------- RIGHT COLUMN ----------------- */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Weekly Brand Growth Tips
          </h3>

          <p className="text-gray-300 text-sm mb-4">
            Join 1,000+ founders getting actionable design & marketing insights straight to their inbox.
          </p>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-md bg-white border border-white/20 text-black placeholder-black focus:outline-none"
          />

          <button className="mt-4 px-10 py-2 bg-purple-500 hover:bg-purple-600 rounded-md text-white font-semibold transition border-white border-2">
            Subscribe
          </button>
        </div>

      </div>
    </footer>
  );
}
