// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// nested loop
for (let i = 0; i < 5; i++) {
	for (let j = 1; j < i; j++) {
		console.log(j);
	}
	console.log(i);
}

// ganjil genap
let i = 1;
while (i <= 15) {
	if (i % 2 === 0) {
		console.log(`${i} adalah bilngan genap`);
	} else {
		console.log(`${i} adalah bilngan ganjil`);
	}
	i++;
}

// fizzBuzz
// for (let i = 1; i < 50; i++) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log("fizzBuzz");
// 	} else if (i % 3 === 0) {
// 		console.log("fizz");
// 	} else if (i % 5 === 0) {
// 		console.log("buzz");
// 	} else {
// 		console.log(i);
// 	}
// }

// break & continue
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		continue;
	}
	console.log(i);
}

for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break;
	}
	console.log(i);
}
