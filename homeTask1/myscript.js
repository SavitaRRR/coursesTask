var a = prompt("Введите строку","");
var count= 0;
for (var i = 0;	i < a.length; i++) {
	if (a[i]=="(") {
		count++;
	}else if(a[i]==")")
	{
		count--;
	}
	if(count<0){
		break;
	}
}
if(count==0){
	alert('Skobki rasstavleni v nyjnom poryadke');
}else{
	alert('Skobki rasstavleni ne pravilno');
}