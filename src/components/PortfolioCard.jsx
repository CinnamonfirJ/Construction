import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../components/Button";

const PortfolioCard = ({ label, desc, location, imgURL, id }) => {
  return (
    <div className=' relative flex justify-around p-6 items-end duration-300 ease-out shadow-md shadow-slate-900 hover:translate-y-5 w-80 h-80 rounded-md group'>
      <img
        src={imgURL}
        alt=''
        className=' absolute  w-full h-full top-0 left-0 rounded-md'
      />
      <span className=' absolute bg-black/20 z-10 opacity-0 group-hover:opacity-100 w-full h-full top-0 left-0 rounded-md'></span>
      <div className=' z-30 text-white translate-y-8 duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0'>
        <h3 className=' text-2xl'>{label}</h3>
        <p className=' font-montserrat text-lg leading-7 '>{location}</p>
        <Link to={`/portfolio/${id}`}>
          <Button text={"Know More"} />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
