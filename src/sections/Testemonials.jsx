import TestemonialCard from "../components/TestemonialCard";
import { testimonials } from "../constants";

const Testemonials = () => {
  return (
    <section id='testimonials'>
      <div className=' flex flex-col justify-center items-center mb-12'>
        <h3 className=' text-4xl text-center  font-palanquin font-bold text-coral-red '>
          Testemonials
        </h3>
        <p className=' info-text'>What Our Clients Say</p>
      </div>
      <div className=' flex justify-between items-center mx-12 max-lg:flex-col gap-12'>
        {testimonials.map((item) => (
          <TestemonialCard key={item.text} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testemonials;
