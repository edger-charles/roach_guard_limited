
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="bg-gradient-to-r from-roachguard-darkBlue to-roachguard-teal text-white py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6">Say Goodbye to Pests</h1>
          <p className="text-xl mb-8">
            We identify, eliminate, and prevent infestations, ensuring a safe, pest-free environment 
            for your home, Airbnb, or business.
          </p>
          <Button asChild size="lg" className="bg-white text-roachguard-darkBlue hover:bg-gray-200">
            <Link to="/contact">Book a Free Pest Inspection Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
