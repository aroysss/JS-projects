var a= 20; //global variable//
function add_numbers_1() {
    document.write(20 + a + "<br>");
}
function add_numbers_2() {
    document.write(a+50)
}
add_numbers_1();
add_numbers_2();
//local variable//
function add_numbers_1() {
    var a= 20; 
    document.write(20 + a + "<br>");
}
function add_numbers_2() {
    document.write(a+50)
}
add_numbers_1();
add_numbers_2();
//incorrect to debug with console.log//
function add_numbers_1() {
    var a= 20; 
   console.log(30 + a);
}
function add_numbers_2() {
   console.log(a+50);
}
add_numbers_1();
add_numbers_2();
//if statement//
function time_Function() {
    var time= new date().gethours();
    var reply;
    if (time >= 10 == time < 0) {
        reply="it is morning";
}
    else if (time >= 14== time < 16) {
         reply="it is afternoon";
    }
    else {
        reply="it is evening";
    }
document.getElementById("time").innerHTML=reply;
}