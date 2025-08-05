import { Building2, Globe2, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Building2,
      title: t('about.feature.holding.title'),
      description: t('about.feature.holding.desc')
    },
    {
      icon: Globe2,
      title: t('about.feature.trade.title'),
      description: t('about.feature.trade.desc')
    },
    {
      icon: Zap,
      title: t('about.feature.tech.title'),
      description: t('about.feature.tech.desc')
    },
    {
      icon: Users,
      title: t('about.feature.social.title'),
      description: t('about.feature.social.desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h3 className="text-3xl font-bold mb-6 text-gradient">{t('about.vision.title')}</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-accent">{t('about.vision.label')}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.vision.text')}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-accent">{t('about.mission.label')}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>{t('about.mission.1')}</li>
                  <li>{t('about.mission.2')}</li>
                  <li>{t('about.mission.3')}</li>
                  <li>{t('about.mission.4')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="card-gradient p-8 rounded-lg border border-border/50">
              <h4 className="text-2xl font-bold mb-6 text-center text-gradient">{t('about.values.title')}</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{t('about.values.innovation')}</div>
                  <p className="text-sm text-muted-foreground">{t('about.values.innovation.desc')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{t('about.values.integrity')}</div>
                  <p className="text-sm text-muted-foreground">{t('about.values.integrity.desc')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">{t('about.values.collaboration')}</div>
                  <p className="text-sm text-muted-foreground">{t('about.values.collaboration.desc')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-glow mb-2">{t('about.values.excellence')}</div>
                  <p className="text-sm text-muted-foreground">{t('about.values.excellence.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;