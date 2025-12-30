import { CheckCircle2 } from "lucide-react";

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
          {/* Image/Dashboard mockup */}
          <div className="relative animate-fade-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              {/* Dashboard mockup with gradient background */}
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-navy-light to-secondary relative overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm1%201v38h38V1H1z%22%20fill%3D%22%230057FF%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]" />
                
                {/* Simulated dashboard elements */}
                <div className="absolute inset-6 flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-32 bg-primary/20 rounded-lg" />
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-muted/20 rounded-lg" />
                      <div className="h-8 w-8 bg-muted/20 rounded-lg" />
                    </div>
                  </div>
                  
                  {/* Main content area */}
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    {/* Map area */}
                    <div className="col-span-2 bg-secondary/50 rounded-xl border border-primary/20 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 border-2 border-primary/40 rounded-full flex items-center justify-center">
                          <div className="w-12 h-12 border-2 border-primary rounded-full animate-pulse" />
                        </div>
                      </div>
                      {/* Flight path lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        <path
                          d="M 20 80 Q 100 20 180 60 T 280 40"
                          fill="none"
                          stroke="hsl(217, 100%, 50%)"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className="opacity-50"
                        />
                      </svg>
                    </div>
                    
                    {/* Side panel */}
                    <div className="flex flex-col gap-3">
                      <div className="flex-1 bg-secondary/50 rounded-xl border border-muted/20 p-3">
                        <div className="h-3 w-16 bg-primary/30 rounded mb-2" />
                        <div className="h-12 bg-gradient-to-r from-primary/30 to-primary/10 rounded" />
                      </div>
                      <div className="flex-1 bg-secondary/50 rounded-xl border border-muted/20 p-3">
                        <div className="h-3 w-12 bg-muted/30 rounded mb-2" />
                        <div className="space-y-1">
                          <div className="h-2 w-full bg-muted/20 rounded" />
                          <div className="h-2 w-3/4 bg-muted/20 rounded" />
                        </div>
                      </div>
                      <div className="flex-1 bg-secondary/50 rounded-xl border border-muted/20 p-3">
                        <div className="h-3 w-14 bg-muted/30 rounded mb-2" />
                        <div className="flex gap-1">
                          <div className="h-8 flex-1 bg-primary/20 rounded" />
                          <div className="h-8 flex-1 bg-primary/30 rounded" />
                          <div className="h-8 flex-1 bg-primary/40 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
