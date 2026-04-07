let foods = [
 {
  name: "Pizza",
  price: 250,
  rating: "⭐4.5",
  img: "https://www.foodandwine.com/thmb/7cQ9bC4sH5tVf7Xv4HqE0J2tJwM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomato-and-mozzarella-pizza-11910150-2000-9c5c9b1c5f9b4bfa9f3bfc98b1c4d1f5.jpg"
 },

 {
  name: "Burger",
  price: 250,
  rating: "⭐4.5",
  img: "https://www.foodandwine.com/thmb/3u8y8R7FQm3pXoYhY1gY5Xg8C9o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/msg-smash-burger-recipe-8421858-2000-4c8a4d0c0b2a4b2b9e7a6c5a8f3c2d1.jpg"
 },

 {
  name: "Pasta",
  price: 250,
  rating: "⭐4.5",
  img: "https://www.cookwithkushi.com/wp-content/uploads/2021/03/white_sauce_pasta.jpg"
 },

 {
  name: "Sandwich",
  price: 250,
  rating: "⭐4.5",
  img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
 }
];
let cart = []
let total = 0

function displayFoods(){

 let container = document.getElementById("foodContainer")
 container.innerHTML=""

 foods.forEach((food,index)=>{

  let card = document.createElement("div")
  card.className="card"

  card.innerHTML = `
  <img src="${food.img}" width="200">
  <h3>${food.name}</h3>
  <p>${food.rating}</p>
  <p>₹${food.price}</p>
  <button onclick="addCart(${index})">Add to Cart</button>
  `

  container.appendChild(card)

 })

}



displayFoods()


function addCart(index){

 let item = foods[index]
 cart.push(item)

 total += item.price

 let li = document.createElement("li")
 li.innerText = item.name + " - $" + item.price

 document.getElementById("cartItems").appendChild(li)
 document.getElementById("total").innerText = total
}


function toggleCart(){
 document.getElementById("cart").classList.toggle("active")
}


function checkout(){

 if(total === 0){
  alert("Cart empty")
  return
 }

 alert("Payment Successful! Order placed")

 cart = []
 total = 0

 document.getElementById("cartItems").innerHTML = ""
 document.getElementById("total").innerText = 0
}


//update cart to add menu items as well
function updateCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

// Load cart when page opens
updateCart();


function searchFood(){

 let search = document.getElementById("search").value.toLowerCase()

 let cards = document.querySelectorAll(".card")

 cards.forEach(card => {

  let name = card.querySelector("h3").innerText.toLowerCase()

  if(name.includes(search)){
   card.style.display = "block"
  }
  else{
   card.style.display = "none"
  }

 })
 let cart = [];

function displayFoods(item) {
  cart.push(item);
  console.log(cart);
}
}