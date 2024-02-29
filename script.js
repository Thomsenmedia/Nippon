const open_menu = document.getElementById("open_menu");
const close_menu = document.getElementById("close_menu");
const menu = document.getElementById("burger_menu");
const addToBasket = document.getElementsByClassName("foodbox_addToBasket") [length];

//til at åbne og lukke kurven
const cart = document.getElementById("cart");
const cartWithItems = document.getElementById("cartWithItems");
const basket = document.getElementsByClassName("basketWindow") [0];
const close_basket = document.getElementById("close_basket");


//åbner burgermenuen når man trykker på ikonet
open_menu.onclick = visMenu;
function visMenu(){
   menu.style.display = "block";
   menu.style.animationName = "runIn";
   open_menu.style.animationName = "spinBm";
   open_menu.style.display = "none";
   close_menu.style.display = "inline";
}

//åbner burgermenuen når man trykker på ikonet
close_menu.onclick = lukMenu;
function lukMenu(){
   menu.style.animationName = "runOut";
   menu.style.display = "none";
   close_menu.style.animationName = "spinBm";
   close_menu.style.display = "none";
   open_menu.style.display = "inline";
}

//kode taget fra https://blog.stackfindover.com/products-quantity-counter/
function increaseCount(a, b) {
   var input = b.previousElementSibling;
   var value = parseInt(input.value, 10); 
   value = isNaN(value)? 0 : value;
   value ++;
   input.value = value;
 }
 // kode taget fra https://blog.stackfindover.com/products-quantity-counter/ - rettet lidt til
 function decreaseCount(a, b) {
   var input = b.nextElementSibling;
   var value = parseInt(input.value, 10); 
   if (value > 0) {
     value = isNaN(value)? 0 : value;
     value --;
     input.value = value;
   }
 }

 //virker kun med den første, tror man skal bruge noget forloop for at få det til at virke med alle
 addToBasket.onclick = føjTilKurven;
 function føjTilKurven(){
   cart.style.display = "none";
   cartWithItems.style.display = "inline";
}

//Får kurven til at åbne når man trykker på ikonet
cart.onclick = openCart;
function openCart(){
   basket.style.animationName = "runInBasket";
}
//Får kurven til at åbne når man trykker på ikonet efter man har tilføjet noget til kurven
cartWithItems.onclick = openCart;
function openCart(){
   basket.style.animationName = "runInBasket";
}
//får kurven til at lukke
close_basket.onclick = closeCart;
function closeCart(){
   basket.style.animationName = "runOutBasket";
}







