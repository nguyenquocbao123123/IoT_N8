let arr=[3,5,8,0,12];
function minarr(){
    let min = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    document.getElementById("demo").innerHTML=min;
}