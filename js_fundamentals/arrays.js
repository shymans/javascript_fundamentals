// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var myArray = ["blue", "orange", "yellow", "green"];
for ( var i = 0; i < myArray; i++ ) {
  var choice = i + 1
  var suffix;
  if (choice === 1) {
    suffix = "st";
  } else if (choice === 2) {
    suffix = "nd";
  } else if (choice === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  console.log("My " + choice + suffix + " choice is " + myArray[i]);
}
