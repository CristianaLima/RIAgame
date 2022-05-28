const nezuko = document.getElementById("nezuko");
const obstacle = document.getElementById("obstacle");
const score = document.querySelector('.score');
const imgHero = JSON.parse(localStorage.getItem('Personnage'));
var vid = document.getElementById("game_sound");
vid.volume = 2;

function jump (){
    if(nezuko.classList != "jump"){
        nezuko.classList.add("jump");

        setTimeout(function(){
            nezuko.classList.remove("jump");
        }, 300);
    }
}

(function display_image(){
    var a = document.createElement("img");
    a.src = imgHero;
    a.width = 100;
    a.height = 100;
    nezuko.appendChild(a);
})();

let isAlive = setInterval(function(){
   //get current nezuko Y position
    let nezukoTop = parseInt(window.getComputedStyle(nezuko).getPropertyValue("top"));
   
    //get current obstacle X position
    let obstacleLeft = parseInt(
        window.getComputedStyle(obstacle).getPropertyValue("left"));
        
    //detect collision
    if(obstacleLeft <25 && obstacleLeft >-20 && nezukoTop >=170){
        //collision

        obstacle.style.animation="none";

         window.location.href="http://127.0.0.1:5500/alert_box.html";

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


