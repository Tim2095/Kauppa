import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Casual = () => {
  const products = useSelector((state) => state.product);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
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
  );
};

export default Casual;
