import { Sun, Zap, Radio, Factory, Building2, Shield } from "lucide-react";

const industries = [
  { name: "Energia Solar", icon: Sun },
  { name: "Utilities & O&M", icon: Zap },
  { name: "Telecom", icon: Radio },
  { name: "Indústria & Portos", icon: Factory },
  { name: "Smart Cities", icon: Building2 },
  { name: "Segurança Patrimonial", icon: Shield },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Projetado para{" "}
            <span className="gradient-text">operações profissionais</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções enterprise para os setores mais exigentes da indústria.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group flex items-center gap-3 px-6 py-4 rounded-full bg-muted border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <industry.icon className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {industry.name}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary/50 border border-border">
            <Shield className="w-4 h-4 text-primary" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Atendimento exclusivo corporativo (B2B).</strong>{" "}
              Não atendemos uso recreativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
