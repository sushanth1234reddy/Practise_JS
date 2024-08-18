// function act(){
// let arr=[1,2,4,6,3,9];
// let max=arr[0];
// for(i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log("Maximum elemnt in array is : "+max);
// }
// act();

function rev(str){
    let res=""
    for(let i=str.length-1;i>=0;i--){
           res=res+str[i];
           
    }
    console.log(res);

}
rev("hello")