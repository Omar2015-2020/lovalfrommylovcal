
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
        title="Услуги для студентов"
        subtitle="Ресурсы и поддержка для йеменских студентов и членов сообщества в России"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader 
            title="Наши услуги" 
            subtitle="Мы предоставляем широкий спектр услуг для поддержки членов нашего сообщества во время их пребывания в России"
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
            title="Цифровая библиотека" 
            subtitle="Скачайте полезные ресурсы для студентов и членов сообщества"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <FileText className="h-12 w-12 mb-4 text-yemen-red" />
                  <h3 className="text-lg font-bold mb-2">Руководство для студентов в российских университетах</h3>
                  <p className="text-muted-foreground mb-4">Подробное руководство для йеменских студентов, обучающихся в российских университетах.</p>
                  <a  className="w-full gap-2" href="/student_guide.pdf" download>
                  <Button className="w-full gap-2">
                    <FileDown className="h-4 w-4" />
                    Скачать PDF
                  </Button>
                  </a>
                  
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <FileText className="h-12 w-12 mb-4 text-yemen-red" />
                  <h3 className="text-lg font-bold mb-2">Шаблоны для оформления визы</h3>
                  <p className="text-muted-foreground mb-4">Шаблоны и образцы документов для оформления визы и её продления.</p>
                  <a  className="w-full gap-2" href="/визаваяанкита.pdf" download>
                  <Button className="w-full gap-2">
                    <FileDown className="h-4 w-4" />
                    Скачать PDF
                  </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <FileText className="h-12 w-12 mb-4 text-yemen-red" />
                  <h3 className="text-lg font-bold mb-2">Руководство по договорам аренды жилья</h3>
                  <p className="text-muted-foreground mb-4">Руководство по пониманию российских договоров аренды и жилищных правил.</p>
                  <Button className="w-full gap-2">
                    <FileDown className="h-4 w-4" />
                    Скачать PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/services/library" className="flex items-center">
                Просмотреть все ресурсы
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
