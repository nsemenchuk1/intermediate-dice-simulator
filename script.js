// Dice Simulator

// HTML Variables
let select = document.getElementById("select");
let roll = document.getElementById("roll");
let reset = document.getElementById("reset");
let history = document.getElementById("diceHistory");
let dice1img = document.getElementById("dice1img");
let dice2img = document.getElementById("dice2img");
let roll4 = document.getElementById("roll4");

// Event Listeners
roll.addEventListener("click", rollbtn);
reset.addEventListener("click", resetDice);
roll4.addEventListener("click", roll4btn);

function rollbtn() {
  if (select.value == "roll1") {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    clearInterval(timer1);
    clearInterval(timer2);
    dice1img.src = `images/${dice1}.png`;
    dice2img.src = `images/${dice2}.png`;
    history.innerHTML += `<span> ${dice1},${dice2}</span>`;
  } else if (select.value == "roll5") {
    let loop = 0;
    while (loop < 5) {
      let dice1 = Math.floor(Math.random() * 6 + 1);
      let dice2 = Math.floor(Math.random() * 6 + 1);
      clearInterval(timer1);
      clearInterval(timer2);
      dice1img.src = `images/${dice1}.png`;
      dice2img.src = `images/${dice2}.png`;
      history.innerHTML += `<span> ${dice1},${dice2}</span>`;
      loop++;
    }
  } else if (select.value == "rollX") {
    let numRolls = +prompt("How many rolls?");
    let loop = 0;
    while (true) {
      let dice1 = Math.floor(Math.random() * 6 + 1);
      let dice2 = Math.floor(Math.random() * 6 + 1);
      clearInterval(timer1);
      clearInterval(timer2);
      dice1img.src = `images/${dice1}.png`;
      dice2img.src = `images/${dice2}.png`;
      history.innerHTML += `<span> ${dice1},${dice2}</span>`;
      loop++;
      if (loop == numRolls) {
        break;
      }
    }
  } else if (select.value == "rollSum") {
    let sum = +prompt("Choose a number from 2-12");
    let loop = 0;
    while (true) {
      let dice1 = Math.floor(Math.random() * 6 + 1);
      let dice2 = Math.floor(Math.random() * 6 + 1);
      clearInterval(timer1);
      clearInterval(timer2);
      dice1img.src = `images/${dice1}.png`;
      dice2img.src = `images/${dice2}.png`;
      history.innerHTML += `<span> ${dice1},${dice2}</span>`;
      loop++;
      let combinedRoll = dice1 + dice2;
      if (combinedRoll == sum) {
        alert(`${loop} rolls to get sum of chosen numbers`);
        break;
      }
    }
  } else {
    let loop = 0;
    while (true) {
      let dice1 = Math.floor(Math.random() * 6 + 1);
      let dice2 = Math.floor(Math.random() * 6 + 1);
      clearInterval(timer1);
      clearInterval(timer2);
      dice1img.src = `images/${dice1}.png`;
      dice2img.src = `images/${dice2}.png`;
      history.innerHTML += `<span> ${dice1},${dice2}</span>`;
      loop++;
      if (dice1 == 1 && dice2 == 1) {
        alert(`${loop} rolls to get snake eyes`);
        break;
      }
    }
  }
}

function resetDice() {
  clearInterval(timer1);
  clearInterval(timer2);
  history.innerHTML = "";
  dice1img.src = `images/0.png`;
  dice2img.src = `images/0.png`;
  timer1 = setInterval(animateDice1, 200);
  timer2 = setInterval(animateDice2, 200);
}

