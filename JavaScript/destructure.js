const person = {
    name: 'John Doe',
    age: 25,
    email: "john@gmail.com"


}

console.log(person.name + " "   + person.email + " " + person.age);//st1

//Adding object destructuring

const {name, age, email} = person;
console.log(name + " " + age + " " + email);//st2