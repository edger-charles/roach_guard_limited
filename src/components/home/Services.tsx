
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Bug, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'GENERAL CLEANING',
      description: 'We provide green cleaning services that prevent infestations while maintaining a clean, healthy environment.',
      icon: Sparkles,
      link: '/services#cleaning',
    },
    {
      title: 'PEST CONTROL',
      description: 'We offer targeted, eco-friendly pest control for pests like ants, roaches, and bed bugs. Our customized treatment plans ensure long-term pest prevention and protection.',
      icon: Bug,
      link: '/services#pest-control',
    },
    {
      title: 'HOUSE SEALING',
      description: 'Our sealing service blocks pests before they enter by closing off entry points with eco-friendly materials.',
      icon: Shield,
      link: '/services#sealing',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-4 text-roachguard-darkBlue">What We Do</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-roachguard-teal text-white p-4 flex justify-center">
                <service.icon size={32} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-roachguard-darkBlue">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild className="w-full bg-roachguard-teal hover:bg-roachguard-tealLight">
                  <Link to={service.link}>Get started</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
