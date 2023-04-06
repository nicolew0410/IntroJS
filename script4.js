var ongoing = true
var myNumber = 384
while (ongoing = true){
  guessNumber()
}
function guessNumber() {
  var userGuess = prompt("Guess my number from 1 to 1000!")
  if(userGuess > myNumber) {
    alert("Your guess is bigger than my number.")
  } else if (userGuess < myNumber) {
    alert("Your guess is smaller than my number.")
  } else {
    alert("You got my number!")
    end()
  }
}