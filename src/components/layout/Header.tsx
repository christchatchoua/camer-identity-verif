
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-cameroon-green rounded-full flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <Link to="/" className="text-2xl font-bold text-cameroon-green flex items-center">
            <span>Camer</span>
            <span className="text-cameroon-red">SSI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-gray-700 hover:text-cameroon-green transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-cameroon-green transition-colors">
            About SSI
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-cameroon-green transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-cameroon-green transition-colors">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/verify">
            <Button variant="outline" className="border-cameroon-green text-cameroon-green hover:bg-cameroon-green hover:text-white">
              Verify Identity
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-cameroon-green text-white hover:bg-cameroon-green/90">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6 z-50 border-t animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-gray-700 hover:text-cameroon-green transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-cameroon-green transition-colors" onClick={toggleMenu}>
              About SSI
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-cameroon-green transition-colors" onClick={toggleMenu}>
              FAQ
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-cameroon-green transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/verify" onClick={toggleMenu}>
                <Button variant="outline" className="w-full border-cameroon-green text-cameroon-green hover:bg-cameroon-green hover:text-white">
                  Verify Identity
                </Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full bg-cameroon-green text-white hover:bg-cameroon-green/90">
                  Register
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
