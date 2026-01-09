import { CheckCircle2 } from "lucide-react";

const flighthubPlatform = "https://cdn.jsdelivr.net/gh/freshlab-web/lp-flight-hub@main/src/assets/flighthub-platform.png";

const features = [
  "Planejamento de missões 3D",
  "Gestão de frota em tempo real",
  "Análise avançada de dados (IA)",
];

const SoftwareSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Dashboard - Real Platform Screenshot */}
          <div className="relative animate-fade-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={flighthubPlatform} 
                alt="FlightHub 2 & Monitora Technology Platform" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card rounded-xl shadow-xl p-4 border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-primary rounded-full border-t-transparent animate-spin" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  <p className="text-sm font-semibold text-foreground">Em operação</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                FlightHub 2 &{" "}
                <span className="gradient-text">Integração Monitora™</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O hardware é apenas o começo. Integre sua frota com o FlightHub 2 
                para gestão em nuvem e escale para nossa inteligência artificial 
                Monitora Technology™ para análise automática de dados.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
