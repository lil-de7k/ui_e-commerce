function subTotal() {
  let getAllData = JSON.parse(localStorage.getItem("products")) || [];
  let textSub = document.querySelector(".sub-total span");

  let count = 0;
  getAllData.forEach((element) => {
    let subTotal = element.quantity * element.price;
    count += subTotal;
  });

  textSub.innerHTML = count;
}

function total() {
  let textSub = document.querySelector(".sub-total span");
  let shipping = document.querySelector(".shipping span");
  let sales = document.querySelector(".sales span");
  let total = document.querySelector(".total span");

  let totalValue =
    Number(Number(textSub.innerHTML) + Number(shipping.innerHTML)) -
    Number(sales.innerHTML);

  total.innerHTML = totalValue.toFixed(1);
}

export { subTotal, total };
