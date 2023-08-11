const user={
    name:'Raju',
    email:'raju@email.com',
    password:'45678'
};
console.log(user.email);
console.log(typeof user);

console.log(user['password']);

user.address='Lucknow';
console.log(user);
user.password='abrakadabra';
console.log(user);
for(let k of Object.keys(user)){
    console.log(k);
}
for(let k of Object.values(user)){
    console.log(k);
}
for(let k of Object.entries(user)){
    console.log(k);
}

const laptop=[
    {brand: "HP", model:"Pavillion", price:69999, colors:["black","silver"]},
    {brand: "Lenovo", model:"Thinkpad", price:56000, colors:["black"]},
    {brand: "HP", model:"Elitebook", price:68000, colors:["black","silver"]},
    {brand: "Asus",
     model:"Ultrabook", price:89999, colors:["black","silver","white"]},
];
//Syntax to get the price of ultrabook.
console.log(laptop[3].price);
//syntax to repace silver color with grey in ultrabook
laptop[3].colors[1]="grey";
console.log(laptop[3]);

//brand name
/*for(let i=0;i<4;i++)
console.log(laptop[i].brand);*/

//syntax to filter laptops having price less than 70000
for(let i=0;i<4;i++){
    if(laptop[i].price<70000){
console.log(laptop[i].brand);
    }
}

//syntax to filter laptops having price less than 70000
const res1=laptop.filter((l) => {return l.price<70000})
console.log(res1);

//syntax to filter laptops having black color
const col=laptop.filter((la) => {return la.colors.includes("black")});
console.log(col);