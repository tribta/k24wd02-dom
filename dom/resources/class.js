/**
 * ==============================
 * LESSON:
 * ==============================
 * 1.
 * ==============================
 */
class Person {
  constructor(p) {
    this.name = p;
    // khai báo method trong constructor
    // sẽ lưu method vào trong object (instance)
    this.getName = function () {
      return this.name;
    };
  }
  // khai báo method bên ngoài constructor
  // sẽ lưu method vào trong Object.prototype (instance)
  setName(myName) {
    this.name = myName;
  }
}

let person = new Person("Adam");
