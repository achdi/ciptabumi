import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email'),
      info: "info@techholding.id",
      link: "mailto:info@techholding.id"
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      info: "+62 21 1234 5678",
      link: "tel:+622112345678"
    },
    {
      icon: MapPin,
      title: t('contact.info.address'),
      info: "Jakarta, Indonesia",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">{t('contact.info.title')}</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <a 
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.info}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-gradient p-6 rounded-lg border border-border/50">
              <h4 className="text-xl font-bold mb-4 text-gradient">{t('contact.hours.title')}</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>{t('contact.hours.weekdays')}</span>
                  <span>{t('contact.hours.weekdays.time')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.hours.saturday')}</span>
                  <span>{t('contact.hours.saturday.time')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.hours.sunday')}</span>
                  <span>{t('contact.hours.sunday.time')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient border-border/50 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gradient">{t('contact.form.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t('contact.form.name')}
                  </label>
                  <Input 
                    placeholder={t('contact.form.name.placeholder')}
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t('contact.form.email')}
                  </label>
                  <Input 
                    type="email"
                    placeholder={t('contact.form.email.placeholder')}
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t('contact.form.subject')}
                </label>
                <Input 
                  placeholder={t('contact.form.subject.placeholder')}
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t('contact.form.message')}
                </label>
                <Textarea 
                  placeholder={t('contact.form.message.placeholder')}
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button className="w-full primary-gradient hover:scale-105 transition-transform duration-300 group">
                {t('contact.form.send')}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;