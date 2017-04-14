var arrname = ['Alex', 'Jacob' ,'Michael', 'Joshua','Matthew','Ethan','Andrew','Daniel','William',
'Joseph','Christopher', 'Anthony','Ryan','Nicholas','David','Tyler','James',
'John','Dylan','Nathan'];
var house = {
		amountFlat:72,
		arrayDwellers:[],
		Flat:[],
		addPeople: function(name,number){
			if(number<house.amountFlat){
				this.arrayDwellers.push({Name:name, NumberFlat: number});
				this.Flat[number].people.push(name);
			}else 
			{
				console.log('Неправильный номер квартиры');
			}	
		},
		outPeople: function(flat){
			if(flat<house.amountFlat){
				if(this.Flat[flat].people.length!=0){
					this.Flat[flat].people.forEach(function(e){
						console.log(e.name)
					})
				}
			}
		}
}
for (var i = 0 ; i< house.amountFlat; i++){
	house.Flat[i]={
			area: Math.floor(Math.random()*50),
			floor: Math.floor(i/4 + 1),
			people: []
	}
}
console.log(house.addPeople("Adam",54));
console.log(house.arrayDwellers);
console.log(house.outPeople(54));
console.log(house.Flat);