const TableScore =JSON.parse( localStorage.getItem('TableScore'));
const BodyTable = document.getElementById("tableBody");

(function(){
    var row = 0;
    var classement = 1;
    var premier=2, deuxieme=1, troisieme=0;
    var tab1, tab2, tab3 ;
    
    TableScore.table.forEach(element =>{
        if(element.TableScore>= premier){
            troisieme=deuxieme;
            deuxieme=premier;
            premier= element.TableScore;

            tab3 = tab2;
            tab2 =tab1;
            tab1 = element;
        }
        else if(element.TableScore>= deuxieme){
            troisieme=deuxieme;
            deuxieme= element.TableScore;

            tab3 = tab2;
            tab2 = element;
        }
        else if(element.TableScore >= troisieme){
            troisieme = element.TableScore;
            tab3 = element;
        }
    });

    var tab ={"table" :[tab1, tab2, tab3]};

    tab.table.forEach(element => {
        var newLine = BodyTable.insertRow(row);
        row +=1;
        var newColumn0 = newLine.insertCell(0);
        var newColumn1 = newLine.insertCell(1);
        var newColumn2 = newLine.insertCell(2);
        var newColumn3 = newLine.insertCell(3);
        
        var position = document.createTextNode(classement);
        classement +=1;

        var name = document.createTextNode(element.Name);
        var jump = document.createTextNode(element.TableScore);
        var time = document.createTextNode(element.Time);

        newColumn0.appendChild(position);
        newColumn1.appendChild(name);
        newColumn2.appendChild(jump);
        newColumn3.appendChild(time);  
    })

    /* TableScore.table.forEach(element => {
        var newLine = BodyTable.insertRow(row);
        row +=1;
        var newColumn0 = newLine.insertCell(0);
        var newColumn1 = newLine.insertCell(1);
        var newColumn2 = newLine.insertCell(2);
        var newColumn3 = newLine.insertCell(3);

        var position = document.createTextNode(classement);
        classement +=1;

        var name = document.createTextNode(element.Name);
        var jump = document.createTextNode(element.TableScore);
        var time = document.createTextNode("00:05");

        newColumn0.appendChild(position);
        newColumn1.appendChild(name);
        newColumn2.appendChild(jump);
        newColumn3.appendChild(time);    
    }); */
})();