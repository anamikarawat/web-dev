// class Person {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
// }

// // class Teacher {
// //   constructor(name, post) {
// //     (this.name = name), (this.post = post);
// //   }
// // }

// class Teacher extends Person {//inhertance
//   constructor(name, age, classStrength) {
//     super(name, age)
//     this.classStrength = classStrength;
//   }
// }

// class Student extends Person {
//   constructor(name, age, cgpa) {
//     super(name, age);
//     this.cgpa = cgpa;
//   }

// }

// let person1 = new Person("Adam", 25);
// let teacher1 = new Teacher("Steve", 40, 100);
// let student1 = new Student("Mark", 21, 8.0);

// console.log(person1);
// console.log(teacher1);
// console.log(student1);
//********************************************************************* */
class Person {
    constructor(name, age) {
        (this.name = name), (this.age = age);
    }

    //class k ander function likh sakte ho
    welcome() {
        console.log("Hello " + this.name)
    }
}

class Teacher extends Person {//inhertance
    constructor(name, age, classStrength) {
        super(name, age)
        this.classStrength = classStrength;
    }
}

class Student extends Person {
    constructor(name, age, cgpa) {
        super(name, age);
        this.cgpa = cgpa;
    }
    //function ko bhi inherit kiya ja sakta h
    hello() {
        super.welcome()
    }
}

let person1 = new Person("Adam", 25);
let teacher1 = new Teacher("Steve", 40, 100);
let student1 = new Student("Mark", 21, 8.0);


person1.welcome()
student1.hello()