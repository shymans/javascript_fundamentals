// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2) {
  if (num1 > num2) {
    console.log("The greater number is " + num1);
  } else {
    console.log("the greater number is " + num2);
  }
}

greaterNum(4,12);
greaterNum(43,34);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(language) {
  if ( language === "fr" ) {
    console.log("Bonjour, Monde");
  } else if ( language === "en" ) {
    console.log("Hello, World");
  } else {
    console.log("Como, Estas");
  }
}
helloWorld("fr");
helloWorld("en");
helloWorld("es");

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score) {
  if ( score >= 80 ) {
    console.log("A");
  } else if ( 80 > score && score >= 70 ) {
    console.log("B");
  } else if ( 70 > score && score >= 60) {
    console.log("C");
  } else if ( 60 > score && score >= 50) {
    console.log("D");
  } else {
    console.log("F");
  }
}

assignGrade(85);
assignGrade(78);
assignGrade(92);
// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number) {
  if ( number === 1 && noun !== "sheep" && noun !== "geese") {
    console.log(number + " " + noun);
  } else if ( noun !== "sheep" && noun !== "geese" ) {
      console.log(number + " " + noun + "s");
  } else if ( noun === "sheep") {
      console.log(noun);
  } else if ( noun === "geese" ) {
      console.log(noun);
  } else {
      console.log("I don't know you");
  }
}

pluralize("basketball", 4);
pluralize("egg", 2);
pluralize("basket", 1);