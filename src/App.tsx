import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from "./sections/Services";
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;