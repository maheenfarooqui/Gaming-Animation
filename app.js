const player1 = document.getElementById("img1");
const player2 = document.getElementById("img2");

const step = 40;

// initial positions
const p1 = { x: 0, y: 0 };
const p2 = { x: 0, y: 0 };

// movement limits
const limits = {
  minX: -200,
  maxX: 400,
  minY: -200,
  maxY: 100
};

// utility function
function movePlayer(player, pos) {
  player.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
}

document.addEventListener("keydown", (e) => {

  /* ================= PLAYER 1 ================= */
  if (e.key === "a" && p1.x > limits.minX) {
    p1.x -= step;
    player1.src = "assets/brian-walkback.gif";
  }

  if (e.key === "d" && p1.x < limits.maxX) {
    p1.x += step;
    player1.src = "assets/brian-walkforward.gif";
  }

  if (e.key === "w" && p1.y > limits.minY) {
    p1.y -= step;
    player1.src = "assets/brian-jump.gif";
  }

  if (e.key === "x" && p1.y < limits.maxY) {
    p1.y += step;
    player1.src = "assets/brian-crouch.gif";
  }

  movePlayer(player1, p1);

  /* ================= PLAYER 2 ================= */
  if (e.key === "ArrowLeft" && p2.x > limits.minX) {
    p2.x -= step;
    player2.src = "assets/rolento-walkback.gif";
  }

  if (e.key === "ArrowRight" && p2.x < limits.maxX) {
    p2.x += step;
    player2.src = "assets/rolento-walkforward.gif";
  }

  if (e.key === "ArrowUp" && p2.y > limits.minY) {
    p2.y -= step;
    player2.src = "assets/rolento-jump.gif";
  }

  if (e.key === "ArrowDown" && p2.y < limits.maxY) {
    p2.y += step;
    player2.src = "assets/rolento-crouch.gif";
  }

  movePlayer(player2, p2);
});

document.addEventListener("keyup", () => {
  player1.src = "assets/brianbattler-stance98.gif";
  player2.src = "assets/rolento-grn-taunt.gif";
});