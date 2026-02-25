// const player1 = document.getElementById("img1");
// const player2 = document.getElementById("img2");

// const step = 40;

// // initial positions
// const p1 = { x: 0, y: 0 };
// const p2 = { x: 0, y: 0 };

// // movement limits
// const limits = {
//   minX: -200,
//   maxX: 400,
//   minY: -200,
//   maxY: 100
// };

// // utility function
// function movePlayer(player, pos) {
//   player.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
// }

// document.addEventListener("keydown", (e) => {

//   /* ================= PLAYER 1 ================= */
//   if (e.key === "a" && p1.x > limits.minX) {
//     p1.x -= step;
//     player1.src = "assets/brian-walkback.gif";
//   }

//   if (e.key === "d" && p1.x < limits.maxX) {
//     p1.x += step;
//     player1.src = "assets/brian-walkforward.gif";
//   }

//   if (e.key === "w" && p1.y > limits.minY) {
//     p1.y -= step;
//     player1.src = "assets/brian-jump.gif";
//   }

//   if (e.key === "x" && p1.y < limits.maxY) {
//     p1.y += step;
//     player1.src = "assets/brian-crouch.gif";
//   }

//   movePlayer(player1, p1);

//   /* ================= PLAYER 2 ================= */
//   if (e.key === "ArrowLeft" && p2.x > limits.minX) {
//     p2.x -= step;
//     player2.src = "assets/rolento-walkback.gif";
//   }

//   if (e.key === "ArrowRight" && p2.x < limits.maxX) {
//     p2.x += step;
//     player2.src = "assets/rolento-walkforward.gif";
//   }

//   if (e.key === "ArrowUp" && p2.y > limits.minY) {
//     p2.y -= step;
//     player2.src = "assets/rolento-jump.gif";
//   }

//   if (e.key === "ArrowDown" && p2.y < limits.maxY) {
//     p2.y += step;
//     player2.src = "assets/rolento-crouch.gif";
//   }

//   movePlayer(player2, p2);
// });

// document.addEventListener("keyup", () => {
//   player1.src = "assets/brianbattler-stance98.gif";
//   player2.src = "assets/rolento-grn-taunt.gif";
// });

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