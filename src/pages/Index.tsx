import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProposalForm from "@/components/ProposalForm";
import QuickContact from "@/components/QuickContact";
import LocationSection from "@/components/LocationSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProposalForm />
      <QuickContact />
      <LocationSection />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Index;
