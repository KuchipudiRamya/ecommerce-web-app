let products=[
{name:"Laptop",price:50000},
{name:"Phone",price:20000},
{name:"Headphones",price:2000}
];

let cart=JSON.parse(localStorage.getItem("cart"))||[];

document.getElementById("welcome").innerText=
"Welcome "+(localStorage.getItem("user")||"Guest");

showProducts();
showCart();

function showProducts(){

let html="";

products.forEach((p,index)=>{

html+=`
<div class="product">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${index})">
Add To Cart
</button>
</div>
`;
});

document.getElementById("products").innerHTML=html;
}

function addToCart(index){

cart.push(products[index]);

localStorage.setItem("cart",
JSON.stringify(cart));

showCart();
}

function showCart(){

let html="";

cart.forEach((item,index)=>{

html+=`
<p>
${item.name} - ₹${item.price}
<button onclick="removeCart(${index})">
Remove
</button>
</p>
`;
});

document.getElementById("cart").innerHTML=html;
}

function removeCart(index){

cart.splice(index,1);

localStorage.setItem("cart",
JSON.stringify(cart));

showCart();
}

function checkout(){

alert("Order Placed Successfully");

cart=[];

localStorage.setItem("cart",
JSON.stringify(cart));

showCart();
  }
