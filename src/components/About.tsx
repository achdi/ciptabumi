import { Building2, Globe2, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Holding Company",
      description: "Struktur perusahaan holding yang mengelola berbagai anak perusahaan di bidang teknologi dan perdagangan."
    },
    {
      icon: Globe2,
      title: "Ekspor Impor",
      description: "Jaringan perdagangan internasional yang luas dengan fokus pada komoditas teknologi dan produk digital."
    },
    {
      icon: Zap,
      title: "Teknologi Informasi",
      description: "Solusi teknologi terdepan meliputi web hosting, aplikasi builder, dan platform digital inovatif."
    },
    {
      icon: Users,
      title: "Social Media",
      description: "Platform media sosial yang menghubungkan komunitas global dengan teknologi canggih."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-accent-gradient">Tentang</span> TechHolding Group
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami adalah perusahaan holding yang berfokus pada inovasi teknologi informasi dan 
            perdagangan internasional. Dengan pengalaman lebih dari satu dekade, kami telah 
            membangun ekosistem digital yang terintegrasi dan berkelanjutan.
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
            <h3 className="text-3xl font-bold mb-6 text-gradient">Visi & Misi</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-accent">Visi</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi perusahaan holding teknologi terdepan di Asia Tenggara yang 
                  menghubungkan inovasi digital dengan peluang bisnis global.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-accent">Misi</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mengembangkan ekosistem digital yang terintegrasi</li>
                  <li>• Memfasilitasi perdagangan internasional melalui teknologi</li>
                  <li>• Menciptakan platform inovatif untuk pertumbuhan bisnis</li>
                  <li>• Membangun komunitas digital yang berkelanjutan</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="card-gradient p-8 rounded-lg border border-border/50">
              <h4 className="text-2xl font-bold mb-6 text-center text-gradient">Nilai Perusahaan</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Inovasi</div>
                  <p className="text-sm text-muted-foreground">Selalu di garis depan teknologi</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Integritas</div>
                  <p className="text-sm text-muted-foreground">Transparansi dalam setiap langkah</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">Kolaborasi</div>
                  <p className="text-sm text-muted-foreground">Kekuatan dalam kemitraan</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-glow mb-2">Excelence</div>
                  <p className="text-sm text-muted-foreground">Standar kualitas tertinggi</p>
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