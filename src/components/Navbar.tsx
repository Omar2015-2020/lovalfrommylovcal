
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "О нас", path: "/about" },
    { name: "Новости", path: "/news" },
    { name: "События", path: "/events" },
    { name: "Услуги студентам", path: "/services" },
    { name: "Справочник сообщества", path: "/directory" },
    { name: "Контакты", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center space-x-1">
            <div className="bg-yemen-red w-4 h-8 rounded-sm"></div>
            <div className="bg-white w-4 h-8 rounded-sm"></div>
            <div className="bg-black w-4 h-8 rounded-sm"></div>
          </div>
          <span className="font-amiri text-xl font-bold hidden sm:inline">
            Йеменское сообщество в России
          </span>
          <span className="font-amiri text-xl font-bold sm:hidden">
            ЙСР
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-russia-blue hover:bg-russia-blue/90 font-medium flex items-center gap-1">
            <Globe className="w-4 h-4 mr-1" />
            <span>РУ</span>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Меню">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium px-2 py-1 rounded-md hover:bg-muted transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-russia-blue hover:bg-russia-blue/90 font-medium mt-4 flex items-center gap-1">
                <Globe className="w-4 h-4 mr-1" />
                <span>РУ</span>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
