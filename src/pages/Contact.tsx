
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
        title: "Сообщение отправлено",
        description: "Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.",
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
        title="Свяжитесь с нами"
        subtitle="Свяжитесь с Йеменским сообществом в России"
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeader title="Связаться с нами" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-muted rounded-full p-2 mr-4">
                        <MapPin className="h-5 w-5 text-yemen-red" />
                      </div>
                      <div>
                        <h4 className="font-medium">Адрес</h4>
                        <p className="text-muted-foreground">Центральный офис, Москва, Российская Федерация</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-muted rounded-full p-2 mr-4">
                        <Phone className="h-5 w-5 text-yemen-red" />
                      </div>
                      <div>
                        <h4 className="font-medium">Телефон</h4>
                        <p className="text-muted-foreground">+7 (985) 771-16-98</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-muted rounded-full p-2 mr-4">
                        <Mail className="h-5 w-5 text-yemen-red" />
                      </div>
                      <div>
                        <h4 className="font-medium">Электронная почта</h4>
                        <p className="text-muted-foreground">info@yemeni-russia.org</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-muted rounded-full p-2 mr-4">
                        <Clock className="h-5 w-5 text-yemen-red" />
                      </div>
                      <div>
                        <h4 className="font-medium">Часы работы</h4>
                        <p className="text-muted-foreground">Понедельник - Пятница: 10:00 - 17:00</p>
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
                  <h3 className="text-xl font-bold mb-6">Отправить нам сообщение</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Введите ваше имя"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Ваша электронная почта</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Введите вашу электронную почту"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <Label htmlFor="subject">Тема</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Введите тему"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Введите ваше сообщение"
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
                      {isSubmitting ? "Отправка..." : "Отправить сообщение"}
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
                <h3 className="text-2xl font-bold mb-4">Станьте членом сообщества</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Присоединяйтесь к нашему сообществу, чтобы получать регулярные обновления, доступ к эксклюзивным ресурсам и участвовать в мероприятиях сообщества.
                </p>
                <Button className="bg-yemen-red hover:bg-yemen-red/90">
                  Зарегистрироваться как член сообщества
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
