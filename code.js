// let input=+prompt("enter a number:")
// if(input%2==0){
//     console.log(input+" is even")
// }
// else{
//     console.log(input+" is odd")
// }

//

// let a=+prompt("enter value1:");
// let b=+prompt("enter value2:");
// let c=prompt("enter operation(+,-,*,/,%):");
// let res=0;
// if(c=="+"){
//     res=a+b;
//     console.log("sum is "+res);
// }
// else if(c=="-"){
//     res=a-b;
//     console.log("substraction is "+ res);
// }
// else if(c=="*"){
//     res=a*b;
//     console.log("Multiplication is "+ res);

// }
// else if(c=="/"){
//     res=a/b;
//     console.log("Division:"+ res);
// }
// else if(c=="%"){
//     res=a%b;
//     console.log("Modulus is: "+res);
// }
// else{
//     console.log("enter valid operator")
// }




// let res=(a>b && a>c)?"a is bigger":(b>c)?"b is bigger":"c is bigger";

// console.log(res)
// let sum=0;
// for(i=0; i<=100; i++){
//     if(i%2==0){
//          sum=sum+i;
//     }
// }
// console.log("sum of even nums from 1 to 100 is :"+sum);

// let n=+prompt("enter num:");
// for(let i=1;i<=10;i++){
//     console.log(`${n}X${i}=${n*i}`);
// }

//

let num=+prompt("enter a number: ");
if(num>1){
    let c=0;
    for(i=2;i<num;i++){
        if(num%i==0){
            console.log(num+" is not prime");
            c++;
            break;
        }
    }
    if(c==0){
        console.log(num+" is a prime");
    }
}