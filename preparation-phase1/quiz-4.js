/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
	//code here
	if (arr.length === 0) {
		return arr;
	} else {
		let array = [];

		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[i].length; j++) {
				if (arr[i][j] === " ") {
					array.push("-");
				} else {
					array.push(arr[i][j]);
				}
			}
		}
		let terbesar = array[0];
		let terkecil = array[0];

		for (let i = 0; i < array.length; i++) {
			if (terbesar < array[i]) {
				terbesar = array[i];
			} else if (terkecil > array[i]) {
				terkecil = array[i];
			}
		}

		let range = [];
		for (let i = terkecil; i <= terbesar; i++) {
			range.push(i);
		}

		let missNum = [];

		for (let i = 0; i < range.length; i++) {
			let found = false;
			for (let j = 0; j < array.length; j++) {
				if (range[i] === array[j]) {
					found = true;
					break;
				}
			}
			if (!found) {
				missNum.push(range[i]);
			}
		}

		return missNum;
	}
}

console.log(
	missingNum([
		[3, " ", 5],
		[1, " ", 7],
		[9, " ", " "],
	])
); // [ 2, 4, 6, 8 ]
console.log(
	missingNum([
		[2, " "],
		[" ", 5],
	])
); // [ 3, 4 ]
console.log(
	missingNum([
		[11, " ", 13],
		[17, " ", 19],
		[" ", 16, " "],
	])
); // [ 12, 14, 15, 18 ]
console.log(
	missingNum([
		[3, " ", 5, 15],
		[1, " ", 7, 13],
		[9, " ", " ", 12],
		[" ", 16, " ", " "],
	])
); // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); // []

console.log("");

/**
  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
**/

function squareNumber(num) {
	//code here
	if (num < 3) {
		return "Minimal input adalah 3";
	} else {
		let square = num ** 2;
		let array = [];
		let arrSquare = [];
		for (let i = 1; i <= square; i++) {
			array.push(i);
		}

		let i = 0;
		while (i < array.length) {
			arrSquare.push(array.slice(i, (i += num)));
		}

		for (let i = 0; i < arrSquare.length; i++) {
			if (i % 2 !== 0) {
				arrSquare[i].reverse();
			}
		}

		// ganti ke symbol
		let arrSymbol = [];
		for (let i = 0; i < arrSquare.length; i++) {
			for (let j = 0; j < arrSquare[i].length; j++) {
				if (arrSquare[i][j] % 2 === 0 && arrSquare[i][j] % 4 !== 0) {
					arrSymbol.push("o");
				} else if (arrSquare[i][j] % 2 !== 0) {
					arrSymbol.push("x");
				} else if (arrSquare[i][j] % 4 === 0) {
					arrSymbol.push("#");
				}
			}
		}

		return arrSymbol;
	}
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, #, x, o, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, o ] ]

console.log(squareNumber(2)); // Minimal input adalah 3

console.log("");

/**
  Square Number
  Diberikan sebuah function squareNumber dimana menerima inputan berupa angka.
  Function ini akan mengembalikan array multidimensi angka x angka yang isi value
  dari array multidimensi tersebut menyerupai `board snakes and ladders`
  Contoh 1:
  input: 3
  output:
      [
        [7, 8, 9],
        [6, 5, 4],
        [1, 2, 3]
      ]
  Contoh 2:
  input: 4
  output:
      [
        [ 16, 15, 14, 13 ],
        [ 9, 10, 11, 12 ],
        [ 8, 7, 6, 5 ],
        [ 1, 2, 3, 4 ]
      ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
 - NILAI FULL(100) AKAN DIBERIKAN JIKA BERHASIL MENYELESAIKAN KASUS DIATAS
 - NILAI 80 AKAN DIBERIKAN JIKA value angka di dalam array tersebut tidak persis
   menyerupai snakes and ladders TAPI angka 1 harus tetap berada di kolom paling bawah!
   CONTOH:
     [
       [ 13, 14, 15, 16 ],
       [ 9, 10, 11, 12 ],
       [ 5, 6, 7, 8 ],
       [ 1, 2, 3, 4 ]
     ]
**/

function squareNumbers(num) {
	//code here
	if (num < 3) {
		return "Minimal input adalah 3";
	} else {
		let square = num ** 2;
		let array = [];
		let arrSquare = [];
		for (let i = 1; i <= square; i++) {
			array.push(i);
		}

		let i = 0;
		while (i < array.length) {
			arrSquare.push(array.slice(i, (i += num)));
		}

		for (let i = 0; i < arrSquare.length; i++) {
			if (i % 2 !== 0) {
				arrSquare[i].reverse();
			}
		}

		return arrSquare.reverse();
	}
}

console.log(squareNumbers(3));
// [ [ 7, 8, 9 ], [ 6, 5, 4 ], [ 1, 2, 3 ] ]

console.log(squareNumbers(4));
// [ [ 16, 15, 14, 13 ],
//   [ 9, 10, 11, 12 ],
//   [ 8, 7, 6, 5 ],
//   [ 1, 2, 3, 4 ] ]

console.log(squareNumbers(5));
// [ [ 21, 22, 23, 24, 25 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 1, 2, 3, 4, 5 ] ]

console.log(squareNumbers(2)); // Minimal input adalah 3

console.log("");
/**
Mini Sudoku Board
=================
Implementasikan function `miniSudokuBoard` untuk membuat
papan 3x3 yang tipe data-nya berupa Array.
`miniSudokuBoard` akan menerima satu parameter yaitu `text`
yang tipe data-nya berupa String.

# Contoh I/O
- Input: '290500007'
  Output: [ ['2', '9', '0'], ['5', '0', '0'], ['0', '0', '7] ]
  
- Input: '302609005'
  Output: [ ['3', '0', '2'], ['6', '0', '9'], ['0', '0', '5'] ]

# Kondisi khusus
- Jika parameter adalah string kosong, kembalikan nilai 'Empty board'
- Jika panjang dari string tidak sama dengan 9, kembalikan nilai 'Invalid input'

*/

function miniSudokuBoard(text) {
	//code here
	if (text === "") {
		return "Empty board";
	} else if (text.length !== 9) {
		return "Invalid input";
	} else {
		let array1 = [];
		let array2 = [];
		let array3 = [];
		let arrayTotal = [];
		for (let i = 0; i < 3; i++) {
			array1.push(text[i]);
		}
		for (let i = 3; i < 6; i++) {
			array2.push(text[i]);
		}
		for (let i = 6; i < 9; i++) {
			array3.push(text[i]);
		}

		arrayTotal.push(array1, array2, array3);

		return arrayTotal;
	}
}

console.log(miniSudokuBoard("005030081"));
// /[ [ '0', '0', '5' ], [ '0', '3', '0' ], [ '0', '8', '1' ] ]
console.log(miniSudokuBoard("105802000"));
// [ [ '1', '0', '5' ], [ '8', '0', '2' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard("608730000"));
// [ [ '6', '0', '8' ], [ '7', '3', '0' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard("096040001"));
// [ [ '0', '9', '6' ], [ '0', '4', '0' ], [ '0', '0', '1' ] ]
console.log(miniSudokuBoard("87109"));
// Invalid input
console.log(miniSudokuBoard(""));
// Empty board
