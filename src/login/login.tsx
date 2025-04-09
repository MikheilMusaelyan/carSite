import { useState } from 'react';
import './login.css'
// import * as Yup from 'yup';


export default function Login() {
    const [SignUp, setSignUp] = useState(true)
    // const validationSchema = Yup.object().shape({
    //     username: Yup.string().required('Username is required'),
    //     password: Yup.string().required('Password is required'),
    //     confirmPassword: SignUp
    //       ? Yup.string()
    //           .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //           .required('Confirm Password is required')
    //       : null,
    //   });
      
    return (
        <div className="login-main">
            <div className="login-container">
                <div className="login-image-main-wrap">
                    <div className="login-image-wrap">
                        <img src="https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" className="login-image" />
                    </div>
                </div>
                <div className="login-form">
                    <form className='form'>
                        <h2 className="login-h2">{SignUp ? 'Sign Up' : 'Login'}</h2>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        {SignUp && <input type="password" placeholder="Confirm" />}
                        <button 
                            type="button" 
                            className='message-button login-button'>
                            {SignUp ? 'Sign Up' : 'Login'}
                        </button>
                        <a 
                            onClick={() => setSignUp(!SignUp)}
                            className="signup">
                            Sign Up
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}