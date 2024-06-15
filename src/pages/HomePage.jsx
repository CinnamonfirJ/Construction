import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Testemonials from "../sections/Testemonials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const HomePage = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className=' max-container padding'>
        <About />
      </section>
      <section id='services' className=' max-container padding'>
        <Services />
      </section>
      <section id='portfolio' className=' max-container padding'>
        <Portfolio />
      </section>
      <section id='testimonials' className=' max-container padding'>
        <Testemonials />
      </section>
      <section id='contact' className=' max-container padding'>
        <Contact />
      </section>
      <section className=' max-container padding bg-black'>
        <Footer />
      </section>
    </main>
  );
};

export default HomePage;
