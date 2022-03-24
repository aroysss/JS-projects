function myDictionary(animal) {
var animal= {
	species: "cat",
	color: "black",
	breed: "shorthair",
	age: "2"
	};
	// animal age will be deleted//
	delete animal.age;
document.getElementById("Dictionary").innerHTML=animal.age; //refers to html id=dictionary//
}