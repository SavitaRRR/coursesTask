var x = +prompt("Vvedite znachenie N ");
var y = +prompt("Vvedite znachenie M ");
var table = document.createElement('table'),
tbody = table.appendChild(document.createElement('tbody'));
var el = document.getElementById("table");

for (var i = 0; i< x; i++){
	tr = document.createElement('tr');
	for(var j = 0; j< y;j++){
			td = document.createElement('td');
			tr.appendChild(td);
			td.innerHTML = (i+1) + "x" + (j+1) + "=" + (i+1)*(j+1) + " ";
			if(i==j){
				td.setAttribute("class","myclass");
			}
	}
	tbody.appendChild(tr);
}
el.appendChild(table);
