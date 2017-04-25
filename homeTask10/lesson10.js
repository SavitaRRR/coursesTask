
function Goods(name,type,price,date){
	this.name = name;
	this.type = type;
	this.price = price;
	this.date = date;
	this.id = 1;
	
}
function prodGoods(godenDO){
	this.godenDO = godenDO;
	Goods.apply(this, arguments);
	Object.defineProperty(this, "srokHran", {
    get: function() {
      return this.srokHran;
    }
  });
}


prodGoods.prototype = new Goods();
var goden = new prodGoods ("23/23/22","Ножницы","Концелярские",4220,"22/01/2017");
//goden.srokHran = 23;
console.log(goden);

