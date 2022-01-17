//create a random number for the treasure and the bomb
var treasureLocation = Math.floor(Math.random()*16)
var bombLocation = Math.floor(Math.random()*16)

//make sure the bomb and the treasure aren't the same number
if(treasureLocation === bombLocation){
  bombLocation = Math.floor(Math.random()*16)
}
console.log(treasureLocation, bombLocation)

//set the initial counter value
var counter = 10

const treasure = (location) => {
  counter = counter - 1
  document.getElementById("counter").innerHTML = `Counter: ${counter}`

  if(treasureLocation === location){
    document.getElementById("outcome").innerHTML = "You WIN! &#x1f308"
    document.getElementById("gameboard").innerHTML = ""
  }
  else if(bombLocation === location){
    document.getElementById("outcome").innerHTML = "Sorry, you lose &#x2620"
    document.getElementById("gameboard").innerHTML = ""
  }
  else if(treasureLocation !== location && bombLocation !== location){
    document.getElementById(location).innerHTML = "❤️"
  }
  else if(counter === 0){
    document.getElementById("outcome").innerHTML = "Sorry, you lose &#x2620"
    document.getElementById("gameboard").innerHTML = ""
  }
  document.getElementById(location).disabled = true
}
