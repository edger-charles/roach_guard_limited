
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-roachguard-darkBlue to-roachguard-teal text-white py-20 lg:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="heading-xl mb-6">
              Protect, Seal, and Clean
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              From detection to termination to general cleaning with ongoing monitoring, RoachGuard Limited offers comprehensive solutions to keep your home safe and spotless. As the best pest control experts in Nairobi, we're dedicated to providing effective and eco-friendly pest management to ensure a healthier, cleaner living space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-roachguard-darkBlue hover:bg-gray-200">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
            <div className="mt-8 bg-white/20 p-4 rounded-md">
              <p className="font-semibold">Special Savings! Book For This Saturday And Get 10% Off!</p>
              <Button asChild className="mt-2 bg-white text-roachguard-darkBlue hover:bg-gray-200">
                <a href="tel:+254742298995">Call Us Today</a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 p-8 rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="Clean and pest-free home" 
                className="rounded-lg w-full object-cover h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
