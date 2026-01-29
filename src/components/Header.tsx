import { MessageCircle } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    const phones = ["5598991558294", "5598984175552", "5598985949585"];
    const randomPhone = phones[Math.floor(Math.random() * phones.length)];
    const message = encodeURIComponent("Olá! Tenho interesse em uma moto. Gostaria de mais informações.");
    window.open(`https://wa.me/${randomPhone}?text=${message}`, "_blank");
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <span className="font-display text-2xl text-primary-foreground">M</span>
          </div>
          <span className="font-display text-2xl md:text-3xl text-foreground tracking-wider">
            MOTO<span className="text-primary">SHOP</span>
          </span>
        </div>
        
        <button
          onClick={handleWhatsAppClick}
          className="btn-whatsapp text-sm md:text-base"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Fale Conosco</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
