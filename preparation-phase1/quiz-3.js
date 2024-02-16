/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================

  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
  yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
  ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
  sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map(), .reduce()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range 
    tanggal tersebut )
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
  angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil Z 999 ERT karena merupakan jenis kendaraan
  mobil dan memiliki plat 'ganjil'    
*/

function ganjilGenapAsianGames(date, data) {
	//code here
	let arrMobil = [];

	for (let i = 0; i < data.length; i++) {
		if (data[i].type === "Mobil") {
			arrMobil.push(data[i]);
		}
	}

	if (arrMobil.length === 0) {
		return 0;
	}

	let countGanjil = 0;
	let countGenap = 0;
	for (let i = 0; i < arrMobil.length; i++) {
		if (arrMobil[i].plat.split(" ")[1] % 2 !== 0) {
			countGanjil++;
		} else {
			countGenap++;
		}
	}

	let count = "";
	if (date > 31 || date < 1) {
		return "invalid dates";
	} else {
		if (date % 2 === 0) {
			count = countGanjil;
		} else {
			count = countGenap;
		}
	}

	return count;
}

console.log(
	ganjilGenapAsianGames(30, [
		{
			plat: "B 1234 ABC",
			type: "Mobil",
		},
		{
			plat: "A 2457 HE",
			type: "Motor",
		},
		{
			plat: "AB 87 RFS",
			type: "Motor",
		},
		{
			plat: "Z 999 ERT",
			type: "Mobil",
		},
	])
); // 1

console.log(
	ganjilGenapAsianGames(26, [
		{
			plat: "A 24 HE",
			type: "Mobil",
		},
		{
			plat: "AB 871 RFS",
			type: "Mobil",
		},
		{
			plat: "Z 9992 ERT",
			type: "Mobil",
		},
	])
); // 1

console.log(
	ganjilGenapAsianGames(1, [
		{
			plat: "A 24 WE",
			type: "Mobil",
		},
		{
			plat: "AB 871 RFS",
			type: "Mobil",
		},
		{
			plat: "Z 9992 XOXO",
			type: "Mobil",
		},
	])
); // 2

console.log(
	ganjilGenapAsianGames(1, [
		{
			plat: "A 2431 HE",
			type: "Motor",
		},
		{
			plat: "AB 8711 RFS",
			type: "Motor",
		},
		{
			plat: "Z 999 ERT",
			type: "Motor",
		},
	])
); // 0

console.log(
	ganjilGenapAsianGames(32, [
		{
			plat: "X 123 HAHA",
			type: "Mobil",
		},
	])
); // invalid dates

console.log(
	ganjilGenapAsianGames(0, [
		{
			plat: "X 123 HAHA",
			type: "Mobil",
		},
	])
); // invalid dates

console.log("");

/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
	let duitJeff = 100000;
	let duitLarry = 95000;
	let duitJack = 90000;

	let array = [];
	let depo = {
		"Jeff Bezos": duitJeff,
		"Larry Page": duitLarry,
		"Jack Ma": duitJack,
	};

	for (let i = 0; i < tradeActivity.length; i++) {
		for (let j = 0; j < tradeActivity[i].length; j++) {
			let name = tradeActivity[i][j].match(/[A-Z,a-z,]+/g).join(" ");
			let naikTurun = tradeActivity[i][j].match(/[0-9]+/g).join(" ");
			let owner = "";

			if (name === "Jeff Bezos") {
				owner = "Amazon";
			} else if (name === "Larry Page") {
				owner = "Google";
			} else if (name === "Jack Ma") {
				owner = "Alibaba";
			}

			if (tradeActivity[i][j].includes("+")) {
				depo[name] += (depo[name] * naikTurun) / 100;
			} else if (tradeActivity[i][j].includes("-")) {
				depo[name] -= (depo[name] * naikTurun) / 100;
			}

			let obj = {
				name: name,
				deposit: depo[name],
				owner: owner,
			};

			array.push(obj);
		}
	}

	return array;
}

console.log(economyChangeSummary([["Jeff Bezos+5%", "Larry Page+10%", "Jeff Bezos-3%"], ["Larry Page+2%", "Larry Page-1%"], ["Jack Ma+4%"], ["Larry Page-8%", "Jack Ma+20%", "Jeff Bezos-3%", "Jeff Bezos+8%"]]));
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/
console.log("==============================================================================");

console.log(economyChangeSummary([["Jeff Bezos-10%"]]));
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/

console.log("");

