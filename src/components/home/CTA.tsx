
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-16 bg-roachguard-darkBlue text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="heading-lg mb-6">Complete Home Care, From Pests to Polish</h2>
            <p className="text-lg mb-8">
              Say goodbye to pests and hello to a spotless, secure home. Our expert team ensures every corner is cleaned, sealed, and protected, giving you peace of mind and a healthier living space.
            </p>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">We'll handle the pests</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-roachguard-teal">✓</span>
                  <span>Move In/Outs & Deep Cleaning services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-roachguard-teal">✓</span>
                  <span>Recurring discounts (monthly 5% off)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-roachguard-teal">✓</span>
                  <span>Simple flat rate pricing for you & your family!</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-roachguard-teal">✓</span>
                  <span>Easy online booking</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Get Your Place Cleaned and Healthy</h3>
            <p className="mb-6">
              We focus on making the process simple and effective, ensuring a clean and comfortable environment for you.
            </p>
            <Button asChild size="lg" className="w-full bg-roachguard-teal hover:bg-roachguard-tealLight">
              <Link to="/contact">Schedule Your Cleaning Now & Get Free Estimate</Link>
            </Button>
            <div className="mt-8">
              <h4 className="text-center text-sm uppercase tracking-wider mb-4">Review Us On</h4>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-white hover:text-roachguard-teal">Facebook</a>
                <a href="#" className="text-white hover:text-roachguard-teal">Yelp</a>
                <a href="#" className="text-white hover:text-roachguard-teal">Google</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
