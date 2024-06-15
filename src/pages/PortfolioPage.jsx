import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { portfolio } from "../constants";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const PortfolioPage = () => {
  const { id } = useParams();

  useEffect(() => {
    // document.documentElement.scrollHeight
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <div className='max-container padding'>
        {portfolio.map((items) =>
          items.id == id ? (
            <div>
              <div className=' flex flex-col justify-center items-center mb-12'>
                <h3 className=' text-4xl text-center  font-palanquin font-bold text-coral-red '>
                  Portfolio - {items.label}
                </h3>
                <p className=' info-text'>{items.location} </p>
              </div>

              <div className=' flex flex-col justify-center items-center gap-12'>
                <img src={items.imgURL} alt='' />
                <p className=' info-text'>{items.desc}</p>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>

      <section id='contact' className=' max-container padding'>
        <Contact />
      </section>
      <section className=' max-container padding bg-black'>
        <Footer />
      </section>
    </div>
  );
};

export default PortfolioPage;
