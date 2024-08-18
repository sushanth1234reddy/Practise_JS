let input=prompt("Enter a number:");
len=input.length-1;
if(input[0]=="-"){
    len=input.length-1;
}
res="";
if(Number(input)>0){
while(input[len]>0){
    res=res+input[len];
    len--;
    
}
}
else{
    while(input[len]>0){
        res=res+input[len];
        len--;
    }
    res="-"+res;
}
console.log(res);