class Employee {
    constructor (id, name, salary) {
        this.id = id
        this.name= name
        this.salary = salary
    }
    incrementSalary (incrementAmount) {
        this.salary += incrementAmount;
    }
}

let emp = new Employee(23, "Ravi", 34343.34);
console.log(emp)
emp.incrementSalary(5000);
console.log(emp);