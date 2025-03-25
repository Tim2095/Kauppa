import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.cart.cartProducts);
  const location = useLocation();

  const paths = location.pathname.split("/").filter((path) => path);

  const breadcrumbLinks = paths.map((path, index) => {
    const routeTo = "/" + paths.slice(0, index + 1).join("/");
    return (
      <span key={routeTo}>
        <Link
          to={routeTo}
          className=" hover:underline capitalize font-dmSans text-sm"
        >
          {decodeURIComponent(path.replace(/-/g, " "))}
        </Link>
        {index < paths.length - 1 && " > "}
      </span>
    );
  });

  return (
    <div className="p-4">
      <nav className="mb-4 text-gray-600">
        <Link to="/" className=" hover:underline font-dmSans text-sm">
          Home
        </Link>
        {paths.length > 0 && " > "}
        {breadcrumbLinks}
        <div className="flex justify-between items-center">
          <h2 className="mt-3 font-dmSans bold text-2xl font-bold">
            Your Cart
          </h2>
        </div>
      </nav>

      <div className="border rounded-xl px-3">
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.color}</p>
            <p>{product.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
