/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter
- Dilarang Menggunakan Loop
*/

function angkaTerbesar(sentence) {
	//code here
	if (sentence.length === 0) {
		return -1;
	} else if (sentence.length === 1) {
		return sentence[0];
	} else {
		let besar = angkaTerbesar(sentence.slice(1));
		if (sentence[0] > besar) {
			return sentence[0];
		} else {
			return besar;
		}
	}
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])); // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])); // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])); // 8
console.log(angkaTerbesar([])); // -1

console.log("");

/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 *
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
 * Output: x1x3x5x7x9xxxxx
 *
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 5. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
	//code here
	if (data === "") {
		return "";
	} else {
		if ((jenis === "ganjil" && data[0] % 2 === 0) || (jenis === "genap" && data[0] % 2 !== 0)) {
			return "x" + changeXRecursive(data.slice(1), jenis);
		} else {
			return data[0] + changeXRecursive(data.slice(1), jenis);
		}
	}
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x

console.log("");

/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
	//code here
	let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

	if (sentences.length === 0) {
		return 0;
	} else {
		if (
			sentences[0] === "a" ||
			sentences[0] === "A" ||
			sentences[0] === "e" ||
			sentences[0] === "E" ||
			sentences[0] === "i" ||
			sentences[0] === "I" ||
			sentences[0] === "o" ||
			sentences[0] === "O" ||
			sentences[0] === "u" ||
			sentences[0] === "U" ||
			sentences[0] === "0" ||
			sentences[0] === "1" ||
			sentences[0] === "2" ||
			sentences[0] === "3" ||
			sentences[0] === "4" ||
			sentences[0] === "5" ||
			sentences[0] === "6" ||
			sentences[0] === "7" ||
			sentences[0] === "8" ||
			sentences[0] === "9"
		) {
			return consonantCounterRecursive(sentences.slice(1));
		} else {
			if (sentences[0] === " ") {
				return 0 + consonantCounterRecursive(sentences.slice(1));
			} else {
				return 1 + consonantCounterRecursive(sentences.slice(1));
			}
		}
	}
}

console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); //10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3

console.log("");

/*
================
Recursive - Hanya Bilangan Terbagi Nol
================

dividableRecursive adalah sebuah function yang
menerima dua parameter berupa array dan num.
function akan mereturn sebuah sebuah number yang 
hanya sisa baginya nol dari bilangan num

[RULE]
- Wajib menggunakan recursive
- Dilarang menggunakan regex .match dan lainnya!
- Tidak boleh membuat variable diluar function
- Tidak boleh menambahkan parameter baru
- Tidak boleh menggunakan looping while/for    
*/

function dividableRecursive(array, num) {
	//code here

	if (array.length === 1 && array[0] % num === 0) {
		return array[0];
	} else if (array.length === 1 && array[0] % num !== 0) {
		return "";
	} else {
		if (array[0] % num === 0) {
			return array[0].toString() + " " + dividableRecursive(array.slice(1), num);
		} else {
			return dividableRecursive(array.slice(1), num);
		}
	}
}

// DRIVER CODE
console.log(dividableRecursive([66, 33, 55, 44, 11], 3)); // 66 33
console.log(dividableRecursive([123, 222, 100, 50, 32], 2)); // 222 100 50 32
console.log(dividableRecursive([125, 500, 201, 202, 66], 5)); // 125 500
console.log(dividableRecursive([66, 33, 55, 44, 132], 6)); // 66 132

console.log("");

