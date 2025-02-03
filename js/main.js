import { changeCount } from "./change-count.js";
import { generateDetails } from "./details-product.js";

let products;
fetch("data.json")
  .then((data) => data.json())
  .then((data) => {
    handleData(data);
    products = data;
  })
  .catch((error) => console.error(error));

let app = document.querySelector(".product-list");

function handleData(data) {
  app.innerHTML = data
    .map((item, index) => {
      let { id, title, img, price } = item;
      return `
        <li class="product-${id}">
          <div class="featured-book">
            <figure class="figure-img">
              <img src="${img}" alt="" />
            </figure>

            <div class="feature-title">
              <h3>${title}</h3>
              <p>
                Price: ${price}$
              </p>
            </div>
            <div class="btns">
              <button class="feature-btn" data-ion="${index}">Add To Cart</button>
              <button class="show-btn" data-ion="${id}">Show Details</button>
            </div>
          </div>
        </li>
      `;
    })
    .join("");

  let btns = document.querySelectorAll(".feature-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = Number(btn.getAttribute("data-ion"));
      saveDataInLocalStorage(index);
      changeCount();
    });
  });

  let showBtn = document.querySelectorAll(".show-btn");
  showBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = Number(btn.getAttribute("data-ion"));
      generateDetails(id);
      showDetails();
    });
  });
}

let wishList = JSON.parse(localStorage.getItem("products")) || [];
function saveDataInLocalStorage(index) {
  let product = products[index];
  wishList.push(product);

  localStorage.setItem("products", JSON.stringify(wishList));
}

function showDetails() {
  let main = document.getElementById("details");
  main.classList.add("active");

  main.addEventListener("click", () => {
    main.classList.remove("active");
  });
}
