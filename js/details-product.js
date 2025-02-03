async function generateDetails(id) {
  let result = await fetch("data-details.json");
  let data = await result.json();

  let product = data.find((ele) => ele.id === id);
  handleData(product);
}

let details = document.querySelector(".details-list");
function handleData(data) {
  let { title, img, body, price, quantity } = data;
  details.innerHTML = `
      <li>
        <figure>
          <img src="${img}" alt="" />
        </figure>
        <div class="details-title">
          <h3>${title}</h3>
          <p>${body}</p>
          <span>Price: ${price}</span>
          <div class="quantity">
            <p>quantity: </p>
            <input type="text" value="${quantity}" />
          </div>
          <button>Add To Cart</button>
        </div>
      </li>
    `;
}

export { generateDetails };
