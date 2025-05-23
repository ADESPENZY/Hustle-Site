import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 92);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Features', href: 'features' },
    { name: 'Solutions', href: 'solutions' },
    { name: 'Testimonial', href: 'testimonials' },
    { name: 'Pricing', href: 'pricing' },
  ];

  return (
    <nav className={`w-full z-50 ${sticky ? 'fixed top-0 left-0 bg-white shadow-md' : ''}`}>

      <div className="max-w-7xl mx-auto px-4 py-4 font-inter">
        <div className="flex items-center justify-between">
          {/* Logo and Menu */}
          <div className="flex items-center space-x-10">
            <Link to="home" smooth={true} duration={500} offset={-50}>
              <img className="w-16 h-6" src="/images/Hustle.png" alt="Hustle Logo" />
            </Link>
            <ul className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <li key={item.name} className="text-gray-800 nav-link cursor-pointer">
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="marketplace"
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center space-x-2 text-primary font-medium hover:text-secondary transition-colors cursor-pointer"
            >
              <span>Visit Marketplace</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="download"
              smooth={true}
              duration={500}
              offset={-50}
              className="flex items-center space-x-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors cursor-pointer"
            >
              <span>Download Hustle</span>
              <Download size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white shadow-md rounded-lg p-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="text-md font-medium text-gray-800 hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-4">
              <Link
                to="marketplace"
                smooth={true}
                duration={500}
                offset={-50}
                className="flex items-center space-x-2 text-primary font-medium hover:text-secondary transition-colors cursor-pointer"
                onClick={toggleMenu}
              >
                <span>Visit Marketplace</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="download"
                smooth={true}
                duration={500}
                offset={-50}
                className="flex items-center space-x-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors cursor-pointer"
                onClick={toggleMenu}
              >
                <span>Download Hustle</span>
                <Download size={20} />
              </Link>
            </div>
          </div>
        )}
      </div>

    </nav>
    
  );
};

export default Navbar;
