function not_function() {
	document.getElementById("Not").innerHTML=!(29<30);
}
// add string and number//
function name_function() {
var str="name";
var num= 5;
str += num;
document.getElementById("name").innerHTML=str +=num;
}
// 15 is equal to 15: true//
document.write(15==15);

document.write(20===20);

document.write(10>5 && 50>10);

document.write(5>10 || 10>50);

document.write(typeof 9);