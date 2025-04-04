
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-roachguard-darkBlue">
              <span className="text-roachguard-teal">Roach</span>Guard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Button asChild className="ml-4 bg-roachguard-teal hover:bg-roachguard-tealLight">
              <Link to="/contact">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-roachguard-teal"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white absolute left-0 right-0 shadow-md">
            <div className="flex flex-col space-y-4 px-4">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
              <MobileNavLink to="/services" onClick={toggleMenu}>Services</MobileNavLink>
              <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
              <Button asChild className="bg-roachguard-teal hover:bg-roachguard-tealLight w-full">
                <Link to="/contact" onClick={toggleMenu}>Get Started</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link
    to={to}
    className="px-3 py-2 text-gray-700 hover:text-roachguard-teal font-medium rounded-md hover:bg-gray-50"
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => (
  <Link
    to={to}
    className="px-3 py-2 text-gray-700 hover:text-roachguard-teal font-medium rounded-md hover:bg-gray-50 block"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
