import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productServices from "../services/product";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      const product = await productServices.getOneProduct(productId);
      setProduct(product);
    };

    getProduct();
  }, [productId]);

  return (
    <div className="mt-6 border-y mx-4">
      <div className="pt-10 ">
        <div>
          <img className="w-full" src={product.image} alt="" />
        </div>
        <div>
          <h3 className="font-anton text-2xl mt-4">{product.name}</h3>
          <p className="font-dmSans text-2xl font-bold">${product.price}</p>
          <p>{product.description}</p>

        </div>
      </div>
    </div>
  );
};

export default Product;
