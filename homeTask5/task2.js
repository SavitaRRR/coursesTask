
var names = ["Афганистан", "Албания", "Алжир", "Андорра", "Ангола", "Антигуа и Барбуда", "Аргентина", "Армения", "Аруба", "Австралия", "Австрия", "Азербайджан","Болгария","Бразилия"];
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


}