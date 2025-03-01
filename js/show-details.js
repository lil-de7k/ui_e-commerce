import { changeQuantity } from "./change-quantity.js";

let app = document.querySelector(".product-list");
function showDetails() {
  let main = document.getElementById("details");
  let contain = document.querySelector("#details .container");
  main.classList.add("active");

  contain.addEventListener("click", () => {
    main.classList.remove("active");

    let textQuantityAll = app.querySelectorAll(".quantity");
    textQuantityAll.forEach((textQuantity) => {
      let id = Number(textQuantity.getAttribute("data-id"));
      changeQuantity(app, id);
    });
  });
}

export { showDetails };
