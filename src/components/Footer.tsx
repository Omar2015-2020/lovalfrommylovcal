
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-russia-blue text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Йеменское сообщество в России</h3>
            <p className="mb-4 text-russia-white/80">
              Поддержка йеменских студентов, специалистов и семей по всей России ресурсами, 
              мероприятиями и общественными услугами.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
                <Facebook />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
                <Instagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gold transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold transition-colors">Главная</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">О нас</Link></li>
              <li><Link to="/news" className="hover:text-gold transition-colors">Новости</Link></li>
              <li><Link to="/events" className="hover:text-gold transition-colors">События</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Услуги студентам</Link></li>
              <li><Link to="/directory" className="hover:text-gold transition-colors">Справочник сообщества</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Связаться с нами</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <MapPin className="text-gold" size={18} />
                <span>Москва, Российская Федерация</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-gold" size={18} />
                <span>+7 (985) 771-16-98</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-gold" size={18} />
                <span>info@yemeni-russia.org</span>
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-russia-white/70">
                <span className="arabic">الجالية اليمنية في روسيا</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>© {currentYear} Йеменское сообщество в России. Все права защищены.made by Omar Almughalles</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
