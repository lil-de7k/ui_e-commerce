import { changeCount } from "./change-count.js";

let products;
let result = fetch("data.json")
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
            <button class="feature-btn" data-ion="${index}">Add To Cart</button>
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
}

let wishList = JSON.parse(localStorage.getItem("products")) || [];
function saveDataInLocalStorage(index) {
  let product = products[index];
  wishList.push(product);

  localStorage.setItem("products", JSON.stringify(wishList));
}
