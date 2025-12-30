import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DifferenceSection from "@/components/DifferenceSection";
import VideoSection from "@/components/VideoSection";
import ProductShowcase from "@/components/ProductShowcase";
import SoftwareSection from "@/components/SoftwareSection";
import IndustriesSection from "@/components/IndustriesSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Horus Smart Detections | Drones Enterprise DJI - Revenda Autorizada</title>
        <meta 
          name="description" 
          content="Hardware profissional para operações críticas. Drones Enterprise DJI, DJI Dock e projetos de hardware sob medida. Especialistas desde 2014." 
        />
        <meta name="keywords" content="drones enterprise, DJI, Matrice, inspeção industrial, drones profissionais, automação, DJI Dock" />
        <link rel="canonical" href="https://horus.global" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          <HeroSection />
          
          <DifferenceSection />
          
          <VideoSection 
            videoUrl="https://horus.global/wp-content/uploads/2025/12/3b32ce00-0621-4d08-baf0-40357feb73f0.mp4"
            overlayTitle="Drones projetados para o imprevisível."
            caption="Resistência a intempéries e sensores de alta precisão."
            fullWidth={true}
          />
          
          <ProductShowcase />
          
          <SoftwareSection />
          
          <VideoSection 
            videoUrl="https://horus.global/wp-content/uploads/2025/11/dock3.mp4"
            overlayTitle="O futuro é autônomo."
            caption="Reduza custos operacionais e elimine deslocamentos com o DJI Dock."
            fullWidth={false}
          />
          
          <IndustriesSection />
          
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
