var timeFraction = 0,d = 3;
function easeIn(timeFraction, d){
  return Math.pow(timeFraction / d, 5);
}
var interval = setInterval(function(){
 	window.scrollBy(0,easeIn(timeFraction,d));
 	 timeFraction += 0.15;
 if ((window.innerHeight+window.scrollY) >=10000){
 	clearInterval(interval); 
 }
},50)
