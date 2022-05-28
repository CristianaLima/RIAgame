function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function play(){
  var test = document.getElementById('div3');
  var enfant = test.children;
  var id;
  if(enfant[0] == null){
    id = "/img/nezuko_walking.png"
  }
  else{
  id = enfant[0].getAttribute('id');
  }
  
  localStorage.setItem('Personnage', JSON.stringify(id));

  var name = document.getElementById('fname').value;
  
  localStorage.setItem('CurrentName', JSON.stringify(name));

}