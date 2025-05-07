
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with the Yemeni Community in Russia"
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader title="Get in Touch" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-muted rounded-full p-2 mr-4">
                        <MapPin className="h-5 w-5 text-yemen-red" />
                      </div>
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-muted-foreground">Central Office, Moscow, Russian Federation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-muted rounded-full p-2 mr-4">
                        <Phone className="h-5 w-5 text-yemen-red" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-muted-foreground">+7 (123) 456-7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-muted rounded-full p-2 mr-4">
                        <Mail className="h-5 w-5 text-yemen-red" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">info@yemeni-russia.org</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-muted rounded-full p-2 mr-4">
                        <Clock className="h-5 w-5 text-yemen-red" />
                      </div>
                      <div>
                        <h4 className="font-medium">Office Hours</h4>
                        <p className="text-muted-foreground">Monday - Friday: 10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Enter subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-russia-blue hover:bg-russia-blue/90" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Membership Registration */}
          <div className="mt-16">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Become a Community Member</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Join our community to receive regular updates, access exclusive resources, and participate in community events.
                </p>
                <Button className="bg-yemen-red hover:bg-yemen-red/90">
                  Register for Membership
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
