import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="font-display text-xl text-primary-foreground">M</span>
            </div>
            <span className="font-display text-2xl text-foreground tracking-wider">
              MOTO<span className="text-primary">SHOP</span>
            </span>
          </div>
          
          {/* Divider */}
          <div className="w-20 h-px bg-border" />
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center flex items-center gap-1">
            © {currentYear} MotoShop. Todos os direitos reservados.
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
