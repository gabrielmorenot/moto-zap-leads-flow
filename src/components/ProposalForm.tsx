import { useState } from "react";
import { Send, User, Phone, Bike } from "lucide-react";
import { toast } from "sonner";

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    moto: "",
  });

  const phones = ["5598991558294", "5598984175552", "5598985949585"];
  const phoneLabels = ["(98) 99155-8294", "(98) 98417-5552", "(98) 98594-9585"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome.trim() || !formData.whatsapp.trim() || !formData.moto.trim()) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Validate name length
    if (formData.nome.length > 100) {
      toast.error("Nome muito longo");
      return;
    }

    // Validate phone format (basic)
    const phoneClean = formData.whatsapp.replace(/\D/g, "");
    if (phoneClean.length < 10 || phoneClean.length > 11) {
      toast.error("Número de WhatsApp inválido");
      return;
    }

    // Validate moto interest length
    if (formData.moto.length > 200) {
      toast.error("Descrição da moto muito longa");
      return;
    }

    // Random selection of phone number
    const randomIndex = Math.floor(Math.random() * phones.length);
    const selectedPhone = phones[randomIndex];
    
    const message = encodeURIComponent(
      `Olá! Me chamo ${formData.nome.trim()}.\n\nMeu WhatsApp: ${formData.whatsapp.trim()}\n\nTenho interesse na moto: ${formData.moto.trim()}\n\nGostaria de receber uma proposta!`
    );
    
    toast.success(`Redirecionando para ${phoneLabels[randomIndex]}`);
    
    // Use direct location change to avoid popup blockers
    window.location.href = `https://wa.me/${selectedPhone}?text=${message}`;
  };

  return (
    <section id="proposta" className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="section-title text-foreground">
            SOLICITE SUA <span className="text-primary">PROPOSTA</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Preencha o formulário e receba uma proposta personalizada
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="card-glass p-8 md:p-10 space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <User className="w-4 h-4 text-primary" />
              Seu Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              className="input-modern"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              maxLength={100}
            />
          </div>
          
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Phone className="w-4 h-4 text-primary" />
              WhatsApp
            </label>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              className="input-modern"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              maxLength={20}
            />
          </div>
          
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Bike className="w-4 h-4 text-primary" />
              Moto de Interesse
            </label>
            <input
              type="text"
              placeholder="Ex: Honda CG 160, Yamaha Factor..."
              className="input-modern"
              value={formData.moto}
              onChange={(e) => setFormData({ ...formData, moto: e.target.value })}
              maxLength={200}
            />
          </div>
          
          <button
            type="submit"
            className="btn-cta w-full text-primary-foreground flex items-center justify-center gap-3"
          >
            <Send className="w-5 h-5" />
            ENVIAR PARA WHATSAPP
          </button>
          
          <p className="text-center text-xs text-muted-foreground">
            Ao enviar, você será redirecionado para um de nossos atendentes no WhatsApp
          </p>
        </form>
      </div>
    </section>
  );
};

export default ProposalForm;
