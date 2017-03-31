var a=prompt("vvedite  1 znachenie",0);
var c=prompt("vvedite operaciy dlya vichesleniya");
var b=prompt("vvedite 2 znachenie",0);
var result;
if ((isNaN(a)==false)&&(isNaN(b)==false)) {

	switch(c) {
		case '+': alert(parseFloat(a) + parseFloat(b));break;
		case '-': alert(parseFloat(a) - parseFloat(b));break;
		case '*': alert(parseFloat(a) * parseFloat(b));break;
		case '/': result=(parseFloat(a) / parseFloat(b));
		if(isFinite(result)==false){
			alert("Neizvestnoe znachenie");
		}else{
			alert(+result.toFixed(3));
		};break;
		default : alert("Neizvestnaya operacia");
	}
}else {
	alert('Proverte pravilnost vvoda chisel');
}