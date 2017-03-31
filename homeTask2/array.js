var n=Number(prompt("Vvedite znachenie N ="));
var s=Number(prompt("Vvedite znachenie S ="));
var p=Number(prompt("Vvedite znachenie P ="));
var percent,avr=0;
var arr=new Array(n);
percent=s*p/100;
var max = s+percent;
var min = s - percent;

//посчет границ и запись данных в массив
for (var i = 0; i < arr.length; i++){
	//arr[i]=(s-percent) + Math.round((Math.random()*(2*percent))*100)/100;
	arr[i]=Math.round((Math.random()*(max-min)+min)*100)/100;
}

//сортировка по возврастанию 
arr.sort(function(a,b){
	return a-b;
});


//среднее
for(var i = 0; i < arr.length; i++){
	avr+=arr[i];
}
avr=Math.round((avr/n)*100)/100;
console.log(arr.join(" ") +" "+ "Среднее равно: " + avr);
