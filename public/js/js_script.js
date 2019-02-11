/* OLD CODE
function MenuItem(image, name, kCal, allergenes, desc) {
  this.img = image;
  this.name = name;
  this.kCal = kCal + ' kCal';
  this.allergenes = allergenes;
  this.description = desc;
  this.item = function() {
    return this.name + ' (' + this.kCal + ')';
  }
  this.hasAllergenes = function() {
      if (this.allergenes.includes("Lactose") || this.allergenes.includes("Gluten") ) {
    return true;
    }
  }
  this.showAllergenes = function() {
         if (this.hasAllergenes()) {
        return this.allergenes.toString();
        }
  }
}

var bestImg = document.createElement("img");
bestImg.src = "https://media.timeout.com/images/103343770/1372/772/image.jpg";
bestImg.style.width="350px";
var chickenImg = document.createElement("img");
chickenImg.src = "https://93546-d-c.ooyala.com/content/images/1143/263141_1280x720.jpg";
chickenImg.style.width="350px";
var veggieImg = document.createElement("img");
veggieImg.src = "https://lindamccartneyfoods.co.uk/media/1227/mozzarella-14lb-burgers-product.jpg";
veggieImg.style.width="350px";
veggieImg.style.height="197px";
var cheesyImg = document.createElement("img");
cheesyImg.src = "https://www.traegergrills.ca/on/demandware.static/-/Library-Sites-TraegerSharedLibrary/default/dw619d939d/images/recipes/20180811_Grilled-Triple-Cheeseburger_RE_HE_M.jpg";
cheesyImg.style.width="350px";
cheesyImg.style.height="197px";
var kidsImg = document.createElement("img");
kidsImg.src = "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1552de32-bb15-11e7-85ff-fb955b2fbca8.jpg?crop=1375%2C774%2C4%2C143&resize=685";
kidsImg.style.width="350px";

var bestBurger = new MenuItem(bestImg, "Best Burger Evah", "350", ["Gluten", "Lactose"], "Amazingly great");
var chickenBurger = new MenuItem(chickenImg, "Frickin' Chickin'", "300", ["Gluten"], "good");
var veggieBurger = new MenuItem(veggieImg, "Veggie Heaven", "300", ["Gluten"], "veg");
var cheesyBurger = new MenuItem(cheesyImg, "Cheesy Greasy Burger", "500", ["Gluten", "Lactose"], "cheesy");
var kidsBurger = new MenuItem(kidsImg, "Kid's Burger", "200", ["Gluten"], "small");*/
//CREATE SELECT BURGER

/*var burgers = food;
const insertBurger = function(parent, menuItem) {
  var div = document.createElement("div");
  var name = document.createElement("h3");
  var check = document.createElement("INPUT");
  var img = document.createElement("img");
  var list = document.createElement("ul");
  var desc = document.createElement("li");
  var kcal = document.createElement("li");

  name.innerHTML = menuItem.name;
  name.classList.add("burgerName");
  check.setAttribute("type", "checkBox");
  img.src = menuItem.image;
  img.className = "burgerImage";
  desc.innerHTML = menuItem.description;
  kcal.innerHTML = menuItem.kCal;

  list.appendChild(kcal);
  list.appendChild(desc);
  for (var i=0; i<menuItem.allergenes.length; i++){
    var allergy = document.createElement("li");
    allergy.innerHTML = menuItem.allergenes[i];
    list.appendChild(allergy);
  }

  div.appendChild(check);
  div.appendChild(name);
  div.appendChild(img);
  div.appendChild(list);

  parent.appendChild(div);
}

var grid = document.getElementById("burger-grid");

for (var i=0; i < burgers.length; i++)
{
  insertBurger(grid, burgers[i]);
}*/

var array = [];
var textFunc = function () {
  array = [];
  var fn = document.getElementById("fullname");
  var email = document.getElementById("email");
  //var street = document.getElementById("street");
  //var house = document.getElementById("house");
  var payment = document.getElementById("recipient");
  var selectedPayment = payment.options[payment.selectedIndex].text;
  var radio = document.getElementsByName("gender");


  array.push(fn.value, email.value, /*street.value, house.value,*/ selectedPayment);
  for (var i=0; i<radio.length; i++)
  {
    if (radio[i].checked)
    {
      array.push(radio[i].value);
      radio[i].checked = false;

    }
  }
  fn.value = "";
  email.value = "";
  
  return array;
}

var burgerList = [];
 var selectedBurgers = function() {
   burgerList = [];
   var check = document.getElementsByClassName("checkBox");

   for(var i=0; i<check.length; i++)
   {
     if(check[i].checked){
       burgerList.push(check[i].value);
     }
   }
   return burgerList;
 }
/*var orderButton = document.getElementById("placeOrder");
orderButton.addEventListener("click", textFunc);*/
/*console.log(bestBurger.img);
var images = [bestImg, chickenImg, veggieImg, cheesyImg, kidsImg];
console.log(bestBurger.name); //Output: Best Burger Evah

document.getElementById('myID').style.color = 'green';
document.getElementById('myID').style.backgroundColor = 'black';
document.getElementById("myID").innerHTML = burger.name;

var myElement = document.getElementById("wrapper");
for (var burger in burgers)
{
    var listItem = document.createElement("div");
    var listValue = document.createTextNode(burgers[burger].item() + ' - ' + burgers[burger].showAllergenes() );
    var imgItem = burgers[burger].img;
    listItem.appendChild(listValue);
	  myElement.appendChild(listItem);
    myElement.appendChild(imgItem);
 }*/
