Workouts & Users -> add workout, register user .....
    1. Express and route create
    2. Mongoose (structure) 
        a. Create a connection
        b. Define a Schema and Model
        c. Use Model methods
    3. Middleware
    4. express.Router

    Structure
        - controller layer : logic -> async/await syntax (easy to read)
        - routes layer: configuration of http methods and mapping with functions
        - models layer: schema definitions, schema methods/middleware
        - error handler (try, catch, middleware)
        - middleware (auth: verification of token and access )
    Packages
        colors: troubleshooting, color coding logs
        bcrypt: ecryption of password and verification
        dotenv: global configuration (single place config) -> by default .env
        jsonwebtoken: protecting our routes/allowing only authenticated users

    Error Handling
        1. Dedicated error handler middleware, possibly max error handling
        2. Explicit error, implicit errors (common handler)
    
    Authorization
        1. Make provision for role inside users
        2. Middleware authorize to allow only restricted roles


    Entity Relationships
        1. Subdocument: ParentEntity->ChildEntity User->Addresses
        2. Association (one-to-one): Workout(userid) - User

        select - projection.. selection of limited fields
        sort - 
        populate - populate ref entity data




