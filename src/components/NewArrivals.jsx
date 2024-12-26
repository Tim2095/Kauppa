import { useEffect, useState } from "react";
import productService from "../services/product";

const NewArrivals = () => {
  const [showAllNewProducts, setShowAllNewProducts] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchNewProducts = async () => {
      const newProducts = await productService.getNewProducts();
      console.log(newProducts);
      setProducts(newProducts);
    };

    fetchNewProducts();
  }, []);

  return (
    <div>
      <h2 className="font-bold font-anton text-center mt-10 text-3xl mb-8">
        NEW ARRIVALS
      </h2>

      <div>
        <div
          className={`grid gap-4 ${
            showAllNewProducts
              ? "grid-cols-2"
              : "grid-cols-2 overflow-hidden h-64"
          }`}
        >
          {products.map((product) => (
            <div key={product.id} className="p-4 flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-48 h-48 object-cover rounded-xl"
              />
              <h1 className="mt-2 text-center">{product.name}</h1>
            </div>
          ))}
        </div>
        <div className="text-center px-4">
          <button
            onClick={() => setShowAllNewProducts(!showAllNewProducts)}
            className="w-full rounded-xl px-38 py-2 shadow-xl border-2 text-sm"
          >
            {showAllNewProducts ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
