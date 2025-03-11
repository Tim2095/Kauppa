import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Gym = () => {
  const products = useSelector((state) => state.product);
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
      {/* Breadcrumb Navigation */}
      <nav className="mb-4 text-gray-600">
        <Link to="/" className=" hover:underline font-dmSans text-sm">
          Home
        </Link>
        {paths.length > 0 && " > "}
        {breadcrumbLinks}
        <div className="flex justify-between items-center">
          <h2 className="mt-3 font-dmSans bold text-2xl font-bold">Gym</h2>
        </div>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg"
              />
              <p className="mt-2 text-lg font-semibold">{product.name}</p>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gym;
