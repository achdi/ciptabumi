import { ExternalLink, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import companyLogo from "@/assets/company-logo.png";

const Footer = () => {
  const companies = [
    { name: "MoreTrip", url: "www.moretrip.id" },
    { name: "LotFriends", url: "www.lotfriends.com" },
    { name: "Coretan Digital", url: "www.coretan.digital" },
    { name: "MauBuat", url: "www.maubuat.com" },
    { name: "UnderSystem", url: "www.undersystem.net" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={companyLogo} 
                alt="TechHolding Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <div className="text-xl font-bold text-gradient">
                Ciptabumi Technology for Holding Group
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Perusahaan holding terdepan di bidang teknologi informasi dan perdagangan 
              internasional yang menghubungkan inovasi digital dengan peluang global.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2025 Ciptabumi TechHolding Group. All rights reserved.
            </div>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Perusahaan Kami</h3>
            <ul className="space-y-3">
              {companies.map((company, index) => (
                <li key={index}>
                  <a
                    href={`https://${company.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    {company.name}
                    <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            Menghubungkan inovasi digital dengan peluang global
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Kembali ke Atas
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;