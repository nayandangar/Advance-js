// let user1 = {
//     name: "Dharmik",
//     age: 24,
//     print: function () {
//       console.log(`my name is ${this.name} and i'm ${this.age} years old.`);
//     },
//   };
//   let user2 = {
//     name: "siddharth",
//     age: 22,
//     print: function () {
//       console.log(`my name is ${this.name} and i'm ${this.age} years old`);
//     },
//   };
  
//   user1.print()
//   user2.print()

class Person {
    constructor() {
      this.currentAge = 0;
    }
  
    setCurrentAge(age) {
      this.currentAge = age;
    }
  
    calculateAgeAfterYears(years) {
      return this.currentAge + years;
    }
  }
  
  const person = new Person();
  person.setCurrentAge(25);
  const futureAge = person.calculateAgeAfterYears(10);
  console.log("Age after 10 years:", futureAge);
  