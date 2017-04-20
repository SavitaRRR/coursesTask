var Framework = {
	append : function(target,what){
		target.appendChild(what);

	},
	prepand:function(target,what){
		var first = target.childNodes[0];
		target.insertBefore(what,first);
	},
	replace: function(target,what){
		var pn = document.getElementById("div1");
		pn.parentNode.replaceChild(what,target);
	},
	create: function(s){
		var el = document.createElement(s);
		document.body.appendChild(el);
	},
	remove: function(target,what){
		var pn = document.getElementById("div1");
		pn.removeChild(what);
	},
	event: function(target,event,f){

		var trgt = document.getElementById(target);
		if(typeof trgt.attachEvent =="function"){
			trgt.attachEvent("on" + event, f);
		}else{
			trgt.addEventListener(event,f)
		}
	},
	unevent: function(target,event,f){
		var trgt = document.getElementById(target);
		if(typeof trgt.detachEvent =="function"){
			trgt.detachEvent("on" + event, f);
		}else{
			trgt.removeEventListener(event,f)
		}
	},
	dispatch: function(target,eT){
		var trgt = document.getElementById(target);
		var event = new Event (eT);
		
		f= function(){
			alert("Имитация");
		}
		if(typeof trgt.attachEvent =="function"){
			trgt.attachEvent("on" + eT, f);
			trgt.dispatchEvent(event);
		}else{
			trgt.addEventListener(eT,f);
			trgt.dispatchEvent(event);
		}

	}
}
div1 = document.getElementById("div1");
div2 = document.getElementById("div2");
//Framework.append(div1,div2);
//Framework.prepand(div1,div2);
//Framework.replace(div1,div2);
//Framework.create("div");
//Framework.remove(div1,div2);
//Framework.event("btn","click",function(e){
//	alert("Событие отработало")
//});
//Framework.unevent("btn","click",function(e){
//	alert("Событие отработало")
//});
//Framework.dispatch("btn","click");