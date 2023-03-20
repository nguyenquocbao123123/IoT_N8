let arr=[3,5,8,0,12];
function maxarr(){
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    document.getElementById("demo").innerHTML=max;
}