function changeCount() {
  let cart = document.querySelector(".cart span");
  let data = JSON.parse(localStorage.getItem("products")) || [];

  cart.innerHTML = data.length;
}

export { changeCount };
