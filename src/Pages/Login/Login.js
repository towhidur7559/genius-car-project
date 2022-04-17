import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from './SocialLogIn/SocialLogIn';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorElement;
    // let errorElement='';
    if (error) {

        errorElement = 
            <p className='text-danger'>Error: {error.message}</p>
       

    }





    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        // console.log(email,password)
    }
    const navigateRegister = e => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true });
        // navigate('/home')
    }
    // const resetPassword =>

    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-info mt-2'>Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="info"     type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to genius car ?<Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>please Register</Link></p>
            <p>Forget Password?<Link to='/register' className='text-danger pe-auto text-decoration-none' >Reset Password</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;