const horusLogo = "https://cdn.jsdelivr.net/gh/freshlab-web/lp-flight-hub@main/dist/assets/horus-logo.png";
const djiResellerLogo = "https://cdn.jsdelivr.net/gh/freshlab-web/lp-flight-hub@main/dist/assets/dji-authorized-reseller.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-muted/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={horusLogo} alt="Horus Smart Detections" className="h-6" />
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Horus Smart Detections. Todos os direitos reservados.
            </span>
          </div>
          
          <img src={djiResellerLogo} alt="DJI Authorized Reseller" className="h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
