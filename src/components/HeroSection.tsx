import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import RDStationForm from "./RDStationForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background with primary blue */}
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <Badge 
              variant="outline" 
              className="px-4 py-2 border-white/30 bg-white/10 text-white backdrop-blur-sm"
            >
              <Shield className="w-4 h-4 mr-2" />
              Especialistas desde 2014 | Projetos Homologados
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Drone profissional para operações críticas{" "}
                <span className="text-white"></span>
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 max-w-lg leading-relaxed">
                Drones Enterprise, DJI Dock e projetos de hardware sob medida 
                para operações em grande escala.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-4 pt-4">
              {["DJI Matrice", "DJI Dock", "Câmeras Térmicas", "LiDAR"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20"
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-sm font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div 
            className="animate-fade-in-right" 
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-card rounded-2xl shadow-2xl p-8 lg:p-10 border border-border/50">
              <div className="space-y-6">
                
                <RDStationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
