// I used comments for everything so that you can remove for whatever example you want 
// to check and run.Have a great day.


//Functions in js

// function function_name(){
//     requirement
// }
// calling function with name()

// function helloWorld(){
//     console.log('hello world! I am Areef Shaik');
// }
// helloWorld();


// function Add(a, b){
//     c = a + b;
//     // return c;
//     console.log(c);
// }
// // console.log(Add(2,5))
// Add(12,15);


// function product(a, b, c){
//     d =a * b * c;
//     console.log(d);
// }
// product(3,3,3);


// Arrow Function
// const a=(b, c)=>{
//     console.log("Arrow Function");
//     d=b+c;
//     console.log(d);
// }
// a(3,5);

// const a=(b, c)=>{
//     d = b*c;
//     return d;
// }
// console.log(a(2, 3));


// Call-back function
// function str1(cbf, b){
//     console.log("Code");
//     cbf();
//     console.log(b);
// }
// str1(str2, 1234);
// function str2(d, e){
//     console.log("gnan");
//     f=d+e;
//     console.log(f);
// }
// str2(2,4);


let arr = [1,2,3,4,5];
arr.map((values, index)=>{
    console.log(values*3);
})



