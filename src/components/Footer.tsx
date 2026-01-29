import { Heart } from "lucide-react";
import logo from "@/assets/logo-carlos-motos.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <img src={logo} alt="Carlos das Motos" className="h-14 w-auto" />
          
          {/* Divider */}
          <div className="w-20 h-px bg-border" />
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center flex items-center gap-1">
            © {currentYear} Carlos das Motos. Todos os direitos reservados.
          </p>
          
          <p className="text-muted-foreground/60 text-xs flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-primary fill-primary" /> para você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
