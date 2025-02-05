import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getInitialProducts } from "./reducer/product-slice";
import productServices from "./services/product";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { useEffect } from "react";
import Casual from "./components/clothes-selection/Casual";
import HomePage from "./components/HomePage";

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)

    const fetchAllProducts = async () => {
      const products = await productServices.getAllProducts();
      dispatch(getInitialProducts(products));
    };
    fetchAllProducts();
  }, [dispatch, pathname]);

  return (
    <div className="container max-w-custom-container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="casual" element={<Casual />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
