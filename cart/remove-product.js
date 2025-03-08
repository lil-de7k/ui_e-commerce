import { handleData } from "./get-data.js";

let getAllData = JSON.parse(localStorage.getItem("products")) || [];

function removeProduct(productId) {
  getAllData = getAllData.filter((ele) => ele.id !== productId);
  handleData(getAllData);
  localStorage.setItem("products", JSON.stringify(getAllData));
}

export { removeProduct };
