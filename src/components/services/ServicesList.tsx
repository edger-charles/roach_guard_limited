
import React from 'react';
import { Search, Droplets, Shield, Sparkles, BarChart3 } from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      id: 'assessment',
      title: 'Assessment & Detection',
      description: 'We conduct a thorough inspection to identify pest activity, locate hidden entry points, and assess the level of infestation. This helps us create a targeted treatment plan for effective pest removal.',
      icon: Search
    },
    {
      id: 'treatment',
      title: 'Treatment',
      description: 'Using safe and proven methods, we eliminate pests without harming your health or the environment. Our treatments are designed for long-lasting protection, ensuring your space remains pest-free.',
      icon: Droplets
    },
    {
      id: 'sealing',
      title: 'Sealing',
      description: 'To prevent future infestations, we seal off entry points and other vulnerabilities, blocking pests from re-entering and keeping your home or business secure.',
      icon: Shield
    },
    {
      id: 'cleaning',
      title: 'Toxic Cleaning',
      description: 'After treatment, we deep clean affected areas to remove hazardous residues, ensuring a safe, hygienic, and livable environment for you and your family.',
      icon: Sparkles
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Certification',
      description: 'We provide ongoing monitoring and issue pest-free certification, guaranteeing that your space remains protected and giving you peace of mind.',
      icon: BarChart3
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="heading-lg text-center text-roachguard-darkBlue mb-12">Our Services</h2>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id} 
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center mb-4">
                  <div className="bg-roachguard-teal text-white p-3 rounded-full mr-4">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-roachguard-darkBlue">{service.title}</h3>
                </div>
                <p className="text-gray-700">{service.description}</p>
              </div>
              <div className={`bg-roachguard-gray rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img 
                  src="/placeholder.svg" 
                  alt={service.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
