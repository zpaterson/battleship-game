let location1 = 3, location2 = 4, location3 = 5;
let guess;
let guesses = 0;
let hits = 0, isSunk = false;

while(isSunk === false) {
  //once the prompt function obtains input from the user, it returns
  //the input as a string and assigns the input to the guess variable.
  guess = prompt("Ready, aim, fire! (enter a number between 0-6): ");

  //checks to make sure input for guess is a valid number between 0 and 6
  //if the input number is less than 0 or greater than 6, the input is invalid.
  if(guess < 0 || guess > 6) {
    alert("Please enter a valid number between 0 and 6!");
  }
  else {
    //if guess is a valid input then add one to the guesses variable (guesses = guesses + 1;)
    guesses += 1;

    //if the user's guess matches location1, location2, or location3,
    //add 1 to hits, otherwise don't do anything to hits.
    if(guess == location1 || guess == location2 || guess == location3) {
        alert("Hit!");
        hits += 1;

      if(hits === 3) {
        alert("You sank my battleship!");
        isSunk === true;

        //alert stats to user showing how many guesses it took them to sink the battleship
        // and their level of shooting accuracy based on their ratio of guesses to locations.
        let stats = "You took " + guesses + " guesses to sink the battleship, " +
                      "which means your shooting accuracy was " + Math.floor(((3/guesses) * 100)) + "%";
        alert(stats);
      }
    }
    else {
      alert("Miss!")
    }
  }
}
