import { MessageCircle, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const phones = ["5598991558294", "5598984175552", "5598985949585"];
    const randomPhone = phones[Math.floor(Math.random() * phones.length)];
    const message = encodeURIComponent("Olá! Quero realizar o sonho de ter minha moto!");
    window.open(`https://wa.me/${randomPhone}?text=${message}`, "_blank");
  };

  const scrollToForm = () => {
    document.getElementById("proposta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
            🏍️ As melhores motos você encontra aqui
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground mb-6 leading-tight">
            REALIZE O SONHO
            <br />
            <span className="text-primary">DA SUA MOTO</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Encontre a moto perfeita para você. Financiamento facilitado, 
            entrada mínima e as melhores condições do mercado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleWhatsAppClick}
              className="btn-cta text-primary-foreground flex items-center gap-3 animate-pulse-glow"
            >
              <MessageCircle className="w-6 h-6" />
              QUERO MINHA MOTO
            </button>
            
            <button
              onClick={scrollToForm}
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-muted-foreground/30 text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              Solicitar Proposta
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
