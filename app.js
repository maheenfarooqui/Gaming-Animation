var player1 = document.getElementById("img1");
var player2 = document.getElementById("img2");
var pl1Position = 0;
var pl2Position = 0;
var minLimit = 0;
var maxLimit = window.innerWidth - 1300;
var frwLimit = window.innerWidth - 800;
var plMin = -300;



function moveUp(e) {
  if (e.key === "w") {
    player1.src = "assets/brian-dumb-attack.gif";
  } else if (e.key === "x") {
    player1.src = "assets/brian-taunt.gif";
  } else if (e.key === "ArrowUp") {
    player2.src = "assets/knife.gif";
  } else if (e.key === "ArrowDown") {
    player2.src = "assets/rolento-spin-hits.gif";
  }
}
document.addEventListener("keydown", moveUp);

function moveFwdr(e){
  if(e.key === "d"){
    if(pl1Position < frwLimit){
    pl1Position += 20;}

    player1.src="assets/brianbattler-stance98.gif"
    player1.style.transform = `translateX(${pl1Position}px)`;
  }
  if(e.key === "ArrowLeft"){
 if (pl2Position > plMin) {
    pl2Position -= 20;   
  }
  
    player2.src="assets/rolento-grn-taunt.gif"
    player2.style.transform = `translateX(${pl2Position}px)`;
  
}}
document.addEventListener("keydown", moveFwdr);

function moveBack(e){
  if(e.key === "a"){
   if(pl1Position > minLimit){pl1Position -= 20;}
    player1.src="assets/brianbattler-stance98.gif";
    player1.style.transform = `translateX(${pl1Position}px)`;
  }
  else if(e.key === "ArrowRight"){
   if(pl2Position < maxLimit){pl2Position += 20;}
    player2.src="assets/rolento-grn-taunt.gif"
    player2.style.transform = `translateX(${pl2Position}px)`;
  }
}
document.addEventListener("keydown", moveBack);