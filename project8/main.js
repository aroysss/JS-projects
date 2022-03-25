function full_sentence() { //concat//
	var part_1="This is"
	var part_2="a very"
	var part_3="full sentence"
	var whole_sentence= part_1.concat(part_2, part_3);// puts sentence together//
	document.getElementById("concatenate").innerHTML= whole_sentence;
}
// slice method//
function slice_method() {
	var sentence="im so cool its ridiculous";
	var section= sentence.slice(10,30);
	document.getElementById("slice").innerHTML=section;
}
function string_method() {
	var a= 50;
	document.getElementById("numbers_to_string").innerHTML= a.toString();
}
function precision_method() { //rounds up to precision//
	var b=13000.98384463;
	document.getElementById("precision").innerHTML= b.toPrecision(10);
}