import { Instagram, ExternalLink } from "lucide-react";

const InstagramSection = () => {
  const instagramHandle = "@carlosdasmotos";
  const instagramUrl = "https://www.instagram.com/carlosdasmotos";
  
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">
            SIGA NO <span className="text-primary">INSTAGRAM</span>
          </h2>
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-lg flex items-center justify-center gap-2 hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            {instagramHandle}
          </a>
        </div>
        
        <div className="card-glass p-6 md:p-8">
          {/* Instagram Profile Preview */}
          <div className="aspect-square md:aspect-video bg-secondary rounded-xl flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
              <Instagram className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Carlos das Motos</h3>
            <p className="text-muted-foreground text-center px-4">
              Acompanhe nossas novidades e ofertas exclusivas
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-primary-foreground flex items-center gap-2 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
