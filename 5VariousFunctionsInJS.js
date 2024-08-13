function clickAction(){
    alert("Hey, Stop clicking the button!");
}

function changeAction(){
    alert(`${input.value}! How are you?`);
}

function mouseOverAction(){
    alert("Stop going there Boyyy!")
}

function mouseOutAction(){
    alert("please don leave me!");
}

// document.getElementById('one').innerHTML="Hey fellas! what are you guys doing?";
// document.getElementById('one').style.color="green";
// document.getElementsByTagName('h4')[0].innerHTML="watch the full video";
// document.getElementsByClassName('two')[0].innerHTML="I know you will";


let arr3=[1,4,5,6,9];
arr3.reduce((a,c)=>{
    console.log(c);
    console.log(a);
    d=a*c;
    console.log(d);
    return d;
},100)


useStrict
var a;
console.log(a);

// (...)
var a = [12,13,14,15,16,17,19];
console.log(a);
var b = [1,2,3,4,5,6,7,8,9,0];
console.log(b);
var c = [...a,...b];
console.log(c);


