var pizza = "Cheese";

if(pizza == "Cheese"){
    console.log("Your order is ready!");
}else{
    console.log("Someone else's order is ready");
}

// But what if we ordered more than 1 pizza?
var pizza1 = "Cheese";
var pizza2 = "Pepperoni";
var pizza3 = "Pineapple";

// How do we check all of thse pizzas?

var beingServed = "Pineapple";

if(beingServed == pizza1 || beingServed == pizza2 || beingServed == pizza3){
    console.log("Your order of " + beingServed + " pizza is ready.");
}else {
    console.log("Someone else's orders is being served.");
}

// But how do you get ALL of your orders? This way you will only get 1 pizza! That's terrible!

var pizzaOrder = [
    "Cheese",
    "Pepperoni",
    "Pineapple"
];

var beingServed = [
    "Sausage",
    "Cheese",
    "Chicken and Bacon",
    "Pepperoni",
    "Pineapple"
];

beingServed.forEach(function(pizza){
    for(var i = 0; i < pizzaOrder.length; i++){
        if(pizza == pizzaOrder[i]){
            console.log("Your",pizzaOrder[i],"pizza is ready!");
        }
    }
});