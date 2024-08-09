// function Banana(){
//     Document.write("You have selected banana");
// }
// function Apple(){
//     Document.write("You have selected apple");
// }
// function Orange(){
//     Document.write("You have selected orange");
// }

document.getElementById('formy').addEventListener('submit',((e)=>{
    e.preventDefault();
    var form = document.getElementById('formy');
    var info = new FormData(form);
    var data = info.get('fruit');
    if(data){
        document.getElementById('three').innerHTML=`your selected fruit is ${data}`
        // console.log(`${data}`);
        // alert(`${data}`);
    }else{
        // console.log('no fruit selected');
        document.getElementById('three').innerHTML="No fruit is selected";
    }

}))