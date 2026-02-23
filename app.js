var playerImg = document.getElementById("img1");
function jumPl(e){
    console.log(e);
    if(e.key === "s"){
       
        playerImg.src = "assets/brian-dumb-attack.gif"
     }
     else if(e.key === "z"){
       
        playerImg.src = "assets/brian-taunt.gif"
     }
     else if(e.key === "c"){
       
        playerImg.src = "assets/brian-walkforward.gif"
     }
    
}
document.addEventListener("keydown", jumPl);

var playerimg2 = document.getElementById("img2")
function jumPl2(e){
    console.log(e);
    if(e.key === "ArrowUp"){
       
        playerimg2.src = "assets/zero-dm.gif"
     }
     else if(e.key === "ArrowLeft"){
       
        playerimg2.src = "assets/zero-winpose.gif"
     }
     else if(e.key === "ArrowRight"){
       
        playerimg2.src = "assets/zero-attack1.gif"
     }
    
}
document.addEventListener("keydown", jumPl2);
