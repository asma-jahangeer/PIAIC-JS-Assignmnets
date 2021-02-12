var a = 2;
var b = a++ + ++a - --a + a--;
//     = 2 + 4 - 3 + 3 =
var c = "variable a: " + a;
var d = "variable b: " + b;
alert(c); //2
alert(d); // 6