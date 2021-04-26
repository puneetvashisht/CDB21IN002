class Employee{
    constructor(id, name, salary){
      this.id = id;
      this.name = name;
      this.salary = salary
    }

    incrementSalary(amount){
      this.salary += amount;
    }
  }
  let e = new Employee(3, "Ravi", 3434);
  console.log(e);

  e.incrementSalary(5000);
  console.log(e);