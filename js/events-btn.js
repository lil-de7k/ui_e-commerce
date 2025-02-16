import { changeQuantity } from "./change-quantity.js";
import { increment } from "./increment.js";
import { decrement } from "./decrement.js";

function incrementQuantity() {
  let increments = document.querySelectorAll(".increment");
  increments.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = Number(btn.getAttribute("data-id"));
      increment(id);
      changeQuantity(id);
    });
  });
}

function decrementQuantity() {
  let decrements = document.querySelectorAll(".decrement");
  decrements.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = Number(btn.getAttribute("data-id"));
      decrement(id);
      changeQuantity(id);
    });
  });
}

export { incrementQuantity, decrementQuantity };
