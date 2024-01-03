// array 1 dimensi
let array = [1, 2, 3, 4];
console.log(array);

for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

// array 2 dimensi
let array2 = [
	[1, 2, 3],
	[4, 5, 6],
];
console.log(array2);
console.log(array2[1]);
console.log(array2[1][2]);

for (let i = 0; i < array2.length; i++) {
	for (let j = 0; j < array2[i].length; j++) {
		console.log(array2[i][j]);
	}
}
