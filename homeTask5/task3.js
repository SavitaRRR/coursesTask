<<<<<<< HEAD

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
	var el = document.getElementById("table");
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
=======

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
	var el = document.getElementById("table");
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
>>>>>>> b77113a1567883c67c8de6847bf050a4c488e882
