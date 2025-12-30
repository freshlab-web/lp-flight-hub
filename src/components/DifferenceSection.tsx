import { Search, FileCheck, GraduationCap, Brain } from "lucide-react";

const differences = [
  {
    icon: Search,
    title: "Análise Operacional",
    description: "Avaliamos suas necessidades antes de indicar o equipamento ideal para sua operação.",
  },
  {
    icon: FileCheck,
    title: "Homologação Técnica",
    description: "Garantia de conformidade com regulamentações ANAC e certificações necessárias.",
  },
  {
    icon: GraduationCap,
    title: "Treinamento e Suporte",
    description: "Capacitação da equipe e suporte técnico contínuo para máxima eficiência.",
  },
  {
    icon: Brain,
    title: "Visão de Longo Prazo",
    description: "Preparação para automação e integração com IA em sua infraestrutura.",
  },
];

const DifferenceSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/50 via-transparent to-transparent" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Mais do que vender drones,{" "}
            <span className="gradient-text">entregamos projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Da análise inicial à operação completa, acompanhamos cada etapa do seu projeto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {differences.map((item, index) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
