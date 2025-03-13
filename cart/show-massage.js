function showMassage(massa, productId) {
  let massage = document.querySelector(".massage");

  massage.classList.add("fade-in");
  massage.classList.remove("fade-out");
  massage.innerHTML = `${massa} product ${productId} in cart`;

  setTimeout(() => {
    massage.classList.remove("fade-in");
    massage.classList.add("fade-out");
  }, 1000);
}

export { showMassage };
