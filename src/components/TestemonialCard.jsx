const TestemonialCard = ({ star, user, rating, text }) => {
  return (
    <div className=' flex flex-col justify-center items-center w-96 max-md:w-80 gap-4 shadow-lg shadow-slate-900 p-4 rounded-xl'>
      <div className=' flex justify-center items-center '>
        <h3 className=' font-montserrat font-bold text-2xl mr-4'>{user}</h3>
        <p className=' font-montserrat text-slate-gray text-lg leading-7'>
          {rating}
        </p>
        <img src={star} alt='' width={20} />
      </div>
      <div>
        <p className=' info-text'>{text}</p>
      </div>
    </div>
  );
};

export default TestemonialCard;
