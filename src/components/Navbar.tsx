import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logos */}
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Horus Logo */}
            <a href="/" className="flex items-center">
              <span className="text-2xl font-black tracking-tight text-foreground">
                HORUS
              </span>
            </a>
            
            {/* DJI Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-md">
              <span className="text-xs font-bold text-secondary-foreground tracking-wide">
                DJI ENTERPRISE
              </span>
              <span className="text-[10px] text-muted-foreground font-medium">
                AUTHORIZED RESELLER
              </span>
            </div>
          </div>

          {/* Right: CTA */}
          <Button variant="navCta" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Falar com Consultor</span>
            <span className="sm:hidden">Contato</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
