
// 1st exercies
let address = {
	street: "Street 7",
	city: "Islamabad",
	zipCode: 46000
}

function showAddress( address ) {
	for ( let key in address )
	console.log(key, address[key])
}

showAddress(address)

// 2nd exercies
// Factory Function
function createAddress({street, city, zipCode}) {
	return {
		street,
		city,
		zipCode
	}

}

let addressSecond = createAddress('Street 7', 'Islamabad', 46000)
console.log(addressSecond)

// Construtor Function
function Address(street, city, zipCode) {
	this.street =  street;
	this.city = city;
	this.zipCode = zipCode
}

let addressThird = new Address("Street 7", "Islamabad", 46000)
console.log(addressThird)

// Third Exercies
let firstAddress = new Address("Street 7", "Islamabad", 46000)
let secondAddress = new Address("Street 7", "Islamabad", 46000)

// check if both objects are equal
function equalObjects(firstObject, secondObject) {
	return firstObject.street === secondObject.street &&
			firstObject.city === secondObject.city &&
			firstObject.zipCode === secondObject.zipCode
}

// check if both objects are same
function sameObjects(firstObject, secondObject) {
	return firstObject === secondObject
}

let result = equalObjects(firstAddress, secondAddress)
console.log(result)
let secondResult = sameObjects(firstAddress, secondAddress)
console.log(secondResult)

// Exercies fourth
let blog = {
	title: "Test blog",
	body: "Test Body",
	authour: "Test Author",
	views: 0,
	comments: [
		{authour:"comment one author", body:"test body"},
		{authour:"comment second author", body:"test body"}
	],
	isLive: true
}

console.log(blog)

// Exercies fifth
function Post(title, body, authour) {
	this.title = title;
	this.body = body;
	this.authour = authour;
	this.views = 0;
	this.comments = [];
	this.isLive = false
}

let post = new Post('a', 'b', 'c')
console.log(post)

// Exercies Sixth
let priceRange = [
	{label:"$", tooltip:"Inexpensive", minperPerson:0, maxPerPerson:10},
	{label:"$$", tooltip:"Moderate", minperPerson:11, maxPerPerson:20},
	{label:"$$$", tooltip:"Expensive", minperPerson:21, maxPerPerson:30},
]

console.log(priceRange)