/*
=======================
Initial Object Grouping
=======================
​
[INSTRUCTION]
​
Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.
[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama
{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}
[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex
*/
function initialObjectGrouping(studentsArr) {
	//CODE HERE
	let obj = {};

	for (let i = 0; i < studentsArr.length; i++) {
		if (!obj[studentsArr[i][0]]) {
			obj[studentsArr[i][0]] = [];
		}

		obj[studentsArr[i][0]].push(studentsArr[i]);
	}

	return obj;
}
console.log(initialObjectGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/
console.log(initialObjectGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/
console.log(initialObjectGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/

console.log("");

/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
	//code here
	if (arr.length === 0) {
		return arr;
	} else {
		let city = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"];
		let regex = /[a-z,A-Z]+/g;
		let departureCity = [];
		let destinationCity = [];

		let price = 0;
		let discount = 0;
		let totalCost = 0;

		let array = [];

		for (let i = 0; i < arr.length; i++) {
			// console.log(arr[i].match(regex));
			let name = arr[i].match(regex)[0];
			let departure = arr[i].match(regex)[1];
			let destination = arr[i].match(regex)[2];
			let transportation = arr[i].match(regex)[3];

			for (let j = 0; j < city.length; j++) {
				if (departure === city[j]) {
					departureCity.push(j);
				} else if (destination === city[j]) {
					destinationCity.push(j);
				}
			}

			let range = Math.abs(departureCity[i] - destinationCity[i]);

			if (transportation === "Pesawat") {
				price = 275000;
			} else if (transportation === "Kereta") {
				price = 250000;
			} else if (transportation === "Bis") {
				price = 225000;
			}

			if (emoney === "OVO") {
				discount = 15 / 100;
			} else if (emoney === "Dana") {
				discount = 10 / 100;
			} else if (emoney === "Gopay") {
				discount = 5 / 100;
			} else {
				discount = 0;
			}

			totalCost = range * (price - price * discount);

			let obj = {
				name: name,
				departureCity: departure,
				destinationCity: destination,
				transport: transportation,
				totalCost: totalCost,
			};

			array.push(obj);
		}

		do {
			swapped = false;
			for (let i = 1; i < array.length; i++) {
				if (array[i].totalCost > array[i - 1].totalCost) {
					let temp = array[i];
					array[i] = array[i - 1];
					array[i - 1] = temp;
					swapped = true;
				}
			}
		} while (swapped);

		return array;
	}
}

console.log(travelingIndonesia(["Danang-Yogyakarta-Semarang-Bis", "Alif-Denpasar-Surabaya-Kereta", "Bahari-Semarang-Denpasar-Pesawat"], "OVO"));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(["Shafur-Surabaya-Yogyakarta-Kereta", "Taufik-Semarang-Surabaya-Pesawat", "Alex-Yogyakarta-Semarang-Kereta"], "Dana"));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"], "Gopay"));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], "Cash")); // [];

console.log("");

/**
Delete Undefined Keys
=====================
Implementasikan function `deleteUndefinedKeys` untuk menghapus
key di dalam object yang memiliki value undefined.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data array.
Di dalam array `data` terdapat beberapa object yang memiliki
value undefined. Tugas kamu adalah untuk menghapus key tersebut

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika tidak ada elemen di dalam `data`, maka tampilkan 'No data'

CONSTRAINTS
============
- DILARANG menggunakan built-in function .map, .filter

*/

function deleteUndefinedKeys(data) {
	//code here

	if (data.length === 0) {
		return "No data";
	} else {
		for (let i = 0; i < data.length; i++) {
			for (const value in data[i]) {
				if (data[i][value] === undefined) {
					delete data[i][value];
				}
			}
		}
		return data;
	}
}

console.log(
	deleteUndefinedKeys([
		{
			name: "Dimitri",
			address: undefined,
			email: "dimitri@mail.com",
			age: undefined,
			gender: "male",
		},
		{
			name: "Alexei",
			address: "Earth",
			email: undefined,
			age: 18,
			gender: "male",
		},
	])
);
/*
  [ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
    { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
*/

console.log(
	deleteUndefinedKeys([
		{
			band: "Ghost",
			formed: 2006,
			members: ["Papa Emeritus", "Alpha", "Omega", "Water", "Wind", "Earth"],
			genre: "Heavy Metal",
			rating: undefined,
		},
		{
			band: "BABYMETAL",
			formed: undefined,
			members: ["SU-METAL", "MOAMETAL", "YUIMETAL"],
			genre: "Kawaii Metal",
			rating: undefined,
		},
		{
			band: "Avatar",
			formed: 2006,
			members: undefined,
			genre: undefined,
			rating: 5,
		},
	])
);
/*
[ { band: 'Ghost',
    formed: 2006,
    members: [ 'Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth' ],
    genre: 'Heavy Metal' },
  { band: 'BABYMETAL',
    members: [ 'SU-METAL', 'MOAMETAL', 'YUIMETAL' ],
    genre: 'Kawaii Metal' },
  { band: 'Avatar', formed: 2006, rating: 5 } ]
*/

console.log(deleteUndefinedKeys([]));
// No data
