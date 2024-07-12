import About from "./pages/About";
import BestSeller from "./pages/BestSeller";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import TopRated from "./pages/TopRated";
import { DarkModeProvider } from "./DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <TopRated />
        <BestSeller />
        <Faq />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default App;
