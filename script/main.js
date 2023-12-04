
// 
//function to show that your feedback is saved
function savemessage()
{
  var name = document.getElementById("form1").value ;
  var email = document.getElementById("form2").value;
  var password = document.getElementById("form3").value;

  if(name==="" || email==="" || password==="")
  {
    alert("Please fill all details");
    return;
  }
  else
  {
    alert("Thankyou for your feedback");
   document.getElementById("form1").value = "";
   document.getElementById("form2").value="";
   document.getElementById("form3").value="";
   return;
  }
  
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");
const bgNav = document.querySelector("header");
const navLink = document.querySelectorAll("a");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  bgNav.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  bgNav.classList.remove("active");
}

const shoes=[
  {id : 1, name : 'Skate Nike Dunk',price : 450 },
  {id : 2, name : 'Air Jordan 1 Transparent',price : 700 },
  {id : 3, name : 'Nike SB Dunk',price : 850 },
  {id : 4, name : 'Nike Air Jordan 3 Retro OG Black',price : 600 },
  {id : 5, name : 'Nike KD',price : 900 },
  {id : 6, name : 'Nike Air Max White',price : 750 }
];

let cart=[];
let totalprice=0;

function addtocart(shoeid)
{
  const selected = shoes.find(shoes => shoes.id === shoeid);
  if(selected)
  {
    cart.push(selected);
    totalprice += selected.price;
    
    alert("Your shoe has been added to cart");
    const btnelement = document.getElementsByClassName(`buy${shoeid}`);
    if(btnelement.length > 0){
      const first = btnelement[0];
      first.innerHTML ='Sold';
      first.disabled = true;
    }
    savetolocal();
  } 

}

function updatecart() {
  const cartTable = document.getElementById('cart-table');
  const totalSpan = document.getElementById('total-price');
  const cartItemsBody = document.getElementById('cart-items');
   console.log(cartItemsBody);
  cartItemsBody.innerHTML = " ";

  cart.forEach(item => {
      const row = cartItemsBody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);

      cell1.textContent = `${item.name}-` ;
      cell2.textContent = `$${item.price}`;
  });

  totalSpan.textContent = totalprice;
}

function savetolocal()
{
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('totalprice', totalprice);

}
function loadCartFromLocalStorage() {
  const storedCart = localStorage.getItem('cart');
  const storedTotalPrice = localStorage.getItem('totalprice');

  if (storedCart && storedTotalPrice) {
    cart = JSON.parse(storedCart);
    totalprice = parseInt(storedTotalPrice);
    updatecart();
  }
}
document.addEventListener('DOMContentLoaded', function () {
  loadCartFromLocalStorage();
});

function checkout(){
  const totalSpan = document.getElementById('total-price');
 alert(`Your order of $${totalSpan.textContent} has been placed...taking you to home page`);
 localStorage.clear();
 window.location = "/simpleshoestore/index.html";
  
}



