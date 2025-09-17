import React from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowRight, Users, ShieldCheck } from "lucide-react";

const Landing = () => {
  return (
    <div className="landing-container font-sans text-gray-900">
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0"></div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <img src="/homepage_banner.png" alt="banner"  className="rounded-4xl absolute scale-50 right-0 top-10 rotate-3 max-md:-top-38 max-md:right-10"/>
          <img src="/2.png" alt="banner"  className="rounded-4xl absolute scale-20 -rotate-12 -z-1 left-0 -top-50  max-md:top-20"/>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-5 drop-shadow-lg animate-fade-in text-green-300">
            Make a <span className="text-green-600/40">Difference</span> Today
          </h1>
          <p className="text-lg sm:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
            Join our mission to support those in need. Every small contribution
            brings hope and change.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="bg-green-400 text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </Link>
            <Link
              to="/learn-more"
              className="bg-black/20 border border-white/40 text-white px-8 py-3 rounded-full font-semibold backdrop-blur-md hover:bg-black/30 transition-all flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="lg:py-30 py-0 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800 mt-5">
            Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Empowering local communities by connecting donors and those in
                need directly.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
              <ShieldCheck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Transparent</h3>
              <p className="text-gray-600">
                Every donation is tracked, ensuring your contributions reach the
                right hands.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Impactful Giving</h3>
              <p className="text-gray-600">
                See the real difference your support makes with updates and
                success stories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Journey of Giving Today
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">
            Create an account and be part of a growing community that cares.
          </p>
          <Link
            to="/login"
            className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-110 hover:bg-gray-100 transition-all"
          >
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
