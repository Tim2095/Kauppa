import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productServices from "../services/product";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../reducer/cart-slice";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  const [qti, setQti] = useState(1);
  
  const dispatch = useDispatch() 
  const products = useSelector(state => state.cart.cartProducts)
  


  const colors = [
    { name: "Red", code: "bg-red-500" },
    { name: "Blue", code: "bg-blue-500" },
    { name: "Green", code: "bg-green-500" },
  ];

  const sizes = [
    {
      name: "sm",
      code: "Small",
    },
    {
      name: "md",
      code: "Medium",
    },
    {
      name: "lg",
      code: "Large",
    },
    {
      name: "x-lg",
      code: "X-Large",
    },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0].code);
  const [selectSize, setSelectSize] = useState("");

  const addProductHandler = (productId, productName, productPrice, productDescription) => {
    const addedProduct = {
      id: productId, 
      name: productName, 
      price: productPrice, 
      description: productDescription,
      color: selectedColor,
      qti,
      size: selectSize
    }

    console.log(addedProduct)
    dispatch(addProduct({name: 't-paita'}))
  }

  useEffect(() => {

    const getProduct = async () => {
      const product = await productServices.getOneProduct(productId);
      setProduct(product);
    };

    getProduct();
  }, [productId]);

  return (
    <div className="mt-6 border-y mx-4 pb-4">
      <div className="pt-10 ">
        <div>
          <img className="w-full" src={product.image} alt="" />
        </div>
        <div>
          <h3 className="font-anton text-2xl mt-4 uppercase bold">
            {product.name}
          </h3>
          <p className="font-dmSans text-2xl font-bold mt-2 mb-2">
            ${product.price}
          </p>
          <p className="font-dmSans text-sm text-slate-500 mb-4 ">
            {product.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col  pb-3 pt-5 border-y">
        <p className="mb-4">Select Colors</p>
        <div className="flex gap-3 w-full justify-start items-start">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-12 h-12 ${
                color.code
              } rounded-full transition-transform transform hover:scale-105 flex items-center justify-center ${
                selectedColor === color.code
                  ? "border-black"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedColor(color.code)}
            >
              {selectedColor === color.code && (
                <span className="text-white font-bold">✔</span>
              )}
            </button>
          ))}
        </div>
      </div>
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
      <div className="flex items-center">
        <div className="bg-slate-100 text-xl py-2 px-6 inline-block rounded-full mt-6 mr-3 ">
          <button onClick={() => setQti(qti <= 1 ? 1 : qti - 1)}>-</button>
          <span className="mx-4">{qti}</span>
          <button onClick={() => setQti(qti + 1)}>+</button>
        </div>
        <div className="bg-black text-white text-sm py-2 px-8 inline-block rounded-full mt-6">
          <button onClick={() => addProductHandler(product.id, product.name, product.price, product.description)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
