//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
	// you can only write your code here!
	if (angka < 2) {
		return false;
	}
	let pembagi = 0;
	for (let i = 1; i <= angka; i++) {
		if (angka % i === 0) {
			pembagi++;
		}
	}
	if (pembagi === 2) {
		return true;
	} else {
		return false;
	}
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

console.log("");

//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
	// you can only write your code here!
	let fpb = 1;
	for (let i = 1; i < angka1; i++) {
		if (angka1 % i === 0 && angka2 % i === 0) {
			fpb = i;
		}
	}
	return fpb;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

console.log("");

function cariMedian(arr) {
	// you can only write your code here!
	let arrSort = arr.sort(function (a, b) {
		return a - b;
	});
	let median = "";
	if (arrSort.length % 2 !== 0) {
		median = Math.floor(arrSort.length / 2);
		return arrSort[median];
	} else {
		median = Math.floor(arrSort.length / 2);
		return (arrSort[median] + arrSort[median - 1]) / 2;
	}
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

console.log("");

/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
	// you can only write your code here!
	let arrSort = arr.sort(function (a, b) {
		return a - b;
	});
	let modus = "";
	for (let i = 0; i < arrSort.length; i++) {
		if (arrSort[i] === arrSort[i + 1] && arrSort[i] !== arrSort[arrSort.length - 1]) {
			modus = arrSort[i];
			break;
		} else if (arrSort[i] === arrSort[arrSort.length - 1]) {
			modus = -1;
		} else {
			modus = -1;
		}
	}
	return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

console.log("");

//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
	// you can only write your code here!
	let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let word = "";
	for (let i = 0; i < kata.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			if (kata[i] === alphabet[j]) {
				if (kata[i] === alphabet[25]) {
					word += alphabet[0];
				} else {
					word += alphabet[j + 1];
				}
			}
		}
	}
	return word;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
