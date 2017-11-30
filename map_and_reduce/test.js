//var -> function scope
var one = 1;
console.log(one);
var one = 2;
console.log(one);

function one1(){
	one = 3;

}
one1();
console.log(one);

//let,const -> block scope
let two = 2;
console.log(two);

let two =3;
console.log(two);
