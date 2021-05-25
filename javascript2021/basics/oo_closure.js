// Abstraction 

var result = function abstraction(){
    // private
    var counter = 0;
    function changeBy(val){
        counter += val;
    }
    return {
        increment: function(){
            changeBy(1);
        },
        value: function(){
            return counter;
        }

    }
}();

console.log(result.value())
result.increment();
result.increment();
console.log(result.value())