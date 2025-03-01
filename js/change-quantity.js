function changeQuantity(parent, productId) {
  let getData = JSON.parse(localStorage.getItem("products")) || [];

  let product = getData.find((ele) => ele.id === productId);
  if (product) {
    let paragraph = parent.querySelector(`#quantity-${productId}`);
    paragraph.innerHTML = product.quantity;
  }
}

export { changeQuantity };
