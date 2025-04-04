import { changeQuantity } from "./change-quantity.js";
import { increment } from "./increment.js";
import { decrement } from "./decrement.js";
import { subTotal, total } from "../cart/order-summary.js";

let orderCard = document.querySelector(".order-card");

function incrementQuantity(parent) {
  let increments = parent.querySelectorAll(`.increment`);
  increments.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = Number(btn.getAttribute("data-id"));
      increment(id);
      changeQuantity(parent, id);

      if (orderCard) {
        subTotal();
        total();
      }
    });
  });
}

function decrementQuantity(parent) {
  let decrements = parent.querySelectorAll(".decrement");
  decrements.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = Number(btn.getAttribute("data-id"));
      decrement(id);
      changeQuantity(parent, id);

      if (orderCard) {
        subTotal();
        total();
      }
    });
  });
}

export { incrementQuantity, decrementQuantity };
