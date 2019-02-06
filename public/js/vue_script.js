/*function MenuItem(image, name, kCal, allergenes, desc) {
  this.img = image;
  this.name = name;
  this.kCal = kCal + ' kCal';
  this.allergenes = allergenes;
  this.description = desc;
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
var bestImg = {
  src: "https://media.timeout.com/images/103343770/1372/772/image.jpg",
width: "350px",
height: "197px"
}
var chickenImg = {
  src: "https://93546-d-c.ooyala.com/content/images/1143/263141_1280x720.jpg",
width: "350px",
height: "197px"
}
var veggieImg = {
  src: "https://lindamccartneyfoods.co.uk/media/1227/mozzarella-14lb-burgers-product.jpg",
width: "350px",
height: "197px"
}
var cheesyImg = {
  src: "https://www.traegergrills.ca/on/demandware.static/-/Library-Sites-TraegerSharedLibrary/default/dw619d939d/images/recipes/20180811_Grilled-Triple-Cheeseburger_RE_HE_M.jpg",
width: "350px",
height: "197px"
}
var kidsImg = {
  src: "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1552de32-bb15-11e7-85ff-fb955b2fbca8.jpg?crop=1375%2C774%2C4%2C143&resize=685",
width: "350px",
height: "197px"
}
var bestBurger = new MenuItem(bestImg, "Best Burger Evah", "350", ["Gluten", "Lactose"], "Amazingly great");
var chickenBurger = new MenuItem(chickenImg, "Frickin' Chickin'", "300", ["Gluten"], "good");
var veggieBurger = new MenuItem(veggieImg, "Veggie Heaven", "300", ["Gluten"], "veg");
var cheesyBurger = new MenuItem(cheesyImg, "Cheesy Greasy Burger", "500", ["Gluten", "Lactose"], "cheesy");
var kidsBurger = new MenuItem(kidsImg, "Kid's Burger", "200", ["Gluten"], "small");
*/
var vm = new Vue ({
 el: '#burger',
 data: {
 burgers: food,

}
})

new Vue ({
  el:'#input',
  data: {
    result: this.result

  },
  methods: {
    markDone: function () {
      this.result = textFunc();
      console.log(this.result)
    }
  }

})
