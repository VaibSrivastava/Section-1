const myarr= [235, 'nice', 73.355, true, console.log[23,25]];
console.log(myarr.length);
console.log(typeof myarr);

const movies= ['Avengers', 'Flash','Pushpa', 'war', 'Jawaan', 'FastX', 'OMG 2'];
movies.push('Shershah');//adds element at the end
movies.unshift('Avatar');//adds element in the start
console.log(movies)

//removing element
movies.pop();//removes last element
movies.shift();//removes first element
console.log(movies);

movies.splice(3,2);
console.log(movies);
