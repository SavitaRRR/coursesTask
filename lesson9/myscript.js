
var color = ["red","blue","green","yellow","black"];
var colorRand = Math.floor(Math.random() * color.length);
var table = document.createElement("table");
tbody = table.appendChild(document.createElement('tbody'));
var el = document.getElementById("table");
var count = 1;
for(var i = 0 ; i < 6;i++){
	var tr = document.createElement("tr");
	for(var j = 0 ; j<1;j++){
		td = document.createElement('td');
		td.innerHTML = count;
		tr.appendChild(td);
		td1 = document.createElement('td');
		input = document.createElement ('input');
		input.setAttribute('type','text');
		input.setAttribute('value',"");
		td1.appendChild(input);
		tr.appendChild(td1);
		td2 = document.createElement('td');
		btn1 = document.createElement ("button");
		btn1.setAttribute("class","mybtn");
		btn1.innerHTML = "Delete";
		tr.appendChild(td2);
		td2.appendChild(btn1);

		btn1.addEventListener("click",function(){
			this.parentNode.parentNode.remove();
		})
		count++;
	}
	
	tbody.appendChild(tr);
}
el.appendChild(table);

var drawBlock = document.getElementById("drawBlock")
var btn = document.getElementById("drawBtn");
var tr = el.getElementsByTagName("tr");
var td = el.getElementsByTagName("td")[1];

btn.addEventListener("click",function(){
	drawBlock.innerHTML = '';
	for(i = 0 ; i < tr.length;i++){
		var el = tr[i];
		var td = el.children[1];
		var div = document.createElement("div");
		div.setAttribute("class","myclass");
		div.style.height = td.children[0].value + "0px";
		drawBlock.appendChild(div);
		
	}
})

var add = document.getElementById("add");
add.addEventListener("click",function(){

	var table = document.querySelector("table"),
	tr = document.createElement('tr');
	table.appendChild(tr);
	td = tr.insertCell(0);
	td.innerHTML = count;
	tr.appendChild(td);
	td = tr.insertCell(1);
	var input = document.createElement("input");
	input.setAttribute('type','text');
	input.setAttribute('value',"");
	td.appendChild(input);
	td2 = document.createElement('td');
	btn1 = document.createElement ("button");
	btn1.setAttribute("class","mybtn");
	btn1.innerHTML = "Delete";
	tr.appendChild(td2);
	td2.appendChild(btn1);
	count++;
	btn1.addEventListener("click",function(){
		this.parentNode.parentNode.remove();
	})
	
})

