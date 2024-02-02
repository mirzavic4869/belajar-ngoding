/*
Diberikan function attack(), damageCalculation().

Function damageCalculation() akan menerima 2 parameter yaitu numberOfAttacks dan damagePerAttack
Function attack() akan menerima 1 parameter yaitu damage
[IMPLEMENTASI] Gunakan function damageCalculation() untuk menghitung damage yang diterima dan gunakan function attack() untuk mensimulasikan setiap attack dengan rumus damage - 2 disetiap attack.

[CONTOH] damageCalculation(3, 10) akan mengembalikan nilai 24

Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage 8
*/

function attack(damage) {
	// Code disini
	return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
	// Code disini
	return numberOfAttacks * attack(damagePerAttack);
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90

console.log("");

/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
	//your code here
	if (str === "") {
		return [];
	} else {
		let separate = str.split(",");
		// let pisah = separate[0].slice(0, 5);
		// return pisah;

		let array = [];
		for (let i = 0; i < separate.length; i++) {
			for (let j = 0; j < separate[i].length; j++) {
				if (separate[i][j] === "-") {
					array.push(separate[i].slice(0, 6));
				}
			}
		}
		return array;
	}
}

// TEST CASE

console.log(meleeRangedGrouping("Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged"));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
