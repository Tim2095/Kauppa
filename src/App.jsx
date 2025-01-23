import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInitialProducts } from "./reducer/product-slice";
import productServices from "./services/product";
import CustomerReview from "./components/CustomerReview";
import DressStyle from "./components/DressStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import NewArrivals from "./components/NewArrivals";
import SubscribeNews from "./components/SubscribeNews";
import { useEffect } from "react";
import Casual from "./components/clothes-selection/Casual";
import HomePage from "./components/HomePage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await productServices.getAllProducts();
      dispatch(getInitialProducts(products));
    };
    fetchAllProducts();
  }, [dispatch]);

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
