var now = new Date();
var day = now.getDate();
var m,s,h,hOst, mOst;
  //объект из завтрашней даты
  var tomorrow = new Date(Date.now());
  tomorrow.setDate(day+1);
  tomorrow.setHours(0);
  tomorrow.setMinutes(0);
  tomorrow.setSeconds(0);
  var diff = tomorrow - now; // разница в миллисекундах
  diff= Math.floor(diff/1000);//перевод в миллисекунды
  s = diff%60; // итоговое кол-во секунд
  mOst = Math.floor(diff/60);//общее число минут 
  m = mOst%60; // конечное кол-во минут
  if (mOst>60) {
  	h=Math.floor(mOst/60); // Итоговое кол-во часов до конца дня
  }
  console.log("До конца дня осталось:"+" Hours= " +h ,"Minutes= "+m," Seconds= " +s);
