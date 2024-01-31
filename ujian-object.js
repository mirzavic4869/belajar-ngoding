/*
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array
*/

function deepSum(arr) {
	// Code disini
	if (arr.length === 0) {
		return "No number";
	} else {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[i].length; j++) {
				for (let k = 0; k < arr[i][j].length; k++) {
					sum += arr[i][j][k];
				}
			}
		}
		return sum;
	}
}

//TEST CASE
console.log(
	deepSum([
		[
			[4, 5, 6],
			[9, 1, 2, 10],
			[9, 4, 3],
		],
		[
			[4, 14, 31],
			[9, 10, 18, 12, 20],
			[1, 4, 90],
		],
		[
			[2, 5, 10],
			[3, 4, 5],
			[2, 4, 5, 10],
		],
	])
); // 316

console.log(deepSum([[[20, 10], [15], [1, 1]], [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]], [[3, 5, 1], [1, 5, 3], [1]], [[2]]])); // 156

console.log(deepSum([])); // No number

console.log("");

/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
	rute = ["A", "B", "C", "D", "E", "F"];
	//your code here
	if (arrPenumpang.length === 0) {
		return arrPenumpang;
	} else {
		let arr = [];

		for (let i = 0; i < arrPenumpang.length; i++) {
			let dari = 0;
			let ke = 0;
			let ongkos = 2000;

			for (let j = 0; j < rute.length; j++) {
				if (rute[j] === arrPenumpang[i][1]) {
					dari += j;
				} else if (rute[j] === arrPenumpang[i][2]) {
					ke += j;
				}
			}
			const obj = {
				penumpang: arrPenumpang[i][0],
				naikDari: arrPenumpang[i][1],
				tujuan: arrPenumpang[i][2],
				bayar: (ke - dari) * ongkos,
			};

			arr.push(obj);
		}

		return arr;
	}
}

//TEST CASE
console.log(
	naikAngkot([
		["Dimitri", "B", "F"],
		["Icha", "A", "B"],
	])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

console.log("");

function highestScore(students) {
	// Code disini
	if (students.length === 0) {
		return students;
	} else {
		let object = {};

		for (let i = 0; i < students.length; i++) {
			if (!object[students[i].class] || students[i].score > object[students[i].class].score) {
				object[students[i].class] = {
					name: students[i].name,
					score: students[i].score,
				};
			}
		}
		return object;
	}
}

// TEST CASE
console.log(
	highestScore([
		{
			name: "Dimitri",
			score: 90,
			class: "foxes",
		},
		{
			name: "Alexei",
			score: 85,
			class: "wolves",
		},
		{
			name: "Sergei",
			score: 74,
			class: "foxes",
		},
		{
			name: "Anastasia",
			score: 78,
			class: "wolves",
		},
	])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
	highestScore([
		{
			name: "Alexander",
			score: 100,
			class: "foxes",
		},
		{
			name: "Alisa",
			score: 76,
			class: "wolves",
		},
		{
			name: "Vladimir",
			score: 92,
			class: "foxes",
		},
		{
			name: "Albert",
			score: 71,
			class: "wolves",
		},
		{
			name: "Viktor",
			score: 80,
			class: "tigers",
		},
	])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}

console.log("");

/*
Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

Student dapat dinyatakan lulus apabila score lebih besar dari 75.
Masukkan name dan score dari student ke class yang dia ikuti.
Student yang tidak lulus tidak perlu ditampilkan.
Output yang diharapkan berupa Object dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
*/

function graduates(students) {
	// Code disini

	if (students.length === 0) {
		return students;
	}
	let object = {};

	for (let i = 0; i < students.length; i++) {
		if (students[i].score > 75) {
			if (!object[students[i].class]) {
				object[students[i].class] = [];
			}

			object[students[i].class].push({
				name: students[i].name,
				score: students[i].score,
			});
		}
	}

	return object;
}

console.log(
	graduates([
		{
			name: "Dimitri",
			score: 90,
			class: "foxes",
		},
		{
			name: "Alexei",
			score: 85,
			class: "wolves",
		},
		{
			name: "Sergei",
			score: 74,
			class: "foxes",
		},
		{
			name: "Anastasia",
			score: 78,
			class: "wolves",
		},
	])
);

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(
	graduates([
		{
			name: "Alexander",
			score: 100,
			class: "foxes",
		},
		{
			name: "Alisa",
			score: 76,
			class: "wolves",
		},
		{
			name: "Vladimir",
			score: 92,
			class: "foxes",
		},
		{
			name: "Albert",
			score: 71,
			class: "wolves",
		},
		{
			name: "Viktor",
			score: 80,
			class: "tigers",
		},
	])
);

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}
