
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
        title="Йеменское сообщество в России"
        subtitle="Поддержка йеменских студентов, специалистов и семей по всей России"
        ctaText="Изучить наши услуги"
        ctaLink="/services"
        backgroundImage="public/Images/hero.png"
      />
      
      {/* Welcome Section */}
      <section className="py-16 px-4 bg-muted/30 hero-pattern">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Добро пожаловать в наше сообщество</h2>
            <p className="text-lg mb-6">
              Йеменское сообщество в России служит мостом между культурами, поддерживая йеменских студентов, 
              профессионалов и семьи во время их пребывания в России. Мы предоставляем ресурсы, организуем мероприятия 
              и способствуем связям, чтобы помочь нашему сообществу процветать.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-yemen-red hover:bg-yemen-red/90">
                <Link to="/about">О нас</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest News */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader 
            title="Последние новости" 
            subtitle="Будьте в курсе последних объявлений и статей нашего сообщества"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsData.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/news" className="flex items-center">
                Все новости
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
            title="Предстоящие события" 
            subtitle="Присоединяйтесь к нам на общественных собраниях, культурных праздниках и образовательных семинарах"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/events" className="flex items-center">
                Все события
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
            title="Наши услуги" 
            subtitle="Ресурсы и поддержка для йеменского сообщества в России"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/services" className="flex items-center">
                Изучить все услуги
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
            <h2 className="text-3xl font-bold mb-4">Оставайтесь на связи</h2>
            <p className="mb-8 max-w-lg">
              Присоединяйтесь к нашей рассылке, чтобы получать обновления о мероприятиях, возможностях и важных объявлениях.
            </p>
            <Button asChild className="bg-yemen-red hover:bg-yemen-red/90 text-white">
              <Link to="/contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
