//perfect square between 50 and 350
for(let i=8; i<19; i++){
    for(let j=50; j<350; j++){
        if(j===(i*i)){
            console.log(j,' is a perfect square');
        }
    }
}
console.log('---------------');

//celsius to fahrenheit and vice versa
let tc=40;
let tf=10;
let f=(tc*9/5)+32;
let c=(tf-32)*5/9;
console.log('Celsius to fahrenheit temperature tc is-',f);
console.log('Fahrenheit to celsius temperature tc is-',c);
console.log(`Temperature for ${tc} degree C in Fahrenheit is ${f} degree F`)

console.log('---------------');

//Palindrome no. or not
let num=1221;
um1=num;
reverse=0;
while(um1>0){
    reverse=reverse*10+(um1%10);
    um1=parseInt(um1/10);
}
if(num === reverse){
    console.log('Number is a palindrome');
}else{
    console.log('Number is not palindrome');
}

console.log('---------------');

//Sum of digits of  a number
let n=59873594;
let r;
let sum=0;
while(n>0){
    sum=sum+(n%10);
    n=parseInt(n/10);
}
console.log('Sum of digits of number ',n,' is-',sum); 

console.log('---------------');

//Fibonacci Series
let a=0, b=1, c1=0;
console.log('Fibonacci Series till 10 terms-->');
console.log(a);
console.log(b);
for(let i=2; i<10; i++){
    c1=a+b;
    a=b;
    b=c1;
    console.log(c1);
}
