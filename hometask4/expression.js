var number ="+375(29)311-22-10";
var r = /(\+375)[\s\(]?([0-9]{2})[\)\s]?([0-9]{3})[\-]?([0-9]{2})[\-]?([0-9]{2})/
var x = number.match(r).slice(1);
console.log("Телефон:"+x.join(""));
