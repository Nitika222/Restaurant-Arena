// 🛒 Cart Array
let cart = [];

// ✅ Add to Cart Function
function displayFoods(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart ✅");
}
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  updateCart();
}

// 🔄 Update Cart UI
function updateCart() {
  let cartItems = document.getElementById("cartItems");
  let total = document.getElementById("total");

  cartItems.innerHTML = "";

  let totalPrice = 0;

  cart.forEach((item, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})">❌</button>
    `;

    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  total.innerText = "Total: ₹" + totalPrice;
}

// ❌ Remove Item
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// 🗑️ Clear Cart
function clearCart() {
  cart = [];
  updateCart();
}