let wishListData = JSON.parse(localStorage.getItem("products")) || [];

function wishListManage(products, index) {
  let singleProduct = products[index];

  let findProduct = wishListData.find((ele) => ele.id === singleProduct.id);
  if (findProduct) {
    wishListData = wishListData.map((el) =>
      el.id === singleProduct.id ? { ...el, quantity: el.quantity + 1 } : el
    );
  } else {
    wishListData.push({ ...singleProduct, quantity: 1 });
  }

  localStorage.setItem("products", JSON.stringify(wishListData));
}

export { wishListManage };
