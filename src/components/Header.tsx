import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import companyLogo from "@/assets/company-logo.png";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  const navItems = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.portfolio'), href: "#portfolio" },
    { name: t('nav.investor'), href: "/investor" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={companyLogo} 
              alt="Ciptabumi Logo" 
              className="h-10 w-10 rounded-lg"
            />
            <div className="text-xl font-bold text-gradient">
              Ciptabumi Group
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.href.startsWith("/")) {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                );
              }
              if (item.href.startsWith("#")) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 relative group"
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.href.slice(1);
                      const scrollToTarget = () => {
                        const el = document.getElementById(targetId);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      };
                      navigate('/');
                      setTimeout(scrollToTarget, 100);
                    }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              );
            })}
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button and Language Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                if (item.href.startsWith("/")) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                }
                if (item.href.startsWith("#")) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        const targetId = item.href.slice(1);
                        const scrollToTarget = () => {
                          const el = document.getElementById(targetId);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        };
                        navigate('/');
                        setTimeout(scrollToTarget, 100);
                      }}
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;