import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const AboutPage = () => {
  return (
    <main>
      <section className=' max-container padding'>
        <About />
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

export default AboutPage;
