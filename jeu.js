const nezuko = document.getElementById("nezuko");
const obstacle = document.getElementById("obstacle")

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
    if(obstacleLeft <80 && obstacleLeft >-20 && nezukoTop >=100){
        //collision

        console.log("collision");
    }

},10)

document.addEventListener("keydown",function (event){
    jump();
})