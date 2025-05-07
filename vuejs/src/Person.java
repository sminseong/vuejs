class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(안녕하세요, 저는 ${this.name} 입니다.);
    }
}

const person1 = new person('Lee', 25);
const person2 = new person('Kim', 25);
const person3 = new person('Park', 25);

console.log(person1.name);
console.log(person2.age);