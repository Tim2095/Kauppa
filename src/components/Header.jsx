import { useState } from "react";
import { useSelector } from "react-redux";
import logoImg from "../assets/img/SHOP.CO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [searchedProduct, setSearchedProduct] = useState("");
  console.log(searchedProduct);
  const products = useSelector((state) => state.product);
  console.log(products);

  const filteredProducts = products.filter((product) => {
    if (searchedProduct) {
      return product?.name
        ?.toLowerCase()
        .startsWith(searchedProduct.toLowerCase());
    }
    return "";
  });
  console.log(filteredProducts);

  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="pl-4 pr-4 pt-6">
      <div className="flex items-center justify-between">
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
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          {isSearchOpen && (
            <div className="h-screen fixed inset-0 z-30 bg-opacity-80 bg-slate-800">
              <div className="w-full h-[7%] bg-red-300 flex items-center justify-between">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[80%] h-full"
                  onChange={(e) => setSearchedProduct(e.target.value)}
                />
                
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => setIsSearchOpen(false)}
                  className="z-30 relative "
                />
              </div>
              <div className="w-screen h-screen bg-white">
                {filteredProducts.map((product) => (
                  <h2 key={product.id}>{product.name}</h2>
                ))}
              </div>
            </div>
          )}
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      <div
        className={`fixed inset-0 transform transition-all duration-500 text-sm ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        <nav className="flex justify-center items-center flex-col h-full z-10 text-sm bg-white opacity-90">
          <ul className="font-bold space-y-7 text-center ">
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
    </header>
  );
};

export default Header;
