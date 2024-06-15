import ServicesCard from "../components/ServicesCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section>
      <div className=' flex flex-col justify-center items-center mb-12'>
        <h3 className=' text-4xl text-center  font-palanquin font-bold text-coral-red '>
          Our Services
        </h3>
        <p className=' info-text'>Our Remodeling Services:</p>
      </div>
      <div className='flex justify-center items-center'>
        <div className=' grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20'>
          {services.map((item) => (
            <ServicesCard key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
