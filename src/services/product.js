const baseUrl = "/api/products";
import axios from "axios";

const getAllProducts = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (err) {
    console.log('Error fetching products', err)
    throw err;
  }
};

const getNewProducts = async () => {
  const response = await axios.get(`${baseUrl}/new-products`)

  return response.data
}

const getOneProduct = async (productId) => {
  const response = await axios.get(`${baseUrl}/${productId}`)
  return response.data
}

export default {
  getAllProducts, 
  getNewProducts,
  getOneProduct
}