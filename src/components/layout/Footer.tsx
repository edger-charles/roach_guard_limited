
import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-roachguard-darkBlue text-white">
      <div className="container-custom pt-16 pb-8">
        {/* Newsletter Subscription */}
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Subscribe To Our Newsletter</h3>
          <p className="text-gray-300 mb-6">
            Join the Roachguard community! Get expert tips, exclusive offers, and the latest updates on keeping your space safe and spotless. Enter your email below to stay connected.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Email"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-roachguard-teal hover:bg-roachguard-tealLight sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Roachguard</h4>
            <p className="text-gray-300 mb-4">
              Roachguard is a trusted provider of cleaning, fumigation, and sealing solutions dedicated to creating safe, pest-free environments for homes and rental properties. With a commitment to quality and customer satisfaction, we ensure each space is thoroughly protected and impeccably clean.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <blockquote className="italic text-gray-300 border-l-2 border-roachguard-teal pl-4 mt-4">
                <p>_Sarah Muthoni, Nairobi</p>
                <p className="text-sm mt-2">
                  "Their team was professional, thorough, and we've been pest-free ever since. Highly recommend!"
                </p>
              </blockquote>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-300 mb-4">
              Stay connected with Roachguard! Follow us on social media for cleaning tips, special offers, and more. We'd love to hear from you!
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-roachguard-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-roachguard-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-roachguard-teal transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-roachguard-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-300 text-sm">
          <p>
            Copyright © 2024 Roachguard Limited | Powered by Ludacee Design Agency
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
