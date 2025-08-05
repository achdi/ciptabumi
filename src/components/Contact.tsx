import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "info@techholding.id",
      link: "mailto:info@techholding.id"
    },
    {
      icon: Phone,
      title: "Telepon",
      info: "+62 21 1234 5678",
      link: "tel:+622112345678"
    },
    {
      icon: MapPin,
      title: "Alamat",
      info: "Jakarta, Indonesia",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-accent-gradient">Hubungi</span> Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Siap untuk memulai kemitraan atau memiliki pertanyaan? Tim ahli kami siap membantu 
            mewujudkan visi digital Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Informasi Kontak</h3>
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
              <h4 className="text-xl font-bold mb-4 text-gradient">Jam Operasional</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Senin - Jumat:</span>
                  <span>08:00 - 17:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu:</span>
                  <span>09:00 - 15:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu:</span>
                  <span>Tutup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient border-border/50 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gradient">Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nama Lengkap
                  </label>
                  <Input 
                    placeholder="Masukkan nama lengkap"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="nama@email.com"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subjek
                </label>
                <Input 
                  placeholder="Subjek pesan"
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Pesan
                </label>
                <Textarea 
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button className="w-full primary-gradient hover:scale-105 transition-transform duration-300 group">
                Kirim Pesan
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