
import React from 'react';
import { Sofa, Brush, Bed, Home } from 'lucide-react';

const CleaningServices = () => {
  const services = [
    {
      id: 'seat-cleaning',
      title: 'Seat Cleaning',
      description: 'Over time, upholstered furniture collects dirt, bacteria, and odors, affecting its look and comfort. Our seat cleaning service removes stains and smells from sofas, chairs, and other fabric surfaces, restoring freshness and extending their lifespan.',
      icon: Sofa
    },
    {
      id: 'carpet-cleaning',
      title: 'Carpet Cleaning',
      description: 'Carpets trap dirt, allergens, and bacteria, impacting air quality. Our deep cleaning service removes grime and stains, restoring your carpet\'s freshness and extending its lifespan.',
      icon: Brush
    },
    {
      id: 'mattress-cleaning',
      title: 'Mattress Cleaning',
      description: 'Over time, mattresses collect dust mites, allergens, and stains that affect sleep quality and health. Our cleaning service removes deep-seated dirt and bacteria, leaving your mattress fresh, sanitized, and safe to use.',
      icon: Bed
    },
    {
      id: 'house-cleaning',
      title: 'House Cleaning',
      description: 'A clean home promotes better health and comfort. Our thorough house cleaning service eliminates dust, germs, and odors, ensuring a fresh and tidy living space.',
      icon: Home
    }
  ];

  return (
    <section className="py-16 bg-roachguard-gray">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg text-roachguard-darkBlue mb-4">Deep Cleaning for a Fresh & Hygienic Home</h2>
          <p className="text-gray-700">
            Eliminate dust, stains, and allergens with our expert cleaning services, designed to refresh and sanitize your space. 
            We ensure a deep, thorough clean for a healthier and more comfortable environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              id={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-roachguard-teal text-white p-3 rounded-full inline-block mb-4">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-roachguard-darkBlue mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningServices;
