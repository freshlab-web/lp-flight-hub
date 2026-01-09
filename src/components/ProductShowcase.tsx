import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Battery, Cpu, Shield, Cloud, Zap, RefreshCw } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const products = [
  {
    name: "DJI Matrice 350 RTK",
    image: "https://horus.global/wp-content/uploads/2025/11/matrice4-min-534x403.png",
    features: [
      { icon: Battery, text: "Autonomia estendida" },
      { icon: Cpu, text: "Carga útil múltipla" },
      { icon: Shield, text: "Proteção IP55" },
    ],
    bestFor: "Inspeções pesadas e LiDAR",
    badge: "Enterprise",
  },
  {
    name: "DJI Matrice 30 Series",
    image: "https://horus.global/wp-content/uploads/2025/11/matrice30series-min-534x403.png",
    features: [
      { icon: Zap, text: "Portabilidade extrema" },
      { icon: Cpu, text: "Híbrido" },
      { icon: RefreshCw, text: "Rápida implementação" },
    ],
    bestFor: "Segurança e Inspeções rápidas",
    badge: "Popular",
  },
  {
    name: "DJI Dock 3",
    image: "https://horus.global/wp-content/uploads/2025/12/dji-dock3-min-1.png",
    features: [
      { icon: Cloud, text: "Operação 100% remota" },
      { icon: Battery, text: "Carregamento automático" },
      { icon: RefreshCw, text: "24/7" },
    ],
    bestFor: "Monitoramento recorrente automatizado",
    badge: "Automação",
  },
];

const ProductShowcase = () => {
  const { openModal } = useContactModal();

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230057FF%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Drones profissionais de{" "}
            <span className="gradient-text">alto desempenho</span>
          </h2>
          <p className="text-lg text-white/80">
            Hardware enterprise homologado para as operações mais exigentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative bg-navy-light rounded-2xl overflow-hidden border border-muted/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-primary text-primary-foreground font-semibold">
                  {product.badge}
                </Badge>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-b from-secondary/50 to-navy-light">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  {product.name}
                </h3>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature) => (
                    <div
                      key={feature.text}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Best For */}
                <div className="pt-4 border-t border-muted/10">
                  <p className="text-xs text-white/60 uppercase tracking-wide mb-1">
                    Ideal para
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {product.bestFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="group border-primary text-white hover:bg-primary hover:text-primary-foreground" onClick={openModal}>
            Ver especificações completas
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;