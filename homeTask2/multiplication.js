var n = +prompt("Vvedite stepen' mnogoclena \"N\""), x = +prompt("Vvedite koeficient \"X\"");
var arr = new Array(),sum=0;
for(var i = 0; i<=n; i++ ){
	arr[i]= +prompt("Vvedite a["+i+"]");
	sum+=arr[i]*Math.pow(x,i);
}
console.log("Массив состоящий из A[i]-элементов : " ,arr, "Сумма: ", sum);