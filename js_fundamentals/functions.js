// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numberOfChildren, partnersName, geographicLocation, jobTitle) {
  var fortune = "You will be a " + jobTitle + " in " + geographicLocation + " , and married to " + partnersName + " with " + numberOfChildren + " kids.";
  console.log(fortune);
}

tellFortune(4, "Jess", "Windsor", "Accountant");
tellFortune(2, "Lisa", "Toronto", "Student");
tellFortune(6, "Michelle", "Chatham", "Banker");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(dateOfBirth) {
  var year = new Date().getFullYear();
  var age = year - dateOfBirth;
  console.log("You are either " + age + " or " + (age - 1));
}

calculateAge(1990);
calculateAge(1985);
calculateAge(1963);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay) {
  var maxAge = 120;
  var total = (amountPerDay * 365) * (maxAge - age);
  var answer = "You will need " + total + " to last you until the ripe old age of " + maxAge;
  console.log(answer);
}

calculateSupply(13, 2);
calculateSupply(46, 3);
calculateSupply(27, 1);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(radius) {
  var circumference = Math.PI * 2 * radius;
  console.log("The circumference is " + circumference);
}

function calcArea(radius) {
  var area = Math.PI * radius * radius;
  console.log("This area is " + area);
}

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius) {
  var toFahrenheit = (celsius * 9) / 5 + 32;
  console.log(celsius + "°C is " + toFahrenheit + "°F");
}

function fahrenheitToCelsius(fahrenheit) {
  var toCelsius = ((fahrenheit -32) * 5) / 9;
  console.log(fahrenheit + "°F is " + toCelsius + "°C");
}

