import { ArrowRight, Globe, Code, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Globe className="h-8 w-8 text-primary opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Code className="h-6 w-6 text-accent opacity-60" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <TrendingUp className="h-7 w-7 text-primary-glow opacity-60" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">TechHolding</span>
            <br />
            <span className="text-foreground">Group</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Perusahaan holding terdepan di bidang teknologi informasi dan perdagangan internasional. 
            Menghubungkan inovasi digital dengan peluang global.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="primary-gradient hover:scale-105 transition-transform duration-300 glow-shadow group"
            >
              Jelajahi Portofolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-scale-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Platform Digital</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</div>
            <div className="text-muted-foreground">Klien Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-success mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">10+</div>
            <div className="text-muted-foreground">Negara</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;