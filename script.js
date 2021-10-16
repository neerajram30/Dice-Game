let images =["Dice-1-b.svg",
"Dice-2a-b.svg",
"Dice-3a-b.svg",
"Dice-4-b.svg",
"Dice-5-b.svg",
"Dice-6-b.svg"
]
let dice = document.querySelector("img");
var count=10;
var score=0;

var counter=setInterval(function timer()
{
  --count
  document.getElementById("count").innerHTML=count + " secs";
 if (count ===0)
   { 
      //clearInterval(counter);
     //counter ended, do something here
     document.getElementById("message").innerHTML=""
     roll();
     count=10;
   }
  },1000)  
  
 
function roll(){
     let dieValue=0;  
     dice.classList.add("shake-dice");

    setTimeout(()=>{
    dice.classList.remove("shake-dice");
    console.log(dieValue);
    dieValue=Math.floor(Math.random()*6);
    document.querySelector("#die").setAttribute("src","assets/images/"+images[dieValue])
  },9000);     
  setTimeout(()=>{

    var btn1=document.getElementById("btn-1");
    btn1.onclick=()=>{
     if(dieValue==0){
      score++;
      document.getElementById("score").innerHTML=score;
      document.getElementById("message").innerHTML="Your choice is correct"
    }
    else{
      document.getElementById("message").innerHTML="Your choice is wrong"
    }

  }
  var btn2=document.getElementById("btn-2");
   btn2.onclick=()=>{
     setTimeout(()=>{if(dieValue==1){
      score++;
      document.getElementById("score").innerHTML=score
      document.getElementById("message").innerHTML="Your choice is correct"
      
    }
    else{
    
      document.getElementById("message").innerHTML="Your choice is wrong"
      console.log(count)
    }},count*1000)
  }
  
  var btn3=document.getElementById("btn-3");
  btn3.onclick=()=>{
     setTimeout(()=>{if(dieValue==2){
       score++;
       document.getElementById("score").innerHTML=score
       document.getElementById("message").innerHTML="Your choice is correct"
      }
      else{
        document.getElementById("message").innerHTML="Your choice is wrong"
      }},1000)
    }
    var btn4=document.getElementById("btn-4");
    btn4.onclick=()=>{
      setTimeout(()=>{if(dieValue==3){
        score++;
        document.getElementById("score").innerHTML=score
        document.getElementById("message").innerHTML="Your choice is correct"
      }
      else{
        document.getElementById("message").innerHTML="Your choice is wrong"
      }},1000)
      
    }
    var btn5=document.getElementById("btn-5");
    btn5.onclick=()=>{
      setTimeout(()=>{if(dieValue==4){
        score++;
        document.getElementById("score").innerHTML=score
        document.getElementById("message").innerHTML="Your choice is correct"
      }
      else{
        document.getElementById("message").innerHTML="Your choice is wrong"
      }},1000)
    }
    var btn6=document.getElementById("btn-6");
    btn6.onclick=()=>{
      setTimeout(()=>{if(dieValue==5){
        score++;
        document.getElementById("score").innerHTML=score
        document.getElementById("message").innerHTML="Your choice is correct"
      }
      else{
        document.getElementById("message").innerHTML="Your choice is wrong"
      }},1000)
    }
    
  },9000)
  }  
  