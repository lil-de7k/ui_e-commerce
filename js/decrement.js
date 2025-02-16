function decrement(productId) {
  let getData = JSON.parse(localStorage.getItem("products")) || [];

  let product = getData.find((ele) => ele.id === productId);
  if (product) {
    if (product.quantity > 1) {
      product.quantity--;
      localStorage.setItem("products", JSON.stringify(getData));
    }
  }
}

export { decrement };
