// const user = {
//     name: 'John',
//     age: 30,
//     isStudeent: true
// };
//serialization deserialization
// let jsonStr = JSON.stringify(user); //stringe cevirir
// console.log(jsonStr[0])

// const user1 = JSON.parse(jsonStr);
// user1.name = "Fatima";
// console.log(user);

// const user1 = Object.assign({address: "Baku"},user);
// console.log(user1)


// const user1 = user;
// user1.name = "Fta";
// console.log(user);

// const user2 = {...user};
// console.log(user2)

// function User(name,age,address){
//     this.name = name;
//     this.age = age;
//     this.address = address;

//     this.getAge = function(){
//         return this.age;
//     }
// };

// const user2 = new User("",3,"");
// console.log(user2)

class Person{
    constructor(name, surname,age){
        this.name = name;
        this.surname = surname;
        this.age=age;
    }
    getAge = function(){
        return this.age;
    }
};
var p1 = new Person("lorem","ipsum",45);
// console.log(p1.getAge())


// class Student extends Person{
//     #point //private field
//     constructor(name,surname,age,address) {
//         super(name,surname,age);
//         this.address = address;
//         // this.#point = point;
//     }

//     get getPoint(){
//         return this.#point;
//     }
//     set setPoint(value){
//         this.#point=value;
//     }
// }

// const student = new Student("","", 12,"Baky");
// student.setPoint=200;
// console.log(student)


let lorem = "helLo fatima necesen, fatima hardasan";
const text ="A\uD83D B           ";
// console.log(lorem.slice(0,-1))
let array = ["banana","apple","snacks","orange","cherry","free"]
// console.log(array.slice(0,3))
// console.log(lorem.substring(2,3));
// console.log(lorem.substr(-1));

// console.log(text.isWellFormed());
// console.log(text.trim())
// console.log(lorem.padStart(7,4))


let change=lorem.replace(/fatima/g,"Leila");
// /g olanda butun fatimlari evez edir
console.log(change);

let word = "fatia".split("");
console.log(word.join(""));