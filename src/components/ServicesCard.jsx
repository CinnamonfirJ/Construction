const ServicesCard = ({ imgURL, desc, label }) => {
  return (
    <div className=' relative '>
      <div>
        <div>
          <img
            src={imgURL}
            alt={label}
            className=' w-72 h-64 bg-cover bg-center rounded-2xl bg-no-repeat'
          />
        </div>
        <div className=' flex justify-center items-center absolute w-64 h-32 top-[100%] translate-x-[-50%] translate-y-[-50%] left-[50%] z-50 bg-white rounded-lg p-6 shadow-lg shadow-gray-400 '>
          <p className='text-sm '>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
