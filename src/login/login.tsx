import './login.css'

export default function Login() {
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
                        <h2 className="login-h2">Login</h2>
                        <input type="text" placeholder="Username" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit" className='message-button login-button'>Login</button>
                        <a className="signup">Sign up</a>
                    </form>
                </div>
            </div>
        </div>
    );
}