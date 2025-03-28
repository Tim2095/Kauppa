import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import deleteLogo from "../assets/logo/mobile/delete-logo.png";
import { useDispatch } from "react-redux";
import { removeProduct } from "../reducer/cart-slice";

const Cart = () => {
  const products = useSelector((state) => state.cart.cartProducts);
  const location = useLocation();
  const dispatch = useDispatch()

  const paths = location.pathname.split("/").filter((path) => path);

  const breadcrumbLinks = paths.map((path, index) => {
    const routeTo = "/" + paths.slice(0, index + 1).join("/");
    return (
      <span key={routeTo}>
        <Link
          to={routeTo}
          className="hover:underline capitalize font-dmSans text-sm"
        >
          {decodeURIComponent(path.replace(/-/g, " "))}
        </Link>
        {index < paths.length - 1 && " > "}
      </span>
    );
  });

  const removeProductHandler = (id) => {
    dispatch(removeProduct(id))
  }

  return (
    <div className="p-4">
      <nav className="mb-4 text-gray-600">
        <Link to="/" className="hover:underline font-dmSans text-sm">
          Home
        </Link>
        {paths.length > 0 && " > "}
        {breadcrumbLinks}
      </nav>

      <div className="flex justify-between items-center mb-4">
        <h2 className="font-dmSans text-2xl font-bold">Your Cart</h2>
      </div>

      <div className="border rounded-xl px-3 py-1">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex border-b py-3  justify-between"
          >
            <div className="flex">
              <img
                src={product.img}
                alt="added product img"
                className="w-[100px] h-[120px] mr-3"
              />
              <div className="flex flex-col">
                <p className="font-dmSans text-base font-bold min-w-[100px]">
                  {product.name}
                </p>
                <div className="flex text-sm flex-col text-gray-600">
                  <p>Color: {product.color}</p>
                  <p>Size: {product.size}</p>
                </div>
              </div>
            </div>
            <button className="w-6 h-6 flex items-center justify-center" onClick={() => removeProductHandler(product.id)}>
              <img src={deleteLogo} alt="Delete" className="w-full h-full" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
