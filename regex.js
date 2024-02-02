// . //  ----> - Mencocokan karakter apapun, kecuali line breaks(jeda baris/enter).
// * //  ----> - Mencocokan 0 atau lebih dari karakter terdahulu.
// + //  ----> - Mencocokan 1 atau lebih dari karakter terdahulu.
// ? //  ----> - Karakter terdahulu menjadi opsional. Mencocokan 0 atau 1.
// \d //  ----> - Mencocokan digit apapun
// \w //  ----> - Mencocokan karakter pada sebuah kata (alphanumeric dan underscore/garis bawah).
// $ //  ----> - Mencocokan ujung dari sebuah string.
// ^ //  ----> - Mencocokan awal dari sebuah string.
// [^a-z] //  ----> - Ketika didalam sebuah class karakter, tanda ^ artinya NOT; dalam kasus ini, regex akan mencocokan apapun yang bukan karakter lowercase.

//ada 2 bentuk
let regexContohSatu = new RegExp("abc");
let regexContohDua = /abc/;

let message = "Regex itu Mudah!";
console.log(/[A-Z]/.test(message));
// mengembalikan nilai true karena minimal satu karakter memenuhi pattern A-Z. Dan true, karena regex itu memang mudah :)

let messageAllLowerCase = "regex itu susah?";
console.log(/[A-Z]/.test(messageAllLowerCase));
// mengembalikan nilai false karena tidak ada satupun karakter yang memenuhi pattern A-Z. statement tersebut juga memang false! regex tidak sesulit yang kita kira!

let str = "belajar regex itu menyenangkan";
console.log(str.split(/\s/));
// mengembalikan nilai "belajar, regex, itu, menyenangkan" karena \s adalah sebuah pattern untuk satu spasi.

let stringAwal = "Regex itu sangat susah!";
stringHasil = stringAwal.replace(/susah/, "mudah");
console.log(stringHasil); // mengembalikan nilai "Regex itu sangat mudah!"

let message2 = "Regex seru DEH!";
console.log(message2.match(/e/));
// menampilkan "e", namun hanya sekali

console.log(message2.match(/e/g));
// menampilkan "e" untuk setiap "e" yang terdapat di dalam teks. `g` menandakan pencarian secara global, tidak hanya satu kali

console.log(message2.match(/e/gi));
// menampilkan "e" untuk setiap "e" yang terdapat di dalam teks. `i` menandakan pencarian karakter dengan ignore case, atau mengabaikan besar kecilnya karakter, sehingga "E" pun akan dicocokkan.
//mending kalian coba sendiri deh liat outputnya wkwk

let string = "Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#";
console.log(string.match(/[a-z]+/gi));
//menampilkan ["Walaupun", "regex", "banyak", "mengandung", "simbol", "tapi", "tidak", "serumit", "seperti", "dan"]
