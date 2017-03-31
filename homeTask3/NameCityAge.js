var city = ["Гродно","Брест","Минск","Гомель","Витебск","Могилев"];
var firstName = ["Алеша", "Анастасия", "Анжелика", "Арсений", "Артем", "Вадим", "Валера", "Марина", "Игорь", "Женя", "Ольга"];
var h = +prompt("Vvedite kol-vo chelovek ");
var human = [];
for(var i = 0; i<h; i++){
	human[i]={};
	var randN = Math.floor(Math.random() * firstName.length);// случайный человек
	var randC = Math.floor(Math.random() * city.length); // случайный город
	var randA = Math.floor (Math.random() * 99);//случайный возраст 
	human[i].name = firstName[randN];
	human[i].city = city[randC];
	human[i].age = randA;
}

human.sort(function(a,b){
	return (a.age>b.age)?-1:1;
})
for(var i = 0 ; i < h; i++){
	document.write("Имя:"+human[i].name+ "&nbsp;&nbsp;&nbsp;&nbsp;"+" Город:"+human[i].city+"&nbsp;&nbsp;&nbsp;&nbsp;"+" Возраст:"+human[i].age +"<br>")
}