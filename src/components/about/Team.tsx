
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ann Mumbi Mungai',
      position: 'Research and Development Officer',
      image: '/placeholder.svg'
    },
    {
      name: 'DIP.Engr. Thorsten Raabe',
      position: 'Executive Chairman and Director of Research and Development',
      image: '/placeholder.svg'
    },
    {
      name: 'Mr Omondi Jackson',
      position: 'CEO',
      image: '/placeholder.svg'
    }
  ];

  return (
    <section className="py-16 bg-roachguard-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-roachguard-darkBlue mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team is dedicated to providing thoughtful and effective pest control solutions. 
            With a deep understanding of eco-friendly practices and attention to detail, they carefully 
            assess each situation and tailor treatments to ensure long-lasting results. Their focus is on 
            delivering reliable, quality service that prioritizes your safety and peace of mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-roachguard-darkBlue">{member.name}</h3>
                <p className="text-roachguard-teal">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-roachguard-darkBlue mb-6">We Promise You</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="text-roachguard-teal text-4xl mb-4">✓</div>
              <h4 className="text-lg font-semibold mb-2">Professional Quality Guarantee</h4>
            </div>
            <div className="p-4">
              <div className="text-roachguard-teal text-4xl mb-4">✓</div>
              <h4 className="text-lg font-semibold mb-2">Easy and Affordable Payments</h4>
            </div>
            <div className="p-4">
              <div className="text-roachguard-teal text-4xl mb-4">✓</div>
              <h4 className="text-lg font-semibold mb-2">Best Product Guarantee</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
