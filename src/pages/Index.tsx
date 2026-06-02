import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ViolationSection from "@/components/ViolationSection";
import InjurySection from "@/components/InjurySection";
import AboutSection from "@/components/AboutSection";
import ChatConsultant from "@/components/ChatConsultant";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ViolationSection />
        <InjurySection />
        <AboutSection />
        <ChatConsultant />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
