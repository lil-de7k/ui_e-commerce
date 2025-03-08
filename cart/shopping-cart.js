import { changeCount } from "../js/change-count.js";
import { getDataInLocalStorage } from "./get-data.js";
import { subTotal, total } from "./order-summary.js";

getDataInLocalStorage();
changeCount();
subTotal();
total();

function changeLength() {
  let titleCart = document.querySelector(".title-cart span");
  let getAllData = JSON.parse(localStorage.getItem("products")) || [];

  titleCart.innerHTML = `(${getAllData.length})`;
}

changeLength();

export { changeLength };
