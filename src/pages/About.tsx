
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import Team from '@/components/about/Team';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <AboutStory />
        <Team />
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

export default About;
