
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Trainers from "./components/Trainers/Trainers";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    easing: "ease-in-out",
    disable: () => window.innerWidth <= 991,
  });

  AOS.refresh();
}, []);
  return (
    <>
      <Navbar gymName="TanuGym" />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
