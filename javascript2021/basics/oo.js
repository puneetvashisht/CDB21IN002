
// function add (x, y){
//     console.log(x+y)
// }

// function add (x, y, z){
//     console.log(x+y+z)
// }
// Polymorphism
function add(...x){
    let total = 0;
    for(let value of x){
        console.log(value);
        total +=parseInt(value);
    }
    console.log(total)
}
add(5,6);
add(5,6,7);
add(5,6,7, 9);
add("5", "6");


// Inheritance

// class Vehicle {
//     private int maxSpeed  = 1000;
        // public void setMaxSpeed(int speed){
        //     if(speed> 1000){
        //         this.maxSpeed = speed
        //     }
           
        // }
// }
// class Plane extends Vehicle{
//     int maxAltitude = 10000;
// }

var vehicle = {maxSpeed : 1000};
var plane = {maxAltitude: 10000}

// prototypal inheritance.
plane.__proto__ = vehicle;

console.log(plane.maxSpeed)
console.log(plane.maxAltitude)




