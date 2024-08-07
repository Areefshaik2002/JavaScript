// Methods in js.
var a = 12.345;
console.log(a);

var b = a.toExponential(5);
console.log(b);

var c =Number('23435');
console.log(typeof(c));
console.log(c);

var d = toString(2334);
console.log(d);
console.log(typeof(d));

var e = 14.46789;
console.log(e);
var f = e.toPrecision();
console.log(f);
var g = e.toFixed(10);
console.log(g);

// String methods
var a = "Hello everyone, How are y'all doing?";
console.log(a);
var b = a.length;
console.log(b);
var c = a[0];
console.log(c);
var d = a.charAt(14);//at, charcodeAt
console.log(d);
var e = a.slice(0, 5);
console.log(e);
var f = a.substring(6,15);
console.log(f);
var g = a.replace("everyone","Areef");
console.log(g);
var h = a.repeat(3);
console.log(h);
var i = a.split(" ");
console.log(i); 

// Date
var a = new Date('08-07-2024');
console.log(a.getTime());

var a = 12.345;
console.log(Math.floor(a));
console.log(Math.floor(12.345));
console.log(Math.floor(12.9));
console.log(Math.ceil(a));
console.log(Math.floor(12.1));
console.log(Math.round(a));
console.log(Math.round(12.1));
console.log(Math.round(12.9));
console.log(Math.round(12.5));
console.log(Math.max(12,15,18,56,-2));
console.log(Math.min(12,15,18,56,-2));
console.log(Math.sign(12));
console.log(Math.sign(0));
console.log(Math.sign(-12));
console.log(Math.abs(23535353));
console.log(Math.cos(124));
console.log(Math.log(2));

var a = [12, 14, 16, 18, 56, 67, 89, 90];
// map * 3
// filter<50; filter>60
// reduce summation initial amount 20
// clone the array

