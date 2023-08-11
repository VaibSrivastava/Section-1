for(let i=0; i<10; i++){
    console.log(i);
}
console.log('----------------');
for(let i=10; i>=0; i--){
    console.log(i);
}
console.log('----------------');
let num=9;
let c=0;
for(let i=1; i<=num; i++)
{
    if(num%i===0)
    c=c+1;
}
if(c===2){
    console.log('prime');
}else{
    console.log('not prime');
}
console.log('----------------');
//no. divisible by both 7 and 11 in range 100 and 500
for(let i=100; i<=500; i++)
{
    if(i%7===0 && i%11===0)
    console.log(i);
};
//no. is perfect square
console.log('----------------');
let num1=64;

for(let i=1; i<=num1/2; i++)
{
    if(num===(i*i))
    {
    console.log('perfect square');
    break;
}
}
console.log('----------------');
p=10;
while(p>0){
    console.log(p);
    p--;
};
q=10
do{
    console.log(q);
    q--;
}while(q>0);

console.log('----------------');

//program to reverse a no.

let num2=37574;
let reverse =0;
while(num2>0){
    reverse=reverse*10+(num2%10);
    num2=parseInt(num2/10);
}
console.log(reverse);
