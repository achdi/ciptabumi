import { useState } from "react";
import { ArrowLeft, TrendingUp, Users, Globe, Shield, Mail, Phone, MapPin, Building, Target, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

import Header from "@/components/Header";

const Investor = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: t('investor.form.success'),
      description: t('investor.form.success.desc'),
    });
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">{t('investor.hero.title')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('investor.hero.subtitle')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">{t('investor.stats.platforms')}</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-accent mb-2">1M+</div>
              <div className="text-muted-foreground">{t('investor.stats.users')}</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-success mb-2">15+</div>
              <div className="text-muted-foreground">{t('investor.stats.countries')}</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary-glow mb-2">99.9%</div>
              <div className="text-muted-foreground">{t('investor.stats.uptime')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Digital Portfolio */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{t('investor.flipbook.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('investor.flipbook.subtitle')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="silver-frame animate-scale-in">
              <Card className="card-gradient border-border/50 overflow-hidden">
                <CardHeader className="text-center">
                  <div className="p-4 rounded-full bg-primary/20 w-fit mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{t('investor.flipbook.card.title')}</CardTitle>
                  <p className="text-muted-foreground">{t('investor.flipbook.card.desc')}</p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative w-full h-[600px] bg-background rounded-t-lg overflow-hidden">
                    <iframe
                      src="https://online.fliphtml5.com/yhwoi/jcnx/"
                      className="w-full h-full border-0"
                      title="Interactive Digital Portfolio"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6 text-center bg-gradient-to-r from-muted/50 to-background">
                    <Button 
                      variant="outline" 
                      className="border-primary/50 hover:bg-primary/10"
                      onClick={() => window.open('https://online.fliphtml5.com/yhwoi/jcnx/', '_blank')}
                    >
                      {t('investor.flipbook.open')}
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">{t('investor.opportunity.title')}</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('investor.opportunity.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gradient">{t('investor.vision.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{t('investor.vision.point1')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{t('investor.vision.point2')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{t('investor.vision.point3')}</p>
                  </div>
                </div>
              </div>

              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{t('investor.form.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">{t('investor.form.name')}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('investor.form.name.placeholder')}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">{t('investor.form.company')}</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={t('investor.form.company.placeholder')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('investor.form.email')}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('investor.form.email.placeholder')}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t('investor.form.phone')}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('investor.form.phone.placeholder')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">{t('investor.form.message')}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t('investor.form.message.placeholder')}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {t('investor.form.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{t('investor.highlights.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('investor.highlights.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in">
              <CardHeader>
                <div className="p-3 rounded-full bg-primary/20 w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{t('investor.growth.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('investor.growth.desc')}</p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="p-3 rounded-full bg-accent/20 w-fit mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{t('investor.market.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('investor.market.desc')}</p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="p-3 rounded-full bg-success/20 w-fit mb-4">
                  <Award className="h-6 w-6 text-success" />
                </div>
                <CardTitle className="text-xl">{t('investor.innovation.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('investor.innovation.desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gradient">{t('investor.contact.title')}</h2>
            <p className="text-muted-foreground">{t('investor.contact.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="p-4 rounded-full bg-primary/20 w-fit mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{t('contact.info.email')}</h3>
              <p className="text-muted-foreground">investor@ciptabumi.com</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-accent/20 w-fit mx-auto mb-4">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{t('contact.info.phone')}</h3>
              <p className="text-muted-foreground">+62 21 1234 5678</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full bg-success/20 w-fit mx-auto mb-4">
                <MapPin className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">{t('contact.info.address')}</h3>
              <p className="text-muted-foreground">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investor;
