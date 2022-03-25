function animal(species,breed,color,size) {
	this. animal_species= species;
	this. animal_breed= breed;
	this. animal_color= color;
	this. animal_size= size;
}
var lulu= new animal("canine","pitbull","brown","big");
var pounce= new animal("feline","egyptian","black","medium");
var edna= new animal("reptile","bearded dragon","tan","small");
function myFunction() {
	document.getElementById("Keywords_and_Constructors").innerHTML=
	"edna is a " + edna.animal_breed + "who is" + edna.animal_color +
	"and" + edna.animal_size;
}
function count_Function() {
	document.getElementById("count").innerHTML= count()
	function count() {
		var start_point= 5;
		function plus_one() {start_point += 1;}
		plus_one();
		return start_point;
	}
}