var contextMenu = document.getElementById('menuLink').parentNode;
var doc = document.documentElement;

contextMenu.addEventListener('click', function(e){
	
	e.stopPropagation();

});
doc.addEventListener("contextmenu",function(e){
	e.preventDefault();
	contextMenu.style.display ="block";
	console.log(e.clientY + " " + e.clientX);
});
var links = contextMenu.getElementsByTagName("a");
for(var i = 0;i<links.length;i++){
	links[i].addEventListener("click",function(){
		alert(this.innerText);
	})
}