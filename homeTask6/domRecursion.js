/*
 var childNodes = document.getElementsByTagName("*");
 var i = 0, stop = childNodes.length, massElements = [],sumElements = 0,sumComment=0, sumNode = 0;

    (function recurs(){
   
    	massElements = childNodes[i].tagName;
   		if (childNodes[i].nodeType == 1) {
   			sumElements += 1;
   		}

    	i++;
    	console.log(massElements);
 		console.log("На странице находятся:"+sumElements + " тегов");

    	if(i < stop)setTimeout(recurs,0);
    }());
*/
function enumNodes(node) {
    while (node) {
        if (1 == node.nodeType) {
            alert('элемент ' + node.tagName);
        };
        enumNodes(node.firstChild);
        node = node.nextSibling;
    };
};
setTimeout(function(){
    enumNodes(document.documentElement);
}, 100);