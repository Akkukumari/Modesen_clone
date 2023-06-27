import axios from "axios";

export const getProducts = async (paramsObj) => {
  // const res = await axios.get("http://localhost:8080/products", paramsObj);
  const res = await axios.get("https://warm-uneven-neighbor.glitch.me/products", paramsObj);
  return res.data;
};
