// Collect input from a user
const guessNumb = prompt("Guess a number...any number between 1 and 10.");

// Convert the input to a number

const correctNumb = parseInt(guessNumb);
// Use Math.random() and the user's number to generate a random number


if(correctNumb) {
   let newNumb = Math.floor(Math.random() * correctNumb) +1;  
// Create a message displaying the random number

alert(`Your new number is ${newNumb}!`)

   }else {
   alert("Please provide a new number. Try again!")
   }
