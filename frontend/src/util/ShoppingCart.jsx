// Non-exported functions
const itemExists = (product) => {
  const items = getItems();
  return items.some((item) => item.product.id === product.id);
};

const getItemId = (product) => {
  const items = getItems();
  return items.findIndex((item) => item.product.id === product.id);
};

// Exported functions
const getItems = () => {
  return JSON.parse(localStorage.getItem("shoppingCart")) || [];
};

const changeAmount = (product, change) => {
  let items = getItems();
  const index = getItemId(product);
  items[index].amount = items[index].amount + change;
  localStorage.setItem("shoppingCart", JSON.stringify(items));
};

const addItem = (product) => {
  if (itemExists(product)) {
    changeAmount(product, 1);
  } else {
    let items = getItems();
    items.push({ product: product, amount: 1 });
    localStorage.setItem("shoppingCart", JSON.stringify(items));
  }
};

const deleteItem = (product) => {
  const index = getItemId(product);
  let items = getItems();
  items.splice(index, 1);
  localStorage.setItem("shoppingCart", JSON.stringify(items));
};

const clearShoppingCart = () => {
  localStorage.setItem("shoppingCart", []);
};

const sCutils = {
  getItems,
  addItem,
  clearShoppingCart,
  changeAmount,
  deleteItem,
};
export default sCutils;
