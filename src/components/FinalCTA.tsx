import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dark background with map pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-navy-light to-secondary">
        {/* World map dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
            {/* Simplified world map outline with dots */}
            <g fill="currentColor" className="text-primary opacity-50">
              {/* Americas */}
              <circle cx="250" cy="180" r="3" />
              <circle cx="270" cy="200" r="3" />
              <circle cx="260" cy="220" r="3" />
              <circle cx="280" cy="240" r="3" />
              <circle cx="300" cy="280" r="3" />
              <circle cx="290" cy="320" r="3" />
              {/* Europe/Africa */}
              <circle cx="480" cy="160" r="3" />
              <circle cx="500" cy="180" r="3" />
              <circle cx="490" cy="220" r="3" />
              <circle cx="510" cy="260" r="3" />
              <circle cx="520" cy="300" r="3" />
              {/* Asia */}
              <circle cx="650" cy="180" r="3" />
              <circle cx="680" cy="200" r="3" />
              <circle cx="720" cy="190" r="3" />
              <circle cx="750" cy="220" r="3" />
              {/* Australia */}
              <circle cx="800" cy="340" r="3" />
              <circle cx="820" cy="360" r="3" />
            </g>
            {/* Connection lines */}
            <g stroke="currentColor" className="text-primary" strokeWidth="0.5" fill="none" opacity="0.3">
              <path d="M 280 240 Q 400 180 480 160" />
              <path d="M 500 180 Q 580 170 650 180" />
              <path d="M 720 190 Q 760 280 800 340" />
            </g>
          </svg>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center glow-effect">
              <Cpu className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Evite custos e limitações{" "}
              <span className="gradient-text">no futuro</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              Escolha a arquitetura certa com quem entende de hardware e software.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button variant="hero" size="xl" className="group">
              Falar com especialista em Hardware
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 opacity-80">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-xs text-white/70 uppercase tracking-wide">Anos de experiência</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-xs text-white/70 uppercase tracking-wide">Projetos entregues</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-xs text-white/70 uppercase tracking-wide">Suporte técnico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
