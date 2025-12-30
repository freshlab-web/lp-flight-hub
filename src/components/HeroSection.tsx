import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shield, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background with lighter blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/30 to-primary/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230057FF%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <Badge 
              variant="outline" 
              className="px-4 py-2 border-secondary bg-secondary/80 text-secondary-foreground backdrop-blur-sm"
            >
              <Shield className="w-4 h-4 mr-2" />
              Especialistas desde 2014 | Projetos Homologados
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary leading-tight">
                Hardware profissional para{" "}
                <span className="text-secondary">operações críticas</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-white max-w-lg leading-relaxed">
                Drones Enterprise, DJI Dock e projetos de hardware sob medida 
                para operações em grande escala.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-4 pt-4">
              {["DJI Matrice", "DJI Dock", "Câmeras Térmicas", "LiDAR"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary" />
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
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Solicite contato técnico
                  </h2>
                  <p className="text-muted-foreground">
                    Nossa equipe entrará em contato em até 24h
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input 
                        id="name" 
                        placeholder="Seu nome completo" 
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Corporativo</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="email@empresa.com" 
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input 
                        id="company" 
                        placeholder="Nome da empresa" 
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Cargo</Label>
                      <Input 
                        id="role" 
                        placeholder="Seu cargo" 
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="segment">Segmento</Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione seu segmento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="energia">Energia Solar</SelectItem>
                        <SelectItem value="utilities">Utilities & O&M</SelectItem>
                        <SelectItem value="telecom">Telecom</SelectItem>
                        <SelectItem value="industria">Indústria & Portos</SelectItem>
                        <SelectItem value="smartcities">Smart Cities</SelectItem>
                        <SelectItem value="seguranca">Segurança Patrimonial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Interesse Principal</Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="O que você procura?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="drones">Drones Enterprise</SelectItem>
                        <SelectItem value="dock">DJI Dock (Automação)</SelectItem>
                        <SelectItem value="payloads">Payloads & Câmeras</SelectItem>
                        <SelectItem value="projeto">Projeto Completo</SelectItem>
                        <SelectItem value="consultoria">Consultoria Técnica</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="hero" size="lg" className="w-full group">
                    Receber Consultoria
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
