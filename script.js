const user = {
    name: 'John',
    age: 30,
    isStudeent: true
};
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

function User(name,age,address){
    this.name = name;
    this.age = age;
    this.address = address;

    this.getAge = function(){
        return this.age;
    }
};

const user2 = new User("",3,"");
console.log(user2)