
function play(playerChoice) {

  let compChoice = "rock";
  let winner;
  let player;
  let comp;
  let draw;

  if (playerChoice === "rock") {
    if (compChoice === "scissors") {
      // winner = player;
      console.log("You win!");
    } else if (compChoice === "paper") {
      // winner = comp;
      console.log("Welp, the computer won.");
    } else {
      // winner = draw;
      console.log("It's a tie.");
      console.log(winner);
    }
  }

  if (playerChoice === "paper") {
    if (compChoice === "rock") {
      // winner = player;
      console.log("You win!");
    } else if (compChoice === "scissors") {
      // winner = comp;
      console.log("Welp, the computer won.");
    } else {
      // winner = draw;
      console.log("It's a tie.");
      console.log(winner);
    }
  }

  if (playerChoice === "scissors") {
    if (compChoice === "paper") {
      // winner = player;
      console.log("You won!");
    } else if (compChoice === "rock") {
      // winner = comp;
      console.log("Welp, the computer won.");
    } else {
      // winner = draw;
      console.log("It's a tie.");
      console.log(winner);
    }
  }

  // return winner;

}


play();













// function drawButtons() {

//   let template = ""
//   for (let i = 0; i < weapons.length; i++) {
//     const weapon = weapons[i];
//     template += `
//       <button type="button" class="btn btn-primary" onclick="speak('${weapon.name}')">${weapon.name}...</button>
//     `
//   }
//   template += '<button type="button" class="btn btn-info" onclick="random()">Random</button>'
//   document.getElementById("buttons").innerHTML = template

// }




// function speak(name) {

//   let elem = document.getElementById("phrase")
//   let weapon = weapons.find(a => a.name == name)
//   elem.style.color = weapon.color
//   elem.innerHTML = `
//   <img src="${weapon.img ? weapon.img : 'https://i.pinimg.com/originals/eb/bd/06/ebbd06c474eb0a1096c16991a441ad52.jpg'}" />
//   <h3>The ${weapon.name} says ${weapon.noise}</h3>
//   `

// }




// function random() {

//   let index = Math.floor(Math.random() * (weapons.length - 0.01))
//   let weapon = weapons[index]
//   speak(weapon.name)
// }



// drawButtons()