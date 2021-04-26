"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = function () {
  function Employee(id, name, salary) {
    _classCallCheck(this, Employee);

    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  _createClass(Employee, [{
    key: "incrementSalary",
    value: function incrementSalary(amount) {
      this.salary += amount;
    }
  }]);

  return Employee;
}();

var e = new Employee(3, "Ravi", 3434);
console.log(e);

e.incrementSalary(5000);
console.log(e);