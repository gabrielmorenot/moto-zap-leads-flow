import { MapPin, Clock, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">
            NOSSA <span className="text-primary">LOCALIZAÇÃO</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Venha nos visitar e conheça nossa loja
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="card-glass p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground text-sm">
                  Avenida Guajajaras, 48<br />
                  Jardim São Cristóvão<br />
                  São Luís - MA, 65.055-285
                </p>
              </div>
            </div>
            
            <div className="card-glass p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground text-sm">
                  Seg a Sex: 8h às 18h<br />
                  Sábado: 8h às 14h
                </p>
              </div>
            </div>
            
            <a
              href="https://www.google.com/maps/search/?api=1&query=Avenida+Guajajaras+48+Jardim+São+Cristóvão+São+Luís+MA"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass p-6 flex items-center gap-4 hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                <Navigation className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Como Chegar</h3>
                <p className="text-primary text-sm">
                  Abrir no Google Maps →
                </p>
              </div>
            </a>
          </div>
          
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="card-glass overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9!2d-44.27!3d-2.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zAvenida+Guajajaras,+48+-+Jardim+São+Cristóvão,+São+Luís+-+MA!5e0!3m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Carlos das Motos - Av. Guajajaras, 48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
