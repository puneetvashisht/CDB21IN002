export const USER_LOGIN = "USER_LOGIN"



const loginAction = (payload) => {
    return {
        type: USER_LOGIN,
        payload
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: USER_LOGIN,
        payload: false
    }
}

export const login = (user) => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/v1/users/login/', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(response=>{
            console.log(response);
            // set token into local storage
            localStorage.setItem('token', response.token);
            dispatch(loginAction(response.auth))

            // dispatch(startWorkoutAction(response.data));
        })
    }
}

export const register = (user) => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/v1/users/', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(response=>{
            console.log(response);
            // set token into local storage
            localStorage.setItem('token', response.token);

            //decode the logic and enable the isAdmin flag in reducer

            dispatch(loginAction(response.auth))

            // dispatch(startWorkoutAction(response.data));
        })
    }
}


