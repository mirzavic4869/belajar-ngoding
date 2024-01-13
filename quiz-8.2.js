/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
	["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
	["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
	["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
	["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling() {
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input[i].length; j++) {
			if (input[i][j] === input[i][0]) {
				console.log(`Nomor ID: ${input[i][j]}`);
			} else if (input[i][j] === input[i][1]) {
				console.log(`Nama Lengkap: ${input[i][j]}`);
			} else if (input[i][j] === input[i][2]) {
				console.log(`TTL: ${input[i][j]} ${input[i][3]}`);
			} else if (input[i][j] === input[i][4]) {
				console.log(`Hobi: ${input[i][j]}`);
			}
		}
		console.log("");
	}
}

// dataHandling(input);

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

let input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input2) {
	// 1
	input2.splice(4, 1, "Pria", "SMA Internasional Metro");
	input2.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
	console.log(input2);
	// 2
	let date = input2[3];
	let month = date.split("/");
	if (month[1] === "05") {
		console.log("Mei");
	}
	// 3
	let date2 = input2[3];
	let changeDate = date2.split("/");
	changeDate.splice(0, 2);
	changeDate.splice(1, 2, "21", "05");
	console.log(changeDate);
	// 4
	let date3 = input2[3];
	let changeSlash = date3.replaceAll("/", "-");
	console.log(changeSlash);
	// 5
	let name = input2[1];
	if (name.length > 15) {
		console.log(name.slice(0, 15));
	}
}

dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
