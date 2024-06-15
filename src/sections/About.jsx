import { useState } from "react";
import AboutCard from "../components/AboutCard";
import Button from "../components/Button";
import { statistics } from "../constants";

const About = () => {
  const [coun, setCount] = useState(0);

  return (
    <section>
      <div className=' flex flex-col justify-center items-center mb-12'>
        <h3 className=' text-4xl text-center  font-palanquin font-bold text-coral-red '>
          About Us
        </h3>
        <p className=' info-text'>Get To Know Us</p>
      </div>
      <div className=' flex justify-center items-start gap-6 max-md:flex-col'>
        <div>
          <h2 className=' text-4xl max-lg:text-2xl font-bold font-palanquin mb-12'>
            Welcome to <span className=' text-coral-red'>BuildWise</span>, where
            we turn your remodeling dreams into reality.
          </h2>
          <p className=' info-text mb-12'>
            {" "}
            With years of experience and a passion for craftsmanship, we
            specialize in transforming homes into spaces that inspire. Explore
            our services, browse our portfolio, and let's bring your vision to
            life together.
          </p>
          <div className=' w-40'>
            <Button text='Read More' link={"/about"} />
          </div>
        </div>
        <div className=' flex justify-center flex-col gap-3 w-full'>
          {statistics.map((item) => (
            <AboutCard key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
