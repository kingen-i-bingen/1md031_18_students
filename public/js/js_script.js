/*function MenuItem(name, kCal, gluten, lactose) {
  this.name = name;
  this.kCal = kCal;
  this.gluten = gluten;
  this.lactose = lactose;
  this.name_kcal = function()  {
        return this.name + ' innehåller ' + this.kCal + ' kCal ';
    };
}

var menu =[]

var kycklingburgare = new MenuItem('Kycklingburgare',500, true, false);
console.log(kycklingburgare.name_kcal() );

var klassiker= new MenuItem('Klassiker',750, true ,false ;
console.log( klassiker.name_kcal() );

var veganburgare = new MenuItem('Veganburgare',600,true,false);
console.log( veganburgare.name_kcal() );

var halloumiburgare = new MenuItem('Halloumiburgare',650,true,true);
console.log( halloumiburgare.name_kcal() );

var baconburgare = new MenuItem('Baconburgare',800, true, false);
console.log(baconburgare.name_kcal() );

var burgers= [kycklingburgare,klassiker,veganburgare,halloumiburgare,baconburgare];
console.log(burgers);

var menuDiv = document.getElementById("menuBurger");
for (burger in burgers) {
  var burgerTitle = document.createElement("h5");
  var h5Value = document.createTextNode(burgers[burger].name);
  var image = document.createElement("img");
  img src="img/burgare1.jpg";

  burgerTitle.appendChild(h5Value);
  menuDiv.appendChild(burgerTitle);
  image.appendChild(h5Value);


}*/


var myButton = document.getElementById('orders');
myButton.addEventListener("click", testClick );

function testClick()
{
  console.log("Testing")
}
