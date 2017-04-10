///////////////////////////////////////1zadanie//////////////////////////////////////////
/*var x = +prompt("Vvedite znachenie N ");
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
el.appendcountriesChild(table);*/

///////////////////////////2zadanie//////////////////////////////////////
/*var names = ["Афганистан", "Албания", "Алжир", "Андорра", "Ангола", "Антигуа и Барбуда", "Аргентина", "Армения", "Аруба", "Австралия", "Австрия", "Азербайджан","Болгария","Бразилия"];
var flag = ["img/afganistan.gif","img/albaniya.gif","img/algir.gif","img/andorra.gif","img/angola.gif","img/antigua.gif","img/argentina.gif","img/armeniya.gif","img/aruba.gif","img/avstraliya.gif","img/avstriya.gif","img/azerbaydgan.gif","img/bulgariya.gif","img/braziliya.gif"];
var population = ["33 369 945","2 886 026","40 375 954","85 470","25 830 958","92 738","43 131 966","2 998 600","104 263","25 308 000","8 773 686","9 730 500","7 202 198","205 739 452"];
var code = ["+93","+355","+21","+376","244","+1-268","+54","+374","+297","+61","+43","+994","+359","+55"];
var country = [];
for(var i =0; i < 14;i++){
	country[i]={};
	country[i].flag = flag[i];
	country[i].names = names[i];
	country[i].population = population[i];
	country[i].code = code[i];

}
console.log(country);
var tablica =document.createElement("table");
document.body.appendChild(tablica);
for(var i = 0; i < 14; i++){
	tr=document.createElement("tr");
	tablica.appendChild(tr);
	td=document.createElement("td");
	tr.appendChild(td);
	td.innerText = country[i].names;
	var td = document.createElement("td");
	tr.appendChild(td);
	td.innerText = country[i].population;
	var td = document.createElement("td");
	tr.appendChild(td);
	td.innerText = country[i].code;
	var td = document.createElement("td");
	tr.appendChild(td);
	var img = document.createElement("img");
	td.appendChild(img);
	img.setAttribute("src", country[i].flag);


}*/
//////////////////////////3 zadanie + ydalenie /////////////////////////////////////////
var names = ["Aлексей","Иван","Владимир","Олег","Андрей","Максим","Иван","Анна","Светлана","Анастасия","Ольга","Елена"];
var cities= ["Гродно","Витебск","Минск","Гомель","Брест","Могилев"];
var goods =[{
	img: "img/item.png",
	names: "Стул"},
	{
		img: "img/item2.png",
		names: "Стол"
	},
	{
		img : "img/item1.png",
		names : "Холодильник"
	},
	{
		img: "img/item3.png",
		names: "Компьютер"
	}]



var timerId = setTimeout(function tick() {
	randNames = Math.floor(Math.random() * names.length);
	randCity = Math.floor(Math.random()* cities.length);
	randGoods = Math.floor (Math.random()* goods.length);
	randGood = Math.floor(Math.random()*10+1);
	var el = document.getElementById("tbl");
	tr = document.createElement('tr');
	td = document.createElement('td');
	td.innerHTML = "<img src=" + goods[randGoods].img + ">";
	tr.appendChild(td);
 	td1 = document.createElement('td');
 	td1.innerHTML += names[randNames]+" из "+cities[randCity]+" купил "+randGood+"ед. товара:"+" "+goods[randGoods].names +"<br>"
  	tr.appendChild(td1);
  	td2 = document.createElement('td');
  	btn = document.createElement ("button");
  	btn.setAttribute("class","mybtn");
	btn.innerHTML = "X";
	td2.appendChild(btn);
	tr.appendChild(td2);
	el.appendChild(tr);
	btn.addEventListener("click",function(){
		this.parentNode.parentNode.remove();
	})
  timerId = setTimeout(tick, 3000);
}, 3000);
