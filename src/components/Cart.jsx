import { Link, useLocation } from "react-router-dom";

const Cart = () => {

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
    <div>
      <nav className="mb-4 text-gray-600">
        <Link to="/" className=" hover:underline font-dmSans text-sm">
          Home
        </Link>
        {paths.length > 0 && " > "}
        {breadcrumbLinks}

        <div className="flex justify-between items-center">
          <h2 className="mt-3 font-dmSans bold text-2xl font-bold">Cart</h2>
        </div>
      </nav>
    </div>
  );
};

export default Cart;
