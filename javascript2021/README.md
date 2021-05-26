    JS Concepts
        JavaScript (JS) is a interpreted with first-class functions.
        JavaScript is a prototype-based, 
        single-threaded: (no concurrency);
        dynamic language,
        supporting object-oriented (inheritance, polymorphism, encapsulation, abstraction) 
        imperative, and declarative (e.g. functional programming) styles.

        DOM manipution
         Data Types
            - Primitives: string, number & boolean
            - Objects {}, function constructor
        Functions
            - First class citizens (passed into and returned from functions)
            - Scope(Scope Creation, Execution)
            - Function Constructor
            - Prototypes (Common place for all objects)
        Scope: Global, Function, Block(let)
        String, Numbers, Arrays, Date, Math
        let courses = [
            {title: "Ember"}, 
            {title: "React"}, 
            {title: "Angular"}
        ]
        courses.sort((a, b)=>a.title - b.title)
        console.log(courses)
        new Date()
        new Date(year, month, day, hours, minutes, seconds, milliseconds)
        new Date(milliseconds)

        try {
        Block of code to try
        }
        catch(err) {
        Block of code to handle errors
        }
        finally {
        Block of code to be executed regardless of the try / catch result
        }

        this:
        In a method, this refers to the owner object.
        Alone, this refers to the global object.
        In a function, this refers to the global object.
        In a function, in strict mode, this is undefined.
        In an event, this refers to the element that received the event.
        Methods like call(), and apply() can refer this to any object.
        Bind().. 


    
    
    
    Sequencing
        DOM Manipuation
        Data Types
            - Primitives: string, number & boolean
            - Objects and functions?
        Troubleshooting
        Dynamic and Mutable objects
        Prototypes & Prototypal nature (with diagram)
        Loosely typed (overloading)
        Inheritance and polymorphism
        Setter & getters
        Classes: Math, Date, String
        Arrays
        ABC functions
        this
        Exception & Errors
        Regular Expressions
        Arrow Functions
        
        AJAX
        Global objects 
        Closure, Memoization, Currying (practical examples)
        Async -> Callback, promises, Async/Await
        ES6 features
        Modules, Webpack & Gulp
        Progressive web apps (PWAs)






