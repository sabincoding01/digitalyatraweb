import React, { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Top Border */}
        <div className="border-t border-white mb-12"></div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Reach Us Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Reach us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0" />
                <span className="text-sm">+977 9864155993</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 shrink-0" />
                <span className="text-sm">digitalyatra.youth@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 shrink-0" />
                <span className="text-sm">Banepa Kavre</span>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Terms & Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Techlabz Keybox
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">JOIN OUR COMMUNITY</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-slate-800 text-white placeholder-slate-400 border border-slate-600 rounded focus:outline-none focus:border-orange-400 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full ml-3.5 sm:w-auto px-6 py-2 bg-white text-slate-900 font-medium rounded hover:bg-orange-400 hover:text-white transition-colors text-sm"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-400">
                * Will send you weekly updates for your better tool management.
              </p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
