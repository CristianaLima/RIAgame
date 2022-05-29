const nezuko = document.getElementById("nezuko");
const obstacle = document.getElementById("obstacle");
const score = document.querySelector('.score');
const imgHero = JSON.parse(localStorage.getItem('Personnage'));
const currentname = JSON.parse(localStorage.getItem('CurrentName'))
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

        var score = JSON.parse(localStorage.getItem('TableScore'));
        console.log(score);
        
        if (score ==null){
            score = {
                "table" : [
                    {"Name":currentname, "TableScore": keyPressCount, "Time" : h+":"+mn+":"+s+":"+ms}
                ]
            }
        }
        else{
            score.table.push({"Name" : currentname, "TableScore" : keyPressCount, "Time" : h+":"+mn+":"+s+":"+ms});
        }
       


        console.log(score);
        localStorage.setItem('TableScore', JSON.stringify(score));

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


let sp = document.getElementsByTagName("span");

let h =0;
let mn = 0;
let s =0;
let ms = 0;

let timeout;

let estArrete = false;
(setInterval(update_chrono,100))();

/*La fonction update_chrono incrémente le nombre de millisecondes par 1 <==> 1*cadence = 100 */
function update_chrono(){
    ms+=1;
    /*si ms=10 <==> ms*cadence = 1000ms <==> 1s alors on incrémente le nombre de secondes*/
       if(ms==10){
        ms=1;
        s+=1;
       }
       /*on teste si s=60 pour incrémenter le nombre de minute*/
       if(s==60){
        s=0;
        mn+=1;
       }
       if(mn==60){
        mn=0;
        h+=1;
       }
       /*afficher les nouvelle valeurs*/
       sp[0].innerHTML=h+" h";
       sp[1].innerHTML=mn+" min";
       sp[2].innerHTML=s+" s";
       sp[3].innerHTML=ms+" ms";

  }






