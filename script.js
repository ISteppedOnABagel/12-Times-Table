
// Creates a constant variable (one that doesnt change) and assigns it the value of 12
const multiplicant = 12;

// Declaring the product, text, and equation variable.
let head = "The "+ multiplicant +" Times Table<br><br>";
let product = 0;
let equation = "";
let text = "";



// For loop that prints the times table from 1 to 12
for (let i = 1; i <= 12; i++) {

// Calculates the product of the multiplicant and i
product = multiplicant * i;

// Creates the equation set up as a string
equation = multiplicant + " x " + i + " = " + product;

// Appends each equation to the text variable with a line break
text += equation + "<br>";
}

//Sets the title of the webpage to the times table being displayed
document.getElementById("Table").innerHTML = head;
// Outputs the final text to the HTML element with the id of "output"
document.getElementById("output").innerHTML = text;
