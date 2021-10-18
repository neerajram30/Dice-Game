//Put images to array

let images = ["Dice-1-b.svg",
  "Dice-2a-b.svg",
  "Dice-3a-b.svg",
  "Dice-4-b.svg",
  "Dice-5-b.svg",
  "Dice-6-b.svg"
]
let dice = document.querySelector("img");
var count = 10;
var score = 0;

//Countdown
var counter = setInterval(function timer() {
  --count
  document.getElementById("count").innerHTML = " " + count + " sec";
  if (count === 0) {
    document.getElementById("message").innerHTML = ""
    count = 10;

    roll();
  }
}, 1000)

//Rolling diece

function roll() {
  let dieValue = 0;
  dice.classList.add("shake-dice");
  setTimeout(() => {
    dice.classList.remove("shake-dice");
    console.log(dieValue);
    dieValue = Math.floor(Math.random() * 6);
  }, 9000);
  //Shows different dice images based on random numbers 
  setTimeout(() => {
    document.querySelector("#die").setAttribute("src", "assets/images/" + images[dieValue])
  }, 18000)
  //Caputres button click and check if guess is correct
  setTimeout(() => {
    var btn1 = document.getElementById("btn-1");
    let button1 = document.querySelector("#btn-1");
    let button2 = document.querySelector("#btn-2");
    let button3 = document.querySelector("#btn-3");
    let button4 = document.querySelector("#btn-4");
    let button5 = document.querySelector("#btn-5");
    let button6 = document.querySelector("#btn-6");
    btn1.onclick = () => {
      document.getElementById("variable").innerHTML = 1;
      button1.style.backgroundColor = "grey"
      setTimeout(() => {
        if (dieValue == 0) {
          score++;
          document.getElementById("score").innerHTML = score;
          document.getElementById("message").innerHTML = "Your guess was correct!!"

        }
        else {
          document.getElementById("message").innerHTML = "Your guess was wrong!!"
        }
        button1.style.backgroundColor = "black"
      }, count * 1000)
      document.getElementById("message").innerHTML = ""

    }

    var btn2 = document.getElementById("btn-2");
    btn2.onclick = () => {
      document.getElementById("variable").innerHTML = 2;
      button2.style.backgroundColor = "grey"
      setTimeout(() => {
        if (dieValue == 1) {
          score++;
          document.getElementById("score").innerHTML = score
          document.getElementById("message").innerHTML = "Your guess was correct!!"
        }
        else {
          document.getElementById("message").innerHTML = "Your guess was wrong!!"

        }
        button2.style.backgroundColor = "black"
      }, count * 1000)
      document.getElementById("message").innerHTML = ""


    }


    var btn3 = document.getElementById("btn-3");
    btn3.onclick = () => {
      document.getElementById("variable").innerHTML = 3;
      button3.style.backgroundColor = "grey"
      setTimeout(() => {
        if (dieValue == 2) {
          score++;
          document.getElementById("score").innerHTML = score
          document.getElementById("message").innerHTML = "Your guess was correct!!"
        }
        else {
          document.getElementById("message").innerHTML = "Your guess was wrong!!"
        }
        button3.style.backgroundColor = "black"
      }, count * 1000)
      document.getElementById("message").innerHTML = ""


    }

    var btn4 = document.getElementById("btn-4");
    btn4.onclick = () => {
      document.getElementById("variable").innerHTML = 4;
      button4.style.backgroundColor = "grey"
      setTimeout(() => {
        if (dieValue == 3) {
          score++;
          document.getElementById("score").innerHTML = score
          document.getElementById("message").innerHTML = "Your guess was correct!!"
        }
        else {

          document.getElementById("message").innerHTML = "Your guess was wrong!!"

        }
        button4.style.backgroundColor = "black"
      }, count * 1000)
      document.getElementById("message").innerHTML = ""


    }

    var btn5 = document.getElementById("btn-5");
    btn5.onclick = () => {
      document.getElementById("variable").innerHTML = 5;
      button5.style.backgroundColor = "grey"
      setTimeout(() => {
        if (dieValue == 4) {
          score++;
          document.getElementById("score").innerHTML = score
          document.getElementById("message").innerHTML = "Your guess was correct!!"
        }
        else {
          document.getElementById("message").innerHTML = "Your guess was wrong!!"

        }
        button5.style.backgroundColor = "black"
      }, count * 1000)
      document.getElementById("message").innerHTML = ""


    }

    var btn6 = document.getElementById("btn-6");
    btn6.onclick = () => {
      document.getElementById("variable").innerHTML = 6;
      button6.style.backgroundColor = "grey"
      setTimeout(() => {
        if (dieValue == 5) {
          score++;
          document.getElementById("score").innerHTML = score
          document.getElementById("message").innerHTML = "Your guess was correct!!"
        }
        else {
          document.getElementById("message").innerHTML = "Your guess was wrong!!"
        }
        button6.style.backgroundColor = "black"
      }, count * 1000)
      document.getElementById("message").innerHTML = ""
    }

  }, 9000)
  document.getElementById("variable").innerHTML = " ";
}
