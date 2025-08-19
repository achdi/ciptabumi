import { ExternalLink, Plane, Users, Edit3, Globe, Shield, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCompanies } from "@/hooks/useCompanies";
import { useCompanyStats } from "@/hooks/useCompanyStats";

const Portfolio = () => {
  const { data: companies = [], isLoading: companiesLoading } = useCompanies();
  const { data: stats = [], isLoading: statsLoading } = useCompanyStats();

  // Icon mapping based on icon_name from database
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'Plane': Plane,
      'Users': Users,
      'Edit3': Edit3,
      'Globe': Globe,
      'Shield': Shield,
      'Truck': Truck,
    };
    return iconMap[iconName] || Globe;
  };

  if (companiesLoading || statsLoading) {
    return (
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

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
            const IconComponent = getIconComponent(company.icon_name);
            
            return (
              <div key={company.id} className={`${frameClass} animate-scale-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-full ${company.bg_color} group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`h-6 w-6 ${company.color}`} />
                      </div>
                      <span className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground">
                        {company.category_en}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {company.name}
                    </CardTitle>
                    <p className="text-sm text-primary font-medium">{company.url}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0 flex flex-col justify-between flex-1">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {company.description_en}
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
              {stats.map((stat, index) => (
                <div key={stat.id} className="text-center">
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label_en}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;