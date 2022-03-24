function add() {
	var a=8+8;
	document.getElementById("add").innerHTML="8+8="+a;
}
function sub() {
	var b=10-1;
	document.getElementById("sub").innerHTML="10-1"+b;
}
function mul() {
	var c=5*5;
	document.getElementById("mul").innerHTML="5*5"+c;
}
function mod() {
	var d=10%3;
	document.getElementById("mod").innerHTML="10%3"+d;
}
//math random shows random 0-1//
function getRandom() {
		document.getElementById("random").innerHTML= Math.random();
}