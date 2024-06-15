import { Link } from "react-router-dom";
import { navItems } from "../constants";
import Button from "./Button";
import { close, hamburger } from "../assets/icons";
import { useState } from "react";
import { logo } from "../assets/images";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <header>
      <nav className=' flex justify-between items-center p-6 font-montserrat '>
        <div>
          <img src={logo} width={100} alt='' />
        </div>
        <div>
          <ul className=' flex justify-center items-center gap-8 max-lg:hidden'>
            {navItems.map((item) => (
              <li
                key={item.label}
                className='  hover:text-coral-red transition duration-300 ease-in'
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className=' max-lg:hidden'>
          <Button text='Get Quota' link={"/#contact"} />
        </div>

        <div onClick={toggleMenu} className=' cursor-pointer lg:hidden'>
          <img src={hamburger} width={25} />
        </div>

        <div
          className={`${
            mobileMenu ? "flex" : "hidden"
          } items-center flex-col fixed right-0 top-0 z-10 h-lvh bg-black text-white backdrop-blur-2xl `}
        >
          <div
            onClick={toggleMenu}
            className=' flex justify-end items-center w-full p-6 mt-6 cursor-pointer'
          >
            <img src={close} width={25} />
          </div>
          <ul className=' flex flex-col justify-center items-center gap-8 px-20'>
            {navItems.map((item) => (
              <li
                key={item.label}
                className='  hover:text-coral-red transition duration-300 ease-in'
              >
                <Link to={item.href} onClick={toggleMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
