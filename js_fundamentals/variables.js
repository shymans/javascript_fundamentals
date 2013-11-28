// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numberOfChildren = 3;
var partnersName = "Dominique";
var geographicLocation = "Toronto";
var jobTitle = "Junior Dev";
var fortuneTeller = "You will be a " + jobTitle + " in " + geographicLocation + " and married to " + partnersName + " with " + numberOfChildren + " kids.";
console.log(fortuneTeller);  

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2013;
var dateOfBirth = 1990;
var age = currentYear - dateOfBirth;
console.log("They are either " + age + " or " + (age - 1));

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 23;
var maxAge = 120;
var amountPerDay = 4;
var total = (maxAge - currentAge) * (amountPerDay * 365);
console.log("You will need " + total + " to last you until the ripe old age of " + maxAge);

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 10;
var circumference = Math.PI * 2 * radius;
console.log("The circumference is " + circumference);
var area = Math.PI * radius * radius;
console.log("The area is " + area);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 12;
var celsiusToFahrenheit = (celsius * 9) / 5 + 32;
console.log(celsius + "°C is " + celsiusToFahrenheit + "°F");
var fahrenheit = 64;
var fahrenheitToCelsius = ((fahrenheit - 32) * 5) / 9;
console.log(fahrenheit + "°F is " + fahrenheitToCelsius + "°C");

