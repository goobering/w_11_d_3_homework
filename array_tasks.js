var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(number) {
			return Math.pow(number, 2);
		});
	},

	sum: function (arr) {
		var sum = 0;
		arr.forEach(function(item){
		sum += item;
		});
		return sum;
	},

	findDuplicates: function (arr) {
		var duplicates = [];

		arr.forEach(function(item){
			var arrayCopy = arr;
			arrayCopy.splice(arrayCopy.indexOf(item), 1);
			if(arrayCopy.includes(item)){
				duplicates.push(item);
			}
		})
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		while(arr.includes(valueToRemove)){
			arr.splice(arr.indexOf(valueToRemove), 1);
		}	
		return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexes = [];
		var arrayCopy = arr;
		
		while(arrayCopy.includes(itemToFind)){
			var index = arrayCopy.indexOf(itemToFind);
			indexes.push(index);
			arrayCopy[index] = null;
		}
		return indexes;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var sum = 0;
		arr.forEach(function(item){
			if(item % 2 === 0){
				sum += Math.pow(item, 2);
			}
		});
		return sum;
	}

}

module.exports = arrayTasks
