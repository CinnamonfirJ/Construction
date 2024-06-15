import { kitchen2 } from "../assets/images";
import Button from "../components/Button";
import PortfolioCard from "../components/PortfolioCard";
import { portfolio } from "../constants";

const Portfolio = () => {
  return (
    <section>
      <div>
        <div className=' flex flex-col justify-center items-center mb-12'>
          <h3 className=' text-4xl text-center  font-palanquin font-bold text-coral-red '>
            Portfolio
          </h3>
          <p className=' info-text'>Browse Our Work</p>
        </div>

        <div className=' flex justify-center items-center'>
          <div className=' grid grid-cols-3  max-xl:grid-cols-2 max-md:grid-cols-1 gap-12'>
            {portfolio.map((item) => (
              <PortfolioCard {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
