const myObj = {
	name: "Ravi",
	age: 21,
	hobbies: ["read", "sleep", "coding"],
	details: {
		height: 165,
		weight: 50,
	},
};

console.log(myObj);
console.log(myObj.name);
console.log(myObj.hobbies[2]);

console.log("");

for (const key in myObj) {
	console.log(`${key}: ${myObj[key]}`);
}
