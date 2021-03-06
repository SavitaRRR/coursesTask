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
		
		return document.createElementel(s);
	},
	remove: function(target,what){
		target.removeChild(what);
	},
	event: function(target,event,f){

		
		if(typeof trgt.attachEvent =="function"){
			trgt.attachEvent("on" + event, f);
		}else{
			trgt.addEventListener(event,f)
		}
	},
	unevent: function(target,event,f){
		
		if(typeof trgt.detachEvent =="function"){
			trgt.detachEvent("on" + event, f);
		}else{
			trgt.removeEventListener(event,f)
		}
	},
	dispatch: function(target,eT){
		var event = document.createEvent("Event");
		event.initEvent(eT);
		target.dispatchEvent(event);

	},
	width: function(e){
		return e.clientWidth;
	},
	height: function(e){
		return e.clientHeight;
	},
	pageTop: function(e){
		var offset = 0;
		while(e.offsetParent!= null){
			offset = e.offsetTop;
			e = e.offsetParent;
		}
		return offset;
	},
	pageLeft: function(e){
		var offset = 0;
		while(e.offsetParent!= null){
			offset = e.offsetLeft;
			e = e.offsetParent;
		}
		return offset;
	},
	css: function(e, property, value){
		if(arguments.length == 2){
			var style = window.getComputedStyle(e);
			return style[property];
		}
		if(arguments.length == 3){
			e.style[property] = value;
		}
	},
	Get:{
		byId: function(s){
			return document.getElementById(s);
		},
		bySelector: function(s){
			return document.querySelector(s);
		},
		bySelectorAll: function(s){
			return document.querySelectorAll(s);
		},
		byClass: function(s){
			return document.getElementsByClassName(s);
		},
		byTag: function(s){
			return document.getElementsByTagName(s);
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