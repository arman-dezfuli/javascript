// document.write("Admin");
// console.log("admin");
// alert("admin");
// var _firstName = "Arman";
// var _lastName = "Dezfuli";
// console.log(_firstName);
// var x = 51;
// var y = 50;
// if ( x > y) {
//     console.log('yes');
// }else if(x < y) {
//   console.log('no');
// }else {
//   console.log("?");
// }
// function gam (x , y) {
//   var xx;
//   xx = (x + y) * 2;
//   return xx;
// }
// var u = gam(5 , 10);
// console.log(u);
function sum () {
    var m1;
    var m2;
    var h2;
    m1 = document.getElementById("m1").value;
    m2 = document.getElementById("m2").value;
    // h2 = document.getElementById("m2").innerHTML;
    if (Number(m1) > Number(m2)){
        console.log("مقدار اول بزرگ تر است");
        var q = "مقدار اول بزرگ تر است";
        // h2.document.write(q);

    }else if (Number(m1) < Number(m2)) {
        console.log("مقدار دوم بزرگ تر است")
    }
    else{
        console.log("هر دو مساوی هستن");
    }
}
