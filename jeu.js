const nezuko = document.getElementById("nezuko");
const obstacle = document.getElementById("obstacle");
const score = document.querySelector('.score');

function jump (){
    if(nezuko.classList != "jump"){
        nezuko.classList.add("jump");

        setTimeout(function(){
            nezuko.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function(){
   //get current nezuko Y position
    let nezukoTop = parseInt(window.getComputedStyle(nezuko).getPropertyValue("top"));
   
    //get current obstacle X position
    let obstacleLeft = parseInt(
        window.getComputedStyle(obstacle).getPropertyValue("left"));
        
    //detect collision
    if(obstacleLeft <25 && obstacleLeft >-30 && nezukoTop >=200){
        //collision

        obstacle.style.animation="none";

         alert("You lose loser");

        console.log("collision");
    }

},10)

var keyPressCount = 0;
document.addEventListener("keydown",function (event){
    jump();
    keyPressCount++;
    console.log(keyPressCount);
    score.textContent = "Score : " + keyPressCount;
});


