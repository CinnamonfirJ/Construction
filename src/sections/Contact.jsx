const Contact = () => {
  return (
    <div>
      <div className=' flex flex-col justify-center items-center mb-12'>
        <h3 className=' text-4xl text-center  font-palanquin font-bold text-coral-red '>
          Contact Us
        </h3>
        <p className=' info-text'>Let's Get Started</p>
      </div>
      <div className=' flex justify-between  items-center max-lg:flex-col gap-6'>
        <div>
          <form
            action='#'
            className=' flex flex-col justify-center items-center '
          >
            <div className=' w-full'>
              <div>
                <input
                  type='text'
                  placeholder='FullName'
                  autoComplete='off'
                  required
                  className=' w-full p-3 border border-coral-red outline-none bg-transparent rounded-md text-xl my-3 text-black'
                />
              </div>
              <div>
                <input
                  type='email'
                  placeholder='Email'
                  autoComplete='off'
                  required
                  className=' w-full p-3 border border-coral-red outline-none bg-transparent rounded-md text-xl my-3 text-black'
                />
              </div>
              <div>
                <input
                  type='tel'
                  placeholder='Number'
                  autoComplete='off'
                  required
                  className=' w-full p-3 border border-coral-red outline-none bg-transparent rounded-md text-xl my-3 text-black'
                />
                <div className=' text-left text-[#d93025] -my-1 hidden'>
                  Number Can't be blank
                </div>
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Subject (Optional)'
                  autoComplete='off'
                  className=' w-full p-3 border border-coral-red outline-none bg-transparent rounded-md text-xl my-3 text-black'
                />
              </div>
              <textarea
                name=''
                id=''
                cols='50'
                rows='5'
                required
                placeholder='Message'
                className=' w-full p-3 border border-coral-red outline-none bg-transparent rounded-md text-xl my-3 text-black resize-none'
              ></textarea>
            </div>
            {/* <Button text={"Send"} type='submit' /> */}
            <button
              type='submit'
              className=' flex justify-center items-center bg-coral-red border border-coral-red py-4 px-7 rounded-full text-white cursor-pointer font-montserrat font-medium hover:bg-white hover:text-coral-red transition ease-in duration-300'
            >
              Submit
            </button>
            <div></div>
          </form>
        </div>
        <div className=' w-[600px] h-[400px] max-sm:w-[320px]'>
          <iframe
            width='100%'
            height='400'
            frameborder='0'
            // scrolling='no'
            marginheight='0'
            marginwidth='0'
            src='https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Plot%20293%20Daiki%20Biu,%20Jabi,%20Abuja%20900108,%20Federal%20Capital%20Territory+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          >
            <a href='https://www.gps.ie/'>gps trackers</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
