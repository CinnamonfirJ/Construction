import { useEffect, useState } from "react";

const AboutCard = ({ value, label, imgURL }) => {
  //   const [statValue, setStatValue] = useState(0);
  //   let countValue = 0;

  //   const displayValue = () => {
  //     let interval = 5000;
  //     let startValue = statValue;
  //     let endValue = value;

  //     let duration = Math.floor(interval / endValue);
  //     let counter = setInterval(() => {
  //       setStatValue(+1);
  //       countValue = startValue;
  //     }, duration);
  //   };

  //   useEffect(() => {
  //     displayValue();
  //   }, value);

  return (
    <div className=' flex items-center gap-8 rounded-2xl  shadow-slate-400 shadow-md '>
      <div className=' flex flex-col justify-center items-center bg-coral-red p-4 rounded-2xl w-16'>
        <img src={imgURL} alt='icon' />
        <p className=' font-montserrat font-bold text-lg '>{value}</p>
      </div>
      <div>
        <p className=' info-text'>{label}</p>
      </div>
    </div>
  );
};

export default AboutCard;