function roll4btn() {
  if (select.value == "roll1") {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    let dice3 = Math.floor(Math.random() * 6 + 1);
    let dice4 = Math.floor(Math.random() * 6 + 1);
    dice1img.src = `images/${dice1}.png`;
    dice2img.src = `images/${dice2}.png`;
    clearInterval(timer1);
    clearInterval(timer2);
    history.innerHTML += `<span> ${dice1},${dice2},${dice3},${dice4}</span>`;
  } else if (select.value == "roll5") {
    let loop = 0;
    while (loop < 5) {
      let dice1 = Math.floor(Math.random() * 6 + 1);
      let dice2 = Math.floor(Math.random() * 6 + 1);
      let dice3 = Math.floor(Math.random() * 6 + 1);
      let dice4 = Math.floor(Math.random() * 6 + 1);
      dice1img.src = `images/${dice1}.png`;
      dice2img.src = `images/${dice2}.png`;
      clearInterval(timer1);
      clearInterval(timer2);
      history.innerHTML += `<span> ${dice1},${dice2},${dice3},${dice4}</span>`;
      loop++;
    }
  } else if (select.value == "rollX") {
    let numRolls = +prompt("How many rolls?");
    let loop = 0;
    while (true) {
      let dice1 = Math.floor(Math.random() * 6 + 1);
      let dice2 = Math.floor(Math.random() * 6 + 1);
      let dice3 = Math.floor(Math.random() * 6 + 1);
      let dice4 = Math.floor(Math.random() * 6 + 1);
      dice1img.src = `images/${dice1}.png`;
      dice2img.src = `images/${dice2}.png`;
      clearInterval(timer1);
      clearInterval(timer2);
      history.innerHTML += `<span> ${dice1},${dice2},${dice3},${dice4}</span>`;
      loop++;
      if (loop == numRolls) {
        break;
      }
    }
  } else if (select.value == "rollSum") {
    let sum = +prompt("Choose a number from 4-24");
    let loop = 0;
    while (true) {
      let dice1 = Math.floor(Math.random() * 6 + 1);
      let dice2 = Math.floor(Math.random() * 6 + 1);
      let dice3 = Math.floor(Math.random() * 6 + 1);
      let dice4 = Math.floor(Math.random() * 6 + 1);
      clearInterval(timer1);
      clearInterval(timer2);
      dice1img.src = `images/${dice1}.png`;
      dice2img.src = `images/${dice2}.png`;
      history.innerHTML += `<span> ${dice1},${dice2},${dice3},${dice4}</span>`;
      loop++;
      let combinedRoll = dice1 + dice2 + dice3 + dice4;
      if (combinedRoll == sum) {
        alert(`${loop} rolls to get sum of chosen numbers`);
        break;
      }
    }
  } else {
    let loop = 0;
    while (true) {
      let dice1 = Math.floor(Math.random() * 6 + 1);
      let dice2 = Math.floor(Math.random() * 6 + 1);
      let dice3 = Math.floor(Math.random() * 6 + 1);
      let dice4 = Math.floor(Math.random() * 6 + 1);
      dice1img.src = `images/${dice1}.png`;
      dice2img.src = `images/${dice2}.png`;
      clearInterval(timer1);
      clearInterval(timer2);
      history.innerHTML += `<span> ${dice1},${dice2},${dice3},${dice4}</span>`;
      loop++;
      if (dice1 == 1 && dice2 == 1 && dice3 == 1 && dice4 == 1) {
        alert(`${loop} rolls to get double snake eyes`);
        break;
      }
    }
  }
}

// Animation

let angle1 = 0;
let timer1 = setInterval(animateDice1, 200);

function animateDice1() {
  // choose random dice image
  let rand = Math.floor(Math.random() * 6 + 1);
  dice1img.src = `images/${rand}.png`;

  // rotate image
  angle1 += 10;
  dice1img.style.transform = `rotate(${angle1}deg)`;
}

let angle2 = 0;
let timer2 = setInterval(animateDice2, 200);

function animateDice2() {
  // choose random dice image
  let rand = Math.floor(Math.random() * 6 + 1);
  dice2img.src = `images/${rand}.png`;

  // rotate image
  angle2 += 10;
  dice2img.style.transform = `rotate(${angle2}deg)`;
}
