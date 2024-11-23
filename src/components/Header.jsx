import { useState } from "react";
import burgerButton from "../assets/icons/burger.png";
import logoImg from "../assets/img/SHOP.CO.png";
import closeImg from "../assets/icons/close.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {
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
            <img src={logoImg} alt="" className="" />
          </a>
        </div>
      }

      <div
        className={`fixed inset-0  transform transition-all duration-500 text-sm ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        <nav className="flex justify-center items-center flex-col h-full z-10 text-sm">
          <ul className="font-bold space-y-4">
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">On Sale</a>
            </li>
            <li>
              <a href="">New Arrivals</a>
            </li>
            <li>
              <a href="">Brands</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
