//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let one = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

//code here

// ---------------------------------------
console.log(one + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = "wow JavaScript is so cool";
let exampleFirstWord = word[0] + word[1] + word[2];

console.log("First Word: " + exampleFirstWord);

// ---------------------------------------
let exampleSecondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
console.log("Second Word: " + exampleSecondWord);

let exampleThirdWord = word[15] + word[16];
console.log("Third Word: " + exampleThirdWord);

let exampleFourthWord = word[18] + word[19];
console.log("Fourth Word: " + exampleFourthWord);

let exampleFifthWord = word[21] + word[22] + word[23] + word[24];
console.log("Fifth Word: " + exampleFifthWord);
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);

console.log("First Word: " + exampleFirstWord3);

// ---------------------------------------
let exampleSecondWord3 = word3.substring(4, 14);
console.log("Second Word: " + exampleSecondWord3);

let exampleThirdWord3 = word3.substring(15, 17);
console.log("Third Word: " + exampleThirdWord3);

let exampleFourthWord3 = word3.substring(18, 20);
console.log("Fourth Word: " + exampleFourthWord3);

let exampleFifthWord3 = word3.substring(21, 25);
console.log("Fifth Word: " + exampleFifthWord3);
// ---------------------------------------
