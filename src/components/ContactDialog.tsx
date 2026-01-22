import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[90%] h-[80vh] p-0 overflow-hidden bg-white">
        <iframe 
          src="https://lps.novainterface.com.br/horus/index.html" 
          className="w-full h-full border-0"
          title="Formulário de Contato"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
