const TableScore =JSON.parse( localStorage.getItem('TableScore'));
const BodyTable = document.getElementById("tableBody");
let show = false;

(function(){

    for(var i=1; i<TableScore.table.length; i++){
        var place =i;
        var echangeScore=TableScore.table[i].TableScore;
        var echangeName = TableScore.table[i].Name;
        var echangeTime = TableScore.table[i].Time;
        while(place!= -1){
            if(place== 0 || echangeScore < TableScore.table[place-1].TableScore){
                TableScore.table[place].TableScore = echangeScore;
                TableScore.table[place].Name = echangeName;
                TableScore.table[place].Time = echangeTime;

                place =-1;
            }
            else{
                TableScore.table[place].TableScore = TableScore.table[place-1].TableScore;
                TableScore.table[place].Name = TableScore.table[place-1].Name;
                TableScore.table[place].Time = TableScore.table[place-1].Time;

                place = place-1;
            }
        }
    }

    for(var i=1; i<4; i++){
        var newLine = BodyTable.insertRow(i-1);
        var newColumn0 = newLine.insertCell(0);
        var newColumn1 = newLine.insertCell(1);
        var newColumn2 = newLine.insertCell(2);
        var newColumn3 = newLine.insertCell(3);
        
        var position = document.createTextNode(i);

        var name = document.createTextNode(TableScore.table[i-1].Name);
        var jump = document.createTextNode(TableScore.table[i-1].TableScore);
        var time = document.createTextNode(TableScore.table[i-1].Time);

        newColumn0.appendChild(position);
        newColumn1.appendChild(name);
        newColumn2.appendChild(jump);
        newColumn3.appendChild(time); 
    }
})();

function showAll(){
    if(!show){
        for(var i=3; i<TableScore.table.length; i++){
            var newLine = BodyTable.insertRow(i);
            var newColumn0 = newLine.insertCell(0);
            var newColumn1 = newLine.insertCell(1);
            var newColumn2 = newLine.insertCell(2);
            var newColumn3 = newLine.insertCell(3);
            
            var position = document.createTextNode(i+1);

            var name = document.createTextNode(TableScore.table[i].Name);
            var jump = document.createTextNode(TableScore.table[i].TableScore);
            var time = document.createTextNode(TableScore.table[i].Time);

            newColumn0.appendChild(position);
            newColumn1.appendChild(name);
            newColumn2.appendChild(jump);
            newColumn3.appendChild(time); 
        }
        show=true;
    }
}