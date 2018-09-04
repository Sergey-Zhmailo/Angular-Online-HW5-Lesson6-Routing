interface Person {
  name: string;
  sayHello(): void;
}
interface AgedPerson extends Person {
  age: number;
}

// const person: Person = {
//   name: 'Denis'
// };

// function addAge(age: number) {
//   return function (person) {
//     return {
//       name: person.name,
//       age
//     }
//   }
// }
//
// const newPerson = addAge(29)(person);
// newPerson { name: Denis, age: 29 }
// =====================================================
// function addAge(age: number) {
//   return function (targetclass: Person) {
//     return class {
//       name = targetclass.name;
//       age = age;
//     }
//   }
// };
//
// @addAge(29)
// class Person {
//   public name: string = 'Denis';
// }

class User implements Person {
  public name: string = 'Denis';
  sayHello(): void {
  }
}
