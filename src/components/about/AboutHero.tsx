
import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-roachguard-gray py-12 md:py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl text-roachguard-darkBlue mb-6">About Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            At Roachguard, we believe in building trust through reliability, professionalism, and eco-conscious practices. 
            Together, let's make your environment not just pest-free, but safer and more sustainable for the future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-roachguard-teal mb-2">Mission</h3>
              <p className="text-gray-700">
                Deliver effective fumigation, cleaning, and sealing services with professionalism and sustainability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-roachguard-teal mb-2">Vision</h3>
              <p className="text-gray-700">
                To be the leading provider of integrated pest management solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-roachguard-teal mb-2">Our Promise</h3>
              <p className="text-gray-700">
                We will make your place spotless and Clean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
