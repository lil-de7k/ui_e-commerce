function increment(productId) {
  let getData = JSON.parse(localStorage.getItem("products")) || [];

  let product = getData.find((ele) => ele.id === productId);
  if (product) {
    product.quantity++;
    localStorage.setItem("products", JSON.stringify(getData));
  }
}

export { increment };
