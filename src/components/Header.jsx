import { useState } from "react";
import logoImg from "../assets/img/SHOP.CO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="w-6 flex items-center justify-center">
            {!isOpen && (
              <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(true)} />
            )}
            {isOpen && (
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setIsOpen(false)}
                className="z-30 relative "
              />
            )}
          </div>
          <a href="/">
            <img src={logoImg} alt="main logo" />
          </a>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      <div
        className={`fixed inset-0 transform transition-all duration-500 text-sm ${
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