var randomNumber1 = Math.ceil(Math.random() * 6 );

var randomNumber2 = Math.ceil(Math.random() * 6 );

dice();


console.log(randomNumber1);

function dice() {
   document.getElementById("a").src = "images/dice"+randomNumber1+".png";
  document.getElementById("b").src = "images/dice"+randomNumber2+".png";

}



if (randomNumber1 < randomNumber2 ) {
   document.querySelector("h1").textContent = "You lose";
}  else  { document.querySelector("h1").textContent = "You Win";}