/**
  Hapus Simbol Rekursif
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/

function hapusSimbolRec(str) {
	//code here
	let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	if (str === "") {
		return "";
	} else {
		if (
			str[0] === "a" ||
			str[0] === "b" ||
			str[0] === "c" ||
			str[0] === "d" ||
			str[0] === "e" ||
			str[0] === "f" ||
			str[0] === "g" ||
			str[0] === "h" ||
			str[0] === "i" ||
			str[0] === "j" ||
			str[0] === "k" ||
			str[0] === "l" ||
			str[0] === "m" ||
			str[0] === "n" ||
			str[0] === "o" ||
			str[0] === "p" ||
			str[0] === "q" ||
			str[0] === "r" ||
			str[0] === "s" ||
			str[0] === "t" ||
			str[0] === "u" ||
			str[0] === "v" ||
			str[0] === "w" ||
			str[0] === "x" ||
			str[0] === "y" ||
			str[0] === "z" ||
			str[0] === "0" ||
			str[0] === "1" ||
			str[0] === "2" ||
			str[0] === "3" ||
			str[0] === "4" ||
			str[0] === "5" ||
			str[0] === "6" ||
			str[0] === "7" ||
			str[0] === "8" ||
			str[0] === "9"
		) {
			return str[0] + hapusSimbolRec(str.slice(1));
		} else {
			return hapusSimbolRec(str.slice(1));
		}
	}
}

console.log(hapusSimbolRec("test4@aa")); //test4aa
console.log(hapusSimbolRec("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbolRec("ma@#k!an~")); // makan
console.log(hapusSimbolRec("coding")); // coding
console.log(hapusSimbolRec("1+3-5*2=100")); // 1352100

console.log("");

/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function palindromeRecursive(sentence) {
	//code here - saran bikin fungsi rekursif didalam sini
	//lalu bandingkan dengan sentence

	if (sentence.length <= 1) {
		return true;
	}

	if (sentence[0] !== sentence[sentence.length - 1]) {
		return false;
	} else {
		return palindromeRecursive(sentence.slice(1, -1));
	}
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false

console.log("");

/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
	//code here
	const convertStr = equation.toString();

	if (equation % 10 === 0) {
		return convertStr;
	} else if (convertStr.length === 1) {
		return convertStr;
	} else {
		let addingZero = convertStr[0];
		while (addingZero.length < convertStr.length) {
			addingZero += "0";
		}
		return addingZero + "+" + parseNumber(convertStr.slice(1));
	}
}

console.log(parseNumber(3333)); // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3

console.log("");

/* 
Budi ingin menyusun batu bata dengan ukuran yang sama sampai membentuk piramid 2 dimensi
Jika piramid bertingkat 1, Budi hanya memerlukan 1 batu bata
  B
Jika piramid bertingkat 2, Budi memerlukan 3 batu bata
  B
 B B
Jika piramid bertingkat 3, Budi memerlukan 6 batu bata
  B
 B B
B B B 
Jika piramid bertingkat 4, Budi memerlukan 10 batu bata
   B
  B B
 B B B 
B B B B
​
Di setiap tingkat bertambah 1 batu bata dibanding tingkatan diatasnya
​
Buatlah function piramid (n) yang memberitahu berapa jumlah batu bata yang diperlukan untuk membuat piramid bertingkat n.
​
[RULES]
  1. Wajib menggunakan RECURSIVE.
  2. Dilarang membuat function tambahan selain function piramid.
  3. Dilarang menambah parameter function.
*/

function piramid(n) {
	//code here
	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else {
		return n + piramid(n - 1);
	}
}

// console.log(piramid()) // 0
console.log(piramid(0)); // 0
console.log(piramid(1)); // 1
console.log(piramid(2)); // 3
console.log(piramid(3)); // 6
console.log(piramid(4)); // 10
console.log(piramid(5)); // 15
console.log(piramid(6)); // 21
console.log(piramid(100)); // 5050
console.log(piramid(888)); // 394716

console.log("");

/**
Virus Check Recursive
---------------------
Implementasikan function `virusCheckRecursive` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `virus` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  virus: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  virus: 'h|r' ==> berarti mencari h dan r

outuput: 3


RULES:
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function virusCheckRecursive
  - Dilarang mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - Dilarang menambahkan function di luar maupun di dalam function virusCheckRecursive

*/

function virusCheckRecursive(str, viruses) {
	//code here
	if (!viruses) {
		return "There is no virus";
	} else if (str.length === 0) {
		return 0;
	} else {
		if (viruses.includes(str[0].toLowerCase()) || viruses.includes(str[0].toUpperCase())) {
			return 1 + virusCheckRecursive(str.slice(1), viruses);
		} else {
			return virusCheckRecursive(str.slice(1), viruses);
		}
	}
}

console.log(virusCheckRecursive("qlD4MZax0raQqew", "x|0|q")); // 5
console.log(virusCheckRecursive("HH0NBP1zRa", "h|r")); // 3
console.log(virusCheckRecursive("4O4TmIF6ONaiMlzpXxPqwy", "4|X|p")); // 6
console.log(virusCheckRecursive("mjBgPlzks", "m")); // 1
console.log(virusCheckRecursive("AIn4Ks05bBaa", "x")); // 0
console.log(virusCheckRecursive("RsMFjBUjvIaP")); // There is no virus
console.log(virusCheckRecursive("")); // There is no virus

console.log("");

/*
===================================
Recursive Mastery : Number Iterator
===================================
Nama:________
[INSTRUCTION]
Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter num berupa number.
Buatlah dengan metode rekursif iterasi angka tersebut dari 0.
[EXAMPLE]
input: 5
output: 012345
input: 7
output: 01234567
[CONSTRAINTS]
Wajib menggunakan metode rekursif
Dilarang menggunakan sintaks for / while dan regex
*/
function numberIterator(num) {
	//code here
	if (num === 0) {
		return "0";
	} else {
		return numberIterator(num - 1) + num.toString();
	}
}
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'
