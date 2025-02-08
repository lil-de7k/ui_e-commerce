function changeQuantity(index) {
  let getData = JSON.parse(localStorage.getItem("products")) || [];

  let paras = document.querySelectorAll(".quantity");
  paras[index].innerHTML = `quantity: ${getData[index].quantity}`;
}

export { changeQuantity };
