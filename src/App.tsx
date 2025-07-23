import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from "./sections/Services";
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand text-[#1f2937]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;