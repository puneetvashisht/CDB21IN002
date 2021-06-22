import { connect } from "react-redux";
import {Form,FormControl, Button} from 'react-bootstrap'
import {useState} from 'react';
import * as actions from '../actions/user-actions';


function Login(props){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleEmailChange = (event) =>{
        console.log(event.target.value)
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) =>{
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    // const login = () =>{
    //     console.log({email, password})
    //     props.onLogin({email, password});
    //     //action dispatch
    // }

    return (
        <>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleEmailChange}  value={email} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handlePasswordChange}  value={password} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={()=>props.onLogin({email, password})}>
            Submit
        </Button>
        </Form>
        </>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (user) => dispatch(actions.login(user))
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.userReducer.isAuthenticated   
    }
}

export default connect(null, mapDispatchToProps)(Login);