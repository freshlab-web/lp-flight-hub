const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-muted/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-lg font-black text-secondary-foreground">HORUS</span>
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Horus Smart Detections. Todos os direitos reservados.
            </span>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 bg-navy-light rounded-md">
            <span className="text-xs font-bold text-secondary-foreground tracking-wide">
              DJI ENTERPRISE
            </span>
            <span className="text-[10px] text-muted-foreground font-medium">
              AUTHORIZED RESELLER
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
