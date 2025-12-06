// Creates a constant variable (one that doesnt change) and assigns it the value of 12
const multiplicant = 12;

// Declaring the product, text, and equation variable.
let head = "The " + multiplicant + " Times Table";
let product = "";
let equation = "";

// For loop that prints the times table from 1 to 12, it changes the value of i by 1 each time it loops: "i ++"
for (let i = 1; i <= 12; i++) {
  // Calculates the product of the multiplicant and i
  product += "= " + multiplicant * i + "<br>";

  // Creates the equation set up as a string, if i is less than 10 it adds a 0 before i for formatting

  if (i >= 10) {
    equation += multiplicant + " x " + i + "<br>";
  }
  else {
  equation += multiplicant + " x " + "0" + i + "<br>";
  }
}

//Sets the title of the webpage to the times table being displayed
document.getElementById("TableName").innerHTML = head;

// Outputs the equation and product to the webpage
document.getElementById("equation").innerHTML = equation;
document.getElementById("product").innerHTML = product;
