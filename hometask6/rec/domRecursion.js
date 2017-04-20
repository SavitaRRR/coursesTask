var nodes = 0, comments = 0 , tags= 0;
var element = document.documentElement;
var Nodes = function(e){
   if(e.nodeType == 3) nodes++;
    if(e.nodeType == 8) comments++;
    if(e.nodeType == 1) tags++;

    if(e.childNodes.length){
        for (var i = 0; i < e.childNodes.length; i++) {
            Nodes(e.childNodes[i]);
        }
    }
}
Nodes(element);
console.log("тегов: " + tags + ", комментариев: " + comments + ", текстовых узлов: " + nodes);