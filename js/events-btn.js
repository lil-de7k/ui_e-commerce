import { changeQuantity } from "./change-quantity.js";
import { increment } from "./increment.js";
import { decrement } from "./decrement.js";

function incrementQuantity(parent) {
  let increments = parent.querySelectorAll(`.increment`);
  increments.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = Number(btn.getAttribute("data-id"));
      increment(id);
      changeQuantity(parent, id);
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
    });
  });
}

export { incrementQuantity, decrementQuantity };
