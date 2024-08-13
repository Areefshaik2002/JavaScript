input.addEventListener("change", (()=>{
    // alert(input.value);
    document.getElementById('one').innerHTML=`${input.value}`;
}))
async function Hello(){
    return await "Hello World";
}
console.log(Hello());