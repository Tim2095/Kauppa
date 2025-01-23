import { useDispatch, useSelector } from "react-redux";
import { getInitialProducts } from "./reducer/product-slice";
import productServices from './services/product'
import CustomerReview from "./components/CustomerReview";
import DressStyle from "./components/DressStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import NewArrivals from "./components/NewArrivals";
import SubscribeNews from "./components/SubscribeNews";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await productServices.getAllProducts()
      dispatch(getInitialProducts(products))
    }
    fetchAllProducts()
  
  }, [dispatch])
  


  return (
    <div className="container max-w-custom-container mx-auto">
      <Header />
      <MainSection />
      <NewArrivals />
      <DressStyle />
      <CustomerReview />
      <SubscribeNews />
      <Footer />
    </div>
  );
};

export default App;
