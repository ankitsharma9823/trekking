import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isactive, setisactive] = useState(""); // ← your original state (unchanged)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // only for mobile menu

  return (
    <>
      {/* Main Navbar - Fixed on top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#F2F5F0] shadow-md">
        <div className="flex justify-between items-center px-6 py-5 max-w-7xl mx-auto">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-800">Travel Nepal</h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Home
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Login
            </Link>
            <Link to="/Contact" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-800"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed right-0 top-0 h-full w-64 bg-[#F2F5F0] shadow-2xl p-8 flex flex-col items-center justify-center gap-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Link 
              to="/" 
              className="text-xl font-semibold text-gray-800 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/login" 
              className="text-xl font-semibold text-gray-800 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/Contact" 
              className="text-xl font-semibold text-gray-800 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* This empty div pushes content below the fixed navbar */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default Header;