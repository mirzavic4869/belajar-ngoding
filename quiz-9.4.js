/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
	// you can only write your code here!
	let faktor = [];
	for (let i = 0; i <= angka; i++) {
		if (angka % i === 0) {
			faktor.push(i);
		}
	}
	if (faktor.length === 1) {
		return 2;
	}

	let faktorMin = [];
	for (let i = 0; i <= faktor.length; i++) {
		for (let j = faktor.length - 1; j > 0; j--) {
			if (faktor[i] * faktor[j] === angka) {
				faktorMin.push(faktor[i].toString() + faktor[j].toString());
			}
		}
	}

	let digitMin = faktorMin[0].length;
	for (let i = 0; i < faktorMin.length; i++) {
		if (faktorMin.length === 1) {
			digitMin = faktorMin[i].length;
		} else if (digitMin < faktorMin[i].length) {
			return digitMin;
		} else {
			digitMin = faktorMin[i].length;
		}
	}
	return digitMin;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

console.log("");

//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
	// you can only write your code here!
	let k = [];
	for (let i = 0; i < str.length; i++) {
		k.push(str.charCodeAt(i) - 96);
	}

	let swapped;

	do {
		swapped = false;
		for (let i = 0; i < k.length; i++) {
			if (k[i] > k[i + 1]) {
				let temp = k[i];
				k[i] = k[i + 1];
				k[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);

	let alphabet = "";
	for (let i = 0; i < k.length; i++) {
		alphabet += String.fromCharCode(96 + k[i]);
	}

	return alphabet;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'

console.log("");

//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
	// you can only write your code here!

	let word = "";
	for (let i = 0; i < kalimat.length; i++) {
		word += kalimat[i].toUpperCase();
	}

	let change = "";
	for (let i = 0; i < word.length; i++) {
		if (kalimat[i] === word[i]) {
			change += kalimat[i].toLowerCase();
		} else {
			change += kalimat[i].toUpperCase();
		}
	}
	return change;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"

console.log("");

/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
	// you can only write your code here!
	let a = 0;
	let b = -1;
	for (let i = 0; i < num.length; i++) {
		if (num[i] === "a") {
			a = i;
		}
	}

	for (let i = 0; i < num.length; i++) {
		if (num[i] === "b") {
			b = i;
		}
	}

	if (b < 0) {
		return false;
	}

	if (Math.abs(a - b) >= 3) {
		return true;
	} else {
		return false;
	}
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
