
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  ctaText = "Learn More", 
  ctaLink = "/about",
  backgroundImage = "/placeholder.svg" 
}: HeroSectionProps) => {
  return (
    <section 
      className="relative h-[500px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in">{subtitle}</p>
        <Button 
          asChild
          className="bg-yemen-red hover:bg-yemen-red/90 text-white text-lg py-6 px-8 rounded-md animate-fade-in"
        >
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
