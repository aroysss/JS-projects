function call_loop() {
	var digit="";
	var x=3;
	while(x<5) {
		digit += "<br>" + x;
		x++;
	}
	document.getElementById("loop").innerHTML= digit;
}	
	//for loop//
var animals= ["cat","dog","lizard","rat"]
var content= "";
var a;
function for_loop() {
	for (a = 0 ; a < animals.length; a++) {
	content += animals[a] + "<br>"
	}
	document.getElementById("animals").innerHTML= content;
}
	//array//
function array_function() {
	var picture=[];
	picture[0]="dog";
	picture[1]="cat";
	picture[2]="bird";
	picture[3]="rat";
	document.getElementById("array").innerHTML= "this is a picture of a "+ picture[3];
}
	var color="red";
	let age= 20;
	document.write(age);