import { MessageCircle, Phone } from "lucide-react";

const QuickContact = () => {
  const contacts = [
    { phone: "5598991558294", label: "(98) 99155-8294", name: "Vendedor 1" },
    { phone: "5598984175552", label: "(98) 98417-5552", name: "Vendedor 2" },
    { phone: "5598985949585", label: "(98) 98594-9585", name: "Vendedor 3" },
  ];

  const handleClick = (phone: string) => {
    const message = encodeURIComponent("Olá! Gostaria de informações sobre motos disponíveis.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">
            CONTATO <span className="text-primary">RÁPIDO</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fale diretamente com nossos vendedores
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <button
              key={index}
              onClick={() => handleClick(contact.phone)}
              className="card-glass p-6 flex flex-col items-center gap-4 hover:border-whatsapp transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-whatsapp/20 flex items-center justify-center group-hover:bg-whatsapp/30 transition-colors">
                <MessageCircle className="w-8 h-8 text-whatsapp" />
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">{contact.name}</p>
                <p className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Phone className="w-4 h-4 text-whatsapp" />
                  {contact.label}
                </p>
              </div>
              
              <span className="btn-whatsapp text-sm px-4 py-2">
                Chamar no WhatsApp
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
