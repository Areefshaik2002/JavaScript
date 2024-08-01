// Data Types
// Primitive datatypes
// null, undefined, number, BigInt, String, Boolean
// typeof-operator to check the data type

// number
var a=35;
console.log(a);
console.log(typeof(a));

// String
var b = "Hello Love";
console.log(b);
console.log(typeof(b));

// Boolean
var c=true;
console.log(c);
console.log(typeof(c));

// even though null value is a primitive data type it is stored as a object
// null
var d=null;
console.log(d);
console.log(typeof(d));

// Undefined
var e;
console.log(e);
console.log(typeof(e));

// BigInt
var f =BigInt(1234567890123456782345678);
console.log(f);
console.log(typeof(f));

//Non-primitive: object, array
// Array
var arr=[12,23,34,45,56,67,78,89,90];
console.log(arr);   //output:[12, 23, 34, 45, 56, 67, 78, 89, 90]  
console.log(typeof(arr)); // output: object
console.log(arr[2]); //output: 34

// object
var obj={
    name:"Areef",
    place:"Tadikonda",
    age:21
}
console.log(obj); //output: {name: "Areef", place: "Tadikonda}
console.log(typeof(obj)); //output: object
console.log(obj.place); //output:Tadikonda


// Operators
// Arithmetic operators
//+,-,*,/,**...
var a=2;
var b=4;
console.log(a+b);//6
console.log(a-b);//-2
console.log(a*b);//8
console.log(a**b);//16
console.log(a/b);//0.5

// incrementaion
//pre
var c=10;
console.log(c);//10
console.log(++c);//11
console.log(++c);//12
// post
console.log(c++);//12
console.log(c);//13

// concatenation
var d=45;
var e="Hello";
var f=63;
console.log(d+" "+e+" "+f);//45 Hello 63
console.log(d+f+e);//108Hello
console.log(e+d+f);//Hello4563

// Assignment Operators
// +=,-=,*=,/=,=
var a=34;
var b=45;
var c=a+b;
console.log(c);//79

// Relational Operators
// ==,<=,>=,===,!=.!==...
var a = 25;
var b = '25';
console.log(a>=b);//t
console.log(a<=b);//t
console.log(a!=b);//f
console.log(a===b);//f
console.log(a==b);//t
console.log(a!==b);//t

// terenary operator
// ?:
var c=5;
var d=10;
var e=c<d?"True":"False";
console.log(e);//t

// Logical operator
// &&, ||, !
var d=22;
var e=78;
var f=34;
console.log(e>f&&f>d);//t
console.log(e>f&&f<d);//f
console.log(e>f||f>d);//t
console.log(e>f||f<d);//t
console.log(!e>f);//f