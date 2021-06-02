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
