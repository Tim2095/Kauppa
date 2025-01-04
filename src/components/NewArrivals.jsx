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
            <div key={product.id} className="p-2 flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="w-48 h-48 object-cover rounded-xl"
              />
              <div className="h-[10%] text-base ">
                <h1 className="font-dmSans font-bold text-base">{product.name}</h1>
              </div>
              <div className="font-dmSans font-bold text-xl">
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center px-4 pb-4 mt-7">
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
