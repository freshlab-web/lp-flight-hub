import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const horusLogo = "https://cdn.jsdelivr.net/gh/freshlab-web/lp-flight-hub@main/src/assets/horus-logo.png";
const djiResellerLogo = "https://cdn.jsdelivr.net/gh/freshlab-web/lp-flight-hub@main/src/assets/dji-authorized-reseller.png";

const Navbar = () => {
  const { openModal } = useContactModal();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logos */}
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Horus Logo */}
            <a href="/" className="flex items-center">
              <img src={horusLogo} alt="Horus Smart Detections" className="h-8 lg:h-10" />
            </a>
            
            {/* DJI Badge */}
            <div className="hidden sm:flex items-center">
              <img src={djiResellerLogo} alt="DJI Authorized Reseller" className="h-5 lg:h-6" />
            </div>
          </div>

          {/* Right: CTA */}
          <Button variant="navCta" className="gap-2" onClick={openModal}>
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
