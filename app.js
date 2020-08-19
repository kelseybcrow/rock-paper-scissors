  let compChoice;


  function createCompChoice() {

    compChoice = Math.floor(Math.random() * 100);
    if (compChoice < 30) {
      compChoice = "rock"
    } else if (compChoice > 60) {
      compChoice = "paper";
    } else {
      compChoice = "scissors";
    }

  }

  function play(playerChoice) {

    createCompChoice();
    let elem = document.getElementById("phrase");
    let result = "";

  if (playerChoice === "rock") {
    if (compChoice === "scissors") {
      result = "You win!";
    } else if (compChoice === "paper") {
      result = "Welp, the computer won.";
    } else {
      result = "It's a tie.";
    }
  }

  if (playerChoice === "paper") {
    if (compChoice === "rock") {
      result = "You win!";
    } else if (compChoice === "scissors") {
      result = "Welp, the computer won.";
    } else {
      result = "It's a tie.";
    }
  }

  if (playerChoice === "scissors") {
    if (compChoice === "paper") {
      result = "You won!";
    } else if (compChoice === "rock") {
      result = "Welp, the computer won.";
    } else {
      result = "It's a tie.";
    }
  }

  elem.innerHTML = ` <h1 class="mt-5">${result}</h1>
  `;

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