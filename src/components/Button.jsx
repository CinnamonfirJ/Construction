const Button = ({ text, type, link }) => {
  return (
    <div className=' flex justify-center items-center bg-coral-red border border-coral-red py-4 px-7 rounded-full text-white cursor-pointer font-montserrat font-medium hover:bg-white hover:text-coral-red transition ease-in duration-300'>
      <button type={type ? type : ""}>
        <a href={link ? link : ""}>{text}</a>
      </button>
    </div>
  );
};

export default Button;
