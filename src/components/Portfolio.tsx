import { ExternalLink, Plane, Users, Edit3, Globe, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCompanies } from "@/hooks/useCompanies";
import { useCompanyStats } from "@/hooks/useCompanyStats";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = {
  Plane,
  Users,
  Edit3,
  Globe,
  Shield,
};

const Portfolio = () => {
  const { companies, loading: companiesLoading } = useCompanies();
  const { stats, loading: statsLoading } = useCompanyStats();
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('portfolio.title.main')}</span> {t('portfolio.title.sub')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {companiesLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <Card key={index} className="card-gradient border-border/50 animate-pulse h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-muted rounded-full"></div>
                    <div className="w-20 h-6 bg-muted rounded-full"></div>
                  </div>
                  <div className="w-32 h-6 bg-muted rounded mb-2"></div>
                  <div className="w-40 h-4 bg-muted rounded"></div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    <div className="w-full h-4 bg-muted rounded"></div>
                    <div className="w-3/4 h-4 bg-muted rounded"></div>
                    <div className="w-1/2 h-4 bg-muted rounded"></div>
                  </div>
                  <div className="w-full h-10 bg-muted rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => {
              const IconComponent = iconMap[company.icon_name as keyof typeof iconMap];
              return (
                <Card 
                  key={company.id}
                  className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-scale-in h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-full ${company.bg_color} group-hover:scale-110 transition-transform`}>
                        {IconComponent && <IconComponent className={`h-6 w-6 ${company.color}`} />}
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
                      {t('portfolio.visit')}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <div className="text-center mt-16 animate-fade-up">
          <div className="card-gradient p-8 rounded-lg border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">{t('portfolio.ecosystem.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('portfolio.ecosystem.description')}
            </p>
            {statsLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="text-center animate-pulse">
                    <div className="w-16 h-8 bg-muted rounded mb-1 mx-auto"></div>
                    <div className="w-12 h-4 bg-muted rounded mx-auto"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.id} className="text-center">
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;