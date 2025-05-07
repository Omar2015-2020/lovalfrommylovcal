
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutContent } from "@/data/mockData";

const About = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="О нашем сообществе"
        subtitle="Узнайте о нашей истории, миссии и людях, стоящих за Йеменским сообществом в России"
        backgroundImage="https://images.unsplash.com/photo-1466442929976-97f336a657be"
      />
      
      {/* Mission and Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
              <div className="h-1 w-12 bg-yemen-red rounded mb-6"></div>
              <p className="text-lg">{aboutContent.mission}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Наше видение</h2>
              <div className="h-1 w-12 bg-russia-blue rounded mb-6"></div>
              <p className="text-lg">{aboutContent.vision}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* History */}
      <section className="py-16 px-4 bg-muted/30 hero-pattern">
        <div className="container mx-auto">
          <SectionHeader title="Наша история" />
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">{aboutContent.history}</p>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader 
            title="Руководство сообщества" 
            subtitle="Познакомьтесь с преданной командой, возглавляющей наши общественные инициативы"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {aboutContent.leadership.map((leader, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="p-4 text-center">
                  <div className="mx-auto bg-muted rounded-full p-3 w-20 h-20 flex items-center justify-center text-primary mb-4">
                    {leader.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  <CardTitle>{leader.name}</CardTitle>
                  <CardDescription>{leader.position}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-center">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Community Stats */}
      <section className="py-16 px-4 bg-russia-blue text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-gold">500+</p>
              <p className="text-lg mt-2">Членов сообщества</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold">15+</p>
              <p className="text-lg mt-2">Российских городов</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold">20+</p>
              <p className="text-lg mt-2">Ежегодных мероприятий</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold">30+</p>
              <p className="text-lg mt-2">Лет истории</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
