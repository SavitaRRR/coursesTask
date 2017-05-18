var body = document.getElementById("maindiv");

var arr = ["goods.json","goods1.json","goods2.json"];

var xhr = new XMLHttpRequest;
xhr.open("GET",arr[Math.floor(Math.random()*arr.length)],true);
xhr.onload=function(){
	dsp1 = JSON.parse(xhr.responseText);
	for(var i = 0; i < dsp1.length; i++){
		s = dsp1[i];
		div = document.createElement("div");
		img = document.createElement("img");
		h3 = document.createElement("h3");
		p = document.createElement("p");
		p1= document.createElement("p");
		p2=document.createElement("p");
			divform = document.createElement("div");
		inputNumber = document.createElement("input");
		inputNumber.setAttribute("type","number");
		inputNumber.setAttribute("value","");
		
		inputButton = document.createElement("button");
		inputButton.innerHTML = "+";
		(function(x){
		inputButton.addEventListener("click",function(){
			
			this.previousSibling.value=this.previousSibling.value*x.price;
		
					
			})
		})(s);
		img.setAttribute("src",dsp1[i].img);
		h3.innerHTML = dsp1[i].title;
		p.innerHTML = "Цена: "+dsp1[i].price;
		if(dsp1[i].Availability==true){
			p1.innerHTML = "Есть в наличии"
		}else{
			p1.innerHTML = "Нет в наличии"
		}
		p2.innerHTML = dsp1[i].description;

		divform.appendChild(inputNumber);
		divform.appendChild(inputButton);
		div.appendChild(img);
		div.appendChild(h3);
		div.appendChild(p);
		div.appendChild(p1);
		div.appendChild(p2);
		div.appendChild(divform);
		body.appendChild(div);
	}
	
}
xhr.send();

window.onscroll = function() {
	if (document.body.scrollHeight - window.innerHeight <= document.body.scrollTop) {
 	 	
		var loader = document.createElement("div");
		loader.className = "loading";
		loader.innerHTML = "Loading...";
		body.appendChild(loader);
		var xhr = new XMLHttpRequest;
		xhr.open("GET",arr[Math.floor(Math.random()*arr.length)],true);
		xhr.onload=function(){
			dsp1 = JSON.parse(xhr.responseText);
			for(var i = 0; i < dsp1.length; i++){
				s = dsp1[i];
		div = document.createElement("div");
		img = document.createElement("img");
		h3 = document.createElement("h3");
		p = document.createElement("p");
		p1= document.createElement("p");
		p2=document.createElement("p");
			divform = document.createElement("div");
		inputNumber = document.createElement("input");
		inputNumber.setAttribute("type","number");
		inputNumber.setAttribute("value","");
		
		inputButton = document.createElement("button");
		inputButton.innerHTML = "+";
		(function(x){
		inputButton.addEventListener("click",function(){
			
			this.previousSibling.value=this.previousSibling.value*x.price;
		
					
			})
		})(s);
		img.setAttribute("src",dsp1[i].img);
		h3.innerHTML = dsp1[i].title;
		p.innerHTML = "Цена: "+dsp1[i].price;
		if(dsp1[i].Availability==true){
			p1.innerHTML = "Есть в наличии"
		}else{
			p1.innerHTML = "Нет в наличии"
		}
		p2.innerHTML = dsp1[i].description;

		divform.appendChild(inputNumber);
		divform.appendChild(inputButton);
		div.appendChild(img);
		div.appendChild(h3);
		div.appendChild(p);
		div.appendChild(p1);
		div.appendChild(p2);
		div.appendChild(divform);
		body.appendChild(div);
			}

		}
		xhr.send();
	}
}
