const PortfolioDetails = ({ label, desc, location, imgURL, id }) => {
  return (
    <section>
      <div>
        <div className=' flex flex-col justify-center items-center mb-12'>
          <h3 className=' text-4xl text-center  font-palanquin font-bold text-coral-red '>
            Portfolio - {label}
          </h3>
          <p className=' info-text'>{location} </p>
        </div>

        <div className=' flex justify-center items-center'></div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
