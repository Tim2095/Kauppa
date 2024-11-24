import { useState } from "react";
import burgerButton from "../assets/icons/burger.png";
import searchLogo from "../assets/icons/search.png";
import logoImg from "../assets/img/SHOP.CO.png";
import closeImg from "../assets/icons/close.png";
import cartLogo from '../assets/icons/cart.png'
import profileLogo from '../assets/icons/profile.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {!isOpen && (
              <img
                className="z-40 cursor-pointer relative w-6 h-6"
                src={burgerButton}
                alt="Burger Menu"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
            {isOpen && (
              <img
                src={closeImg}
                alt=""
                className="z-30 relative w-6 text"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
            <a href="">
              <img src={logoImg} alt="main logo" />
            </a>
          </div>
          <div className='flex  gap-4'>
            <img src={searchLogo} alt="search logo" />
            <img src={cartLogo} alt="cart logo" />
            <img src={profileLogo} alt="profile logo" />
          </div>
        </div>
      }

      <div
        className={`fixed inset-0  transform transition-all duration-500 text-sm ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        <nav className="flex justify-center items-center flex-col h-full z-10 text-sm">
          <ul className="font-bold space-y-7">
            <li className="px-2 py-1 bg-emerald-300 flex justify-center rounded-sm">
              <a href="">Shop</a>
            </li>
            <li className="px-2 py-1 bg-emerald-300 flex justify-center rounded-sm">
              <a href="">On Sale</a>
            </li>
            <li className="px-2 py-1 bg-emerald-300 flex justify-center rounded-sm">
              <a href="">New Arrivals</a>
            </li>
            <li className="px-2 py-1 bg-emerald-300 flex justify-center rounded-sm">
              <a href="">Brands</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
