function getDataInLocalStorage() {
  let getData = localStorage.getItem("products");

  if (getData) {
    handleData(JSON.parse(getData));
  }
}

let app = document.querySelector(".product-list");

function handleData(data) {
  app.innerHTML = data
    .map((item) => {
      let { id, title, img, price, quantity } = item;
      return `
        <li class="product-${id}">
          <figure class="figure-img">
            <img src="${img}" alt="" />
          </figure>
          <div class="feature-title">
            <h3>${title}</h3>
            <p>
              Price: ${price}$
            </p>
            <p>
              quantity: ${quantity}
            </p>
          </div>
          <button class="close-product">
            <ion-icon name="close-outline" role="img" class="md hydrated"></ion-icon>
          </button>
        </li>
      `;
    })
    .join("");
}

getDataInLocalStorage();
