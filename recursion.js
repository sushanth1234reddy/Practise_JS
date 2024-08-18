// function fact(n){
// let num=n;
// let fact=1;
// while(num>0){
//     fact=fact*num;
//     num=num-1;
// }
// console.log(`Factorial ${n} is ${fact}`);
// }
// let n=+prompt("enter n value: ");
// fact(n);


function rec(n){
    if(n==0 || n==1){
        return "1";
    }
    else{
        return n*rec(n-1);
    }
    
}
let n=+prompt("enter n value:");
console.log(rec(n));