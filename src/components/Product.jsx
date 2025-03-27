import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productServices from "../services/product";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducer/cart-slice";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  const [qti, setQti] = useState(1);
  const dispatch = useDispatch();

  const colors = [
    { name: "Red", code: "bg-red-500" },
    { name: "Blue", code: "bg-blue-500" },
    { name: "Green", code: "bg-green-500" },
  ];

  const sizes = [
    { name: "sm", code: "Small" },
    { name: "md", code: "Medium" },
    { name: "lg", code: "Large" },
    { name: "x-lg", code: "X-Large" },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0].name); // Store color NAME
  const [selectSize, setSelectSize] = useState("");

  const addProductHandler = () => {
    const addedProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      color: selectedColor, // Now storing actual color name (e.g., "Red")
      qti,
      size: selectSize,
      img: product.image,
    };

    console.log(addedProduct);
    dispatch(addProduct(addedProduct));
  };

  useEffect(() => {
    const getProduct = async () => {
      const product = await productServices.getOneProduct(productId);
      setProduct(product);
    };

    getProduct();
  }, [productId]);

  return (
    <div className="mt-6 border-y mx-4 pb-4">
      <div className="pt-10">
        <img className="w-full" src={product.image} alt={product.name} />
        <h3 className="font-anton text-2xl mt-4 uppercase bold">{product.name}</h3>
        <p className="font-dmSans text-2xl font-bold mt-2 mb-2">${product.price}</p>
        <p className="font-dmSans text-sm text-slate-500 mb-4">{product.description}</p>
      </div>

      {/* Color Selection */}
      <div className="flex flex-col pb-3 pt-5 border-y">
        <p className="mb-4">Select Color</p>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-12 h-12 ${color.code} rounded-full hover:scale-105 flex items-center justify-center ${
                selectedColor === color.name ? "border-4 border-black" : ""
              }`}
              onClick={() => setSelectedColor(color.name)} // Store color name
            >
              {selectedColor === color.name && <span className="text-white font-bold">✔</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="border-y py-6">
        <p className="mb-4">Choose Size</p>
        {sizes.map((size) => (
          <button
            key={size.name}
            className={`py-1 px-3 m-1 rounded-full ${
              selectSize === size.code ? "bg-black text-white" : "bg-slate-100"
            }`}
            onClick={() => setSelectSize(size.code)}
          >
            {size.code}
          </button>
        ))}
      </div>

      {/* Quantity & Add to Cart */}
      <div className="flex items-center">
        <div className="bg-slate-100 text-xl py-2 px-6 inline-block rounded-full mt-6 mr-3">
          <button onClick={() => setQti(qti <= 1 ? 1 : qti - 1)}>-</button>
          <span className="mx-4">{qti}</span>
          <button onClick={() => setQti(qti + 1)}>+</button>
        </div>
        <button
          className="bg-black text-white text-sm py-2 px-8 rounded-full mt-6"
          onClick={addProductHandler}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
