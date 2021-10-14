let images =["Dice-1-b.svg",
"Dice-2a-b.svg",
"Dice-3a-b.svg",
"Dice-4-b.svg",
"Dice-5-b.svg",
"Dice-6-b.svg"
]
let dice = document.querySelector("img");
console.log(dice)

var count=10;

var counter=setInterval(function timer()
{
  count=count-1;
  if (count <= 0)
  { 
    
     clearInterval(counter);
     //counter ended, do something here 
     roll();
  }
  document.getElementById("count").innerHTML=count + " secs";
},1000)

function roll(){
    dice.classList.add("shake-dice");
    setTimeout(()=>{
      dice.classList.remove("shake-dice")

    },4000);
    setTimeout(()=>{
    let dieValue=Math.floor(Math.random()*6);
    document.querySelector("#die").setAttribute("src","assets/images/"+images[dieValue])
    
    },3500);   
   setTimeout(()=>{
     timer();  
     },5000)
}

