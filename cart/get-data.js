import { changeCount } from "../js/change-count.js";
import { subTotal, total } from "./order-summary.js";
import { removeProduct } from "./remove-product.js";
import { changeLength } from "./shopping-cart.js";

function getDataInLocalStorage() {
  let getData = localStorage.getItem("products");

  if (getData) {
    handleData(JSON.parse(getData));
  }
}

let app = document.querySelector(".product-shopping-list");

function handleData(data) {
  app.innerHTML = data
    .map((item, index) => {
      let { id, title, img, price, quantity } = item;
      return `
        <li class="product-${id}">
          <figure class="figure-img">
            <img src="${img}" alt="" />
          </figure>
          <div class="feature-title">
            <h3>${title}</h3>
            <p>
              Price: <span class="price">${price}</span>$
            </p>
            <div class="incr-decr">
              <button class="increment" data-id="${id}">+</button>
              <p id="quantity-${id}" class="quantity" data-id="${id}">${quantity}</p>
              <button class="decrement" data-id="${id}">-</button>
            </div>
          </div>
          <button class="close-product" data-ion="${index}" data-id=${id}>
            <ion-icon name="close-outline" role="img" class="md hydrated"></ion-icon>
          </button>
        </li>
      `;
    })
    .join("");

  let closeProducts = document.querySelectorAll(".close-product");
  closeProducts.forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = +btn.getAttribute("data-ion");
      let id = +btn.getAttribute("data-id");
      removeProduct(id);
      subTotal();
      total();
      changeLength();
      changeCount();
    });
  });
}

export { handleData, getDataInLocalStorage };
