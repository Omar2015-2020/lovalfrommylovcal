
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Student Services"
        subtitle="Resources and support for Yemeni students and community members in Russia"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Services" 
            subtitle="We provide a range of services to support our community members during their time in Russia"
          />
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Digital Library */}
      <section className="py-16 px-4 bg-muted/30 hero-pattern">
        <div className="container mx-auto">
          <SectionHeader 
            title="Digital Library" 
            subtitle="Download helpful resources for students and community members"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <FileText className="h-12 w-12 mb-4 text-yemen-red" />
                  <h3 className="text-lg font-bold mb-2">Student Guide to Russian Universities</h3>
                  <p className="text-muted-foreground mb-4">Comprehensive guide for Yemeni students studying in Russian universities.</p>
                  <Button className="w-full gap-2">
                    <FileDown className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <FileText className="h-12 w-12 mb-4 text-yemen-red" />
                  <h3 className="text-lg font-bold mb-2">Visa Application Templates</h3>
                  <p className="text-muted-foreground mb-4">Templates and sample documents for visa applications and extensions.</p>
                  <Button className="w-full gap-2">
                    <FileDown className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <FileText className="h-12 w-12 mb-4 text-yemen-red" />
                  <h3 className="text-lg font-bold mb-2">Housing Contract Guide</h3>
                  <p className="text-muted-foreground mb-4">Guide to understanding Russian rental agreements and housing regulations.</p>
                  <Button className="w-full gap-2">
                    <FileDown className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/services/library" className="flex items-center">
                View All Resources
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
