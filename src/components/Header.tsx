import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo-carlos-motos.png";

const Header = () => {
  const handleWhatsAppClick = () => {
    const phones = ["5598991558294", "5598984175552", "5598985949585"];
    const randomPhone = phones[Math.floor(Math.random() * phones.length)];
    const message = encodeURIComponent("Olá! Tenho interesse em uma moto. Gostaria de mais informações.");
    window.location.href = `https://wa.me/${randomPhone}?text=${message}`;
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="Carlos das Motos" className="h-14 md:h-20 w-auto" />
        
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
