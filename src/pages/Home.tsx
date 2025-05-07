
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import NewsCard from "@/components/NewsCard";
import EventCard from "@/components/EventCard";
import ServiceCard from "@/components/ServiceCard";
import { newsData, eventsData, servicesData } from "@/data/mockData";
import { ArrowRight, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Yemeni Community in Russia"
        subtitle="Supporting Yemeni students, professionals and families across Russia"
        ctaText="Explore Our Services"
        ctaLink="/services"
        backgroundImage="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
      />
      
      {/* Welcome Section */}
      <section className="py-16 px-4 bg-muted/30 hero-pattern">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome to Our Community</h2>
            <p className="text-lg mb-6">
              The Yemeni Community in Russia serves as a bridge between cultures, supporting Yemeni students, 
              professionals, and families throughout their stay in Russia. We provide resources, organize events, 
              and foster connections to help our community thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-yemen-red hover:bg-yemen-red/90">
                <Link to="/about">About Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest News */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader 
            title="Latest News" 
            subtitle="Stay updated with the latest announcements and articles from our community"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsData.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/news" className="flex items-center">
                View All News
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-muted/30 hero-pattern">
        <div className="container mx-auto">
          <SectionHeader 
            title="Upcoming Events" 
            subtitle="Join us for community gatherings, cultural celebrations, and educational workshops"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/events" className="flex items-center">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Services" 
            subtitle="Resources and support for the Yemeni community in Russia"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/services" className="flex items-center">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter / Contact */}
      <section className="py-16 px-4 bg-russia-blue text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <Mail className="h-12 w-12 mb-4 text-gold" />
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="mb-8 max-w-lg">
              Join our community newsletter to receive updates about events, opportunities, and important announcements.
            </p>
            <Button asChild className="bg-yemen-red hover:bg-yemen-red/90 text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
