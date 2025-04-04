
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="heading-lg text-roachguard-darkBlue mb-6">Contact Us & Enjoy Your Time Off</h1>
            <p className="text-gray-700 mb-8">
              Let us handle your pest control and cleaning needs so you can focus on what matters most to you.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-roachguard-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-roachguard-darkBlue mb-3">Schedule a call</h3>
                <p className="text-gray-700">
                  Set up a call with us to discuss your needs. Simply provide your name, email, contact number, address, and message, and we'll get back to you promptly.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-roachguard-teal p-2 rounded-full text-white mr-4 mt-1">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-roachguard-darkBlue">Saves Your Time</h3>
                    <p className="text-gray-700">Efficiently handle your cleaning needs without wasting time. Our streamlined process ensures you get the services you need quickly and effectively.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-roachguard-teal p-2 rounded-full text-white mr-4 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-roachguard-darkBlue">Call Us! We're The Dust Busters!</h3>
                    <a 
                      href="tel:+254742298995" 
                      className="text-lg font-semibold text-roachguard-teal hover:underline"
                    >
                      CALL 0742298995
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-roachguard-gray p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-roachguard-darkBlue mb-3">Address</h3>
              <p className="text-gray-700 mb-2">
                Embakasi, Nairobi Kenya. Jacob Wango Building Ground Floor, Office number 16
              </p>
              <h3 className="text-xl font-semibold text-roachguard-darkBlue mb-3 mt-4">Mail Us</h3>
              <a 
                href="mailto:info@roachguard.co.ke" 
                className="text-roachguard-teal hover:underline"
              >
                info@roachguard.co.ke
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-roachguard-darkBlue mb-6">Book Your Services Today</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="First name here" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Last name here" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="Add email" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input id="subject" placeholder="How can we help you?" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Inquiry *</Label>
                <Textarea id="message" placeholder="Comments" rows={4} required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="serviceType">Select</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" placeholder="Date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telephone">Telephone</Label>
                  <Input id="telephone" type="tel" placeholder="Telephone" />
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-roachguard-teal hover:bg-roachguard-tealLight">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
