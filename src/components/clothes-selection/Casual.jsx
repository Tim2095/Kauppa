import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Casual = () => {
  const products = useSelector((state) => state.product);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Casual;
