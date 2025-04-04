
import React from 'react';
import { Shield, Leaf, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Integrated Solutions',
      description: 'Address both pests and cleanliness simultaneously.',
      icon: Shield,
    },
    {
      title: 'Safe & Eco-Friendly',
      description: 'Health-conscious and environmentally responsible methods.',
      icon: Leaf,
    },
    {
      title: 'Professional Expertise',
      description: 'Certified, trained professionals delivering results.',
      icon: Award,
    },
  ];

  return (
    <section className="section-padding bg-roachguard-gray">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-12 text-roachguard-darkBlue">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:transform hover:-translate-y-1"
            >
              <div className="bg-roachguard-teal p-3 rounded-full mb-4 text-white">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-roachguard-darkBlue">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
