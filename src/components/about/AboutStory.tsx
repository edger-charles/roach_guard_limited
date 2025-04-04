
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutStory = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg text-roachguard-darkBlue mb-6">Our Promise</h2>
            <h3 className="text-2xl font-semibold text-roachguard-teal mb-4">
              We will make your place spotless and Clean
            </h3>
            <p className="text-gray-700 mb-6">
              Our vision is to create safe, healthy spaces for families and businesses by offering eco-friendly pest control solutions. 
              We are committed to using sustainable methods that not only eliminate pests but also protect the environment. 
              Our goal is to provide long-term peace of mind, ensuring every space we treat is clean, secure, and pest-free.
            </p>
            <p className="text-gray-700 mb-6">
              Our approach goes beyond just pest removal; it's about creating a lasting impact. 
              We take pride in offering personalized, thorough services that address each client's unique needs, 
              from fumigation to preventative measures like house sealing.
            </p>
            <p className="text-gray-700 mb-8">
              We are proud to have successfully overcome several challenges in fumigation, sealing, and general cleaning, 
              ensuring the safety and well-being of our valued clients. By eliminating potential threats, 
              we provide a clean, secure environment and peace of mind. Our commitment to excellence continues to 
              drive us in delivering reliable and effective solutions for every client.
            </p>
            <Button asChild className="bg-roachguard-teal hover:bg-roachguard-tealLight">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
          <div className="bg-roachguard-gray p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-roachguard-darkBlue mb-6 text-center">
              Our Results Speak for Themselves
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img 
                src="/placeholder.svg" 
                alt="Before treatment" 
                className="rounded-lg h-48 object-cover w-full"
              />
              <img 
                src="/placeholder.svg" 
                alt="After treatment" 
                className="rounded-lg h-48 object-cover w-full"
              />
              <img 
                src="/placeholder.svg" 
                alt="Cleaning process" 
                className="rounded-lg h-48 object-cover w-full"
              />
              <img 
                src="/placeholder.svg" 
                alt="Final result" 
                className="rounded-lg h-48 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
