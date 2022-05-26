/*querySelectorAll -------> sinon ça marche pas pour le deuxième perso*/
const fill = document.querySelector('.fill');
const empties = document.querySelector('.empty');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties){
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}

function dragStart(){
    this.className += 'hold';
    setTimeout(()=>(this.className='invisible'),0);
    console.log('start');
}

function dragEnd(){
    console.log('end');
    this.className='fill';
}

function dragOver(){
    
}