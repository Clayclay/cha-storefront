import axios from "axios";

var config = {
  headers: {'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Credentials': 'true'},  
};

export async function getProducts() {
  return await axios.get("http://localhost:9000/store/products",
  config);
}