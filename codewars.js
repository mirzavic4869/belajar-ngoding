function expandedForm(num) {
	// Your code here
	let number = num % 10;
}

// TEST CASE
console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'

console.log("");

function comp(array1, array2) {
	//your code here
	let arraySqrt = [];
	for (let i = 0; i < array2.length; i++) {
		arraySqrt.push(Math.sqrt(array2[i]));
	}
	let array1Sort = array1.sort((a, b) => a - b);
	let arraySqrtSort = arraySqrt.sort((a, b) => a - b);
	let arrayDif = [];

	for (let i = 0; i < array1Sort.length; i++) {
		for (let j = 0; j < arraySqrtSort.length; j++) {
			if (array1Sort[i] === arraySqrtSort[j]) {
				arrayDif.push(arraySqrtSort[j]);
			}
		}

		// if (arrayDif.length !== 0) {
		// 	return false;
		// }
	}
	return arrayDif;
}
// TEST CASE

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])); // True
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 625, 25921, 361, 20736, 361])); // False

console.log("");

function persistence(num) {
	//code me
	if (num < 10) {
		return num;
	} else {
		let number = num.toString();
		let multiple = 1;
		for (let i = 0; i < number.length; i++) {
			multiple *= number[i];
		}

		if (multiple < 10) {
			return multiple;
		} else {
			return persistence(multiple);
		}
	}
}

// TEST CASE
console.log(persistence(39)); //3
console.log(persistence(999)); //4
console.log(persistence(4)); //0

console.log("");

function sortArray(array) {
	// Return a sorted array.
	for (let i = 0; i < array.length; i++) {}
}

console.log(sortArray([7, 1])); //[1, 7]
console.log(sortArray([5, 8, 6, 3, 4])); //[3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sumArray(array) {
	if (array === null || array === undefined) {
		return 0;
	} else if (array.length <= 2) {
		return 0;
	} else {
		let sortArr = array.sort((a, b) => a - b);
		let sumArr = 0;

		for (let i = 0; i < sortArr.length; i++) {
			sumArr += sortArr[i];
		}

		return sumArr - (sortArr[0] + sortArr[sortArr.length - 1]);
	}
}

console.log(sumArray([6, 2, 1, 8, 10])); //16
console.log(sumArray(null)); //0
console.log(sumArray([3, 5])); //0
console.log(sumArray([3])); //0
console.log(sumArray([])); //0

function howMuchILoveYou(nbPetals) {
	// your code
	if (nbPetals === 1 || nbPetals % 6 === 1) {
		return "I love you";
	} else if (nbPetals === 2 || nbPetals % 6 === 2) {
		return "a little";
	} else if (nbPetals === 3 || nbPetals % 6 === 3) {
		return "a lot";
	} else if (nbPetals === 4 || nbPetals % 6 === 4) {
		return "passionately";
	} else if (nbPetals === 5 || nbPetals % 6 === 5) {
		return "madly";
	} else if (nbPetals === 6 || nbPetals % 6 === 6 || nbPetals % 6 === 0) {
		return "not at all";
	}
}

// TEST CASE

console.log(howMuchILoveYou(7)); //"I love you"
console.log(howMuchILoveYou(17)); //"a lot"
console.log(howMuchILoveYou(384)); //"not at all"

let arr = [1, 2, 3];

let result = arr.reduce((n) => n);

console.log(result);

console.log("");

function findMultiples(integer, limit) {
	//your code here
	let array = [];

	for (let i = integer; i <= limit; i++) {
		if (i % integer === 0) {
			array.push(i);
		}
	}

	return array;
}

// TEST CASE
console.log(findMultiples(5, 25)); //[5, 10, 15, 20, 25]

function countSheeps(sheep) {
	// TODO

	return sheep.filter(Boolean).length;
}

console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true])); //17
console.log("");

function countPositivesSumNegatives(input) {
	// your code here

	if (input.length === 0 || input === null) {
		return [];
	} else {
		let positive = input?.filter((x) => x > 0);
		let negative = input?.filter((x) => x < 0);

		return [positive.length, negative?.reduce((a, b) => a + b, 0)];
	}
}

//TEST CASE
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // [10,-65]
console.log(countPositivesSumNegatives([])); // []

let array = [1, 2, 3];
let num = 1;

console.log(typeof (num + ""));
console.log(typeof num);

console.log("");

function repeats(arr) {
	//..
	let count = 0;
	let array = [];

	let sortArr = arr.sort((a, b) => a - b);

	for (let i = 0; i < sortArr.length; i++) {
		if (sortArr[i] !== sortArr[i + 1] && sortArr[i] !== sortArr[i - 1]) {
			array.push(sortArr[i]);
		}
	}

	// return array;
	return array.reduce((a, b) => a + b, 0);
}

//TEST CASE
console.log(repeats([4, 5, 7, 5, 4, 8])); //15
console.log(repeats([9, 10, 19, 13, 19, 13])); //19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); //12

console.log("");

function strCount(str, letter) {
	//code here
	if (str === "") {
		return 0;
	} else {
		let count = 0;

		for (let i = 0; i < str.length; i++) {
			if (str[i] === letter) {
				count++;
			}
		}

		return count;
	}
}
// TEST CASE
console.log(strCount("Hello", "o")); //1
console.log(strCount("Hello", "l")); //2
console.log(strCount("", "z")); //0

console.log("");

function well(x) {
	let total = x?.filter((count) => count === "good").length;

	if (total === 0 || total === undefined) {
		return "Fail!";
	} else if (total > 2) {
		return "I smell a series!";
	} else if (total === 1 || total === 2) {
		return "Publish!";
	}
}

// TEST CASE
console.log(well(["bad", "bad", "bad"])); // "Fail!"
console.log(well(["good", "bad", "bad", "bad", "bad"])); // "Publish!"
console.log(well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])); // "I smell a series!"
