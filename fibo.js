num=+prompt("Enter a number:");
a=0;
b=1;
i=1;
while(i<num){
    
    c=a+b;
    a=b;
    b=c;
    i++;
   
}
console.log(a);

