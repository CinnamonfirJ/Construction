import { logoFooter } from "../assets/images";
import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const Footer = () => {
  return (
    <section>
      <div className='flex justify-center items-center'>
        <div className=' grid grid-cols-4 max-lg:grid-cols-3 max-lg:gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 '>
          <div>
            <img src={logoFooter} alt='logo' width={180} />
            <p className=' text-white text-wrap mt-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              distinctio, consequuntur tenetur perspiciatis vitae omnis
              temporibus cumque? Optio, eaque sit!
            </p>
          </div>
          <div>
            <h3 className=' text-white text-xl font-montserrat font-bold mb-6'>
              Useful Resources
            </h3>
            {resourcesLinks.map((item) => (
              <p className=' link-text text-wrap'>{item.text}</p>
            ))}
          </div>
          <div>
            <h3 className=' text-white text-xl font-montserrat font-bold mb-6'>
              Useful Resources
            </h3>

            {platformLinks.map((item) => (
              <p className=' link-text text-wrap'>{item.text}</p>
            ))}
          </div>
          <div>
            <h3 className=' text-white text-xl font-montserrat font-bold mb-6'>
              Useful Resources
            </h3>

            {communityLinks.map((item) => (
              <p className=' link-text text-wrap'>{item.text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
