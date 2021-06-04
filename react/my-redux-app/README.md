# Redux
    Store: 
        Single store
        Contains all the application state
        createStore method creates a store
        store.subscribe to listen to any state changes (store.getState)     
    Reducers:
        createStore(reducer(s)): multiple reducers
        to modify specific state in a immutable way
        reducer recieves action object
    Action:
        {type:, payload:}
        store.dispatch(action)

    React-Redux
        1. install redux react-redux
        2. create reducer and store
        3. Wrap App with Provider tag to make store available to entire app
        4. connect function -> mapStateToProps (extract state into props), mapDispatchToProps (makes dispatch available as props)
        5. Use props instead of state in component


    React : 
React Introduction,The Build Workflow, Create React app using npm and react project folder structure, JSX and React Components, Functional and Class-based Component, Styling React Components, Components with Props, Working with List and conditions, Events Handling, State & State Manipulation, Component Lifecycle, Forms and Form validations, Environment Variables,
Http Requests in React, Lifecycle Hooks , Routing and SPAs, Lazy Loading, Redux state management,
Multiple Reducers, Middleware,Redux Saga.
