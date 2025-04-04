
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import CleaningServices from '@/components/services/CleaningServices';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServicesHero />
        <ServicesList />
        <CleaningServices />
        <div className="py-12 bg-roachguard-teal text-white text-center">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold mb-6">Limited Time Offer!</h2>
            <Button asChild size="lg" className="bg-white text-roachguard-teal hover:bg-gray-100">
              <Link to="/contact">Schedule Cleaning Now & Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
