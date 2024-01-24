/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
	// you can only write your code here!

	let pasanganX = [];
	let pasanganO = [];
	let jarak = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "o") {
			pasanganO.push(i);
		}
		if (arr[i] === "x") {
			pasanganX.push(i);
		}
	}

	for (let i = 0; i < pasanganO.length; i++) {
		for (let j = 0; j < pasanganX.length; j++) {
			if (jarak === 0) {
				jarak = Math.abs(pasanganO[i] - pasanganX[j]);
			} else {
				if (Math.abs(pasanganO[i] - pasanganX[j]) < jarak) {
					jarak = Math.abs(pasanganO[i] - pasanganX[j]);
				}
			}
		}
	}
	return jarak;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2

console.log("");
4;

/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
	// you can only write your code here!

	let array1 = [];
	let array2 = [];
	let array3 = [];
	let allArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
			array1.push(arr[i]);
		} else if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
			array2.push(arr[i]);
		} else {
			array3.push(arr[i]);
		}
	}
	allArray.splice(0, 0, array1, array2, array3);
	return allArray;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

console.log("");

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
	// you can only write your code here!
	let arr = [];
	let finalArr = [];
	// Sort
	animals = animals.sort();

	let panjang = animals.length;

	for (let i = 0; i < panjang; i++) {
		if (arr[animals[i][0]] === undefined) {
			arr[animals[i][0]] = [];
			arr[animals[i][0]].push(animals[i]);
		} else {
			arr[animals[i][0]].push(animals[i]);
		}
	}

	for (let key in arr) {
		finalArr.push(arr[key]);
	}

	return finalArr;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
