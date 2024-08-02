// I used comments for everything so that you can remove for whatever example you want 
// to check and run.Have a great day.


// var a=false;
// if(a){
//     console.log("true value");
// }
// else{
//     console.log("false value");
// }



// var age = Number(prompt("Enter Your Age"));
// if(age<18){
//     alert("ineligible for voting");
// }
// else if(age>=18){
//     alert("eligible for voting");
// }
// else{
//     alert("Provide correct age");
// }



// var age = Number(prompt("Enter Your Age"));
// if(age<5){
//     alert("No fee for you");
// }
// else if(age>=5 && age<=10){
//     alert("Please pay 5rupees");
// }
// else if(age>15){
//     alert("please pay 15Rupees");
// }
// else{
//     alert("provide a valid age")
// }



// var num1 = Number(prompt("Enter num1"));
// var num2 = Number(prompt("Enter num2"));
// var operator=prompt("enter operator");
// switch(operator){
//     case '+':
//         alert("Add of two numberss is :"+(num1+num2));
//         break;
//     case '-':
//         alert("sub of two numberss is :"+(num1-num2));
//             break;
//     case '*':
//         alert("Multiplication of two numberss is :"+(num1*num2));
//         break;
//     case '/':
//         alert("Divison of two numberss is :"+(num1/num2));
//         break;
//     case '**':
//         alert("Add of two numberss is :"+(num1**num2));
//         break;
//     case '%':
//         alert("Add of two numberss is :"+(num1+num2));
//         break;
//     default:
//         alert("Enter valid Operator");
// }



// Loops
// while loop
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }
// let j=1;
// while(j<=10){
//     j++;
//     console.log(j);
// }



// Do-While
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i>=10);
// }while(i<=10);



// for-loop
// for(i=1;i<=15;i++){
//     console.log(i)
// }



//for-in loop for  Array
// let arr=[12,34,56,78,90,13];
// for(let x in arr){
//     console.log(arr[x]);
// }



// let latest={
//     name:"Areef",
//     place:"Tadikonda",
//     age:21
// }
// for(let z in latest){
//     console.log(latest[z]);//z represents the keys
// }



// for-of loop
// let one=[12,23,34,45,56,67];
// for(let m of one){
//     console.log(m);
// }
// let two={
//     name:"steve",
//     age:34,
//     place:"america"
// }
// for(let n of two){
//     console.log(n);
// }
// Differnce between for-in and for-of is for-in is iterable and for-of is not.



// For-each
// let arr = [21,32,43,54,65,76];
// arr.forEach((val,index)=> {
//  console.log(`value ${val}+ index also ${index}`);   
// })