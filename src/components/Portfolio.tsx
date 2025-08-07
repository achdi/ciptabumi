import { ExternalLink, Plane, Users, Edit3, Globe, Shield, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const companies = [
    {
      name: "MoreTrip",
      url: "www.moretrip.id",
      icon: Plane,
      description: "Platform perjalanan dan wisata digital yang menyediakan layanan booking hotel, tiket pesawat, dan paket wisata.",
      category: "Travel & Tourism",
      color: "text-blue-500",
      bgColor: "bg-blue-500/20"
    },
    {
      name: "LotFriends",
      url: "www.lotfriends.com",
      icon: Users,
      description: "Platform media sosial yang menghubungkan komunitas global dengan fitur-fitur interaktif dan kreatif.",
      category: "Social Media",
      color: "text-pink-500",
      bgColor: "bg-pink-500/20"
    },
    {
      name: "Coretan Digital",
      url: "www.coretan.digital",
      icon: Edit3,
      description: "Platform media sosial dan blog digital untuk content creator dan komunitas kreatif Indonesia.",
      category: "Social Media",
      color: "text-purple-500",
      bgColor: "bg-purple-500/20"
    },
    {
      name: "MauBuat",
      url: "www.maubuat.com",
      icon: Globe,
      description: "Penyedia layanan web hosting premium dan aplikasi builder untuk kebutuhan bisnis digital modern.",
      category: "Web Services",
      color: "text-green-500",
      bgColor: "bg-green-500/20"
    },
    {
      name: "UnderSystem",
      url: "www.undersystem.net",
      icon: Shield,
      description: "Solusi sistem keamanan dan infrastruktur teknologi untuk enterprise dan bisnis skala besar.",
      category: "Technology",
      color: "text-orange-500",
      bgColor: "bg-orange-500/20"
    },
    {
      name: "Ciptabumi Cargo",
      url: "cargo.ciptabumi.com",
      icon: Truck,
      description: "Sistem cargo dan logistik terintegrasi yang menghubungkan freight forwarder, ekspedisi, dan perusahaan logistik dalam satu platform digital terdepan.",
      category: "Logistics",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/20"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Portofolio</span> Perusahaan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jaringan sistem terkoneksi kami mencakup berbagai sektor teknologi, dari platform perjalanan 
            hingga media sosial dan layanan hosting enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => {
            const isGoldFrame = index % 2 === 0;
            const frameClass = isGoldFrame ? 'gold-frame' : 'silver-frame';
            
            return (
              <div key={index} className={`${frameClass} animate-scale-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-full ${company.bgColor} group-hover:scale-110 transition-transform`}>
                        <company.icon className={`h-6 w-6 ${company.color}`} />
                      </div>
                      <span className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground">
                        {company.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {company.name}
                    </CardTitle>
                    <p className="text-sm text-primary font-medium">{company.url}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0 flex flex-col justify-between flex-1">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {company.description}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/50 hover:bg-primary/10 group-hover:border-primary transition-all"
                      onClick={() => window.open(`https://${company.url}`, '_blank')}
                    >
                      Kunjungi Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-up">
          <div className="card-gradient p-8 rounded-lg border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Ekosistem Terintegrasi</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Semua platform kami dirancang untuk saling terintegrasi, menciptakan ekosistem digital 
              yang komprehensif untuk memenuhi berbagai kebutuhan bisnis modern.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">6</div>
                <div className="text-sm text-muted-foreground">Platform</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-1">1M+</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;