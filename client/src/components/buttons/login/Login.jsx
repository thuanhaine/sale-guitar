import './Login.css';





function Login() {
    return (
        <>
            <div className="login-container">
                <div className="login-content">
                    <h1 className='login-title'>Login</h1>
                    <div className='login-input-form'>
                        <span className='login-input-span'>Username</span>
                        <input type="text" className='login-input-box' placeholder='Nhap username'></input>
                    </div>
                    <div className='login-input-form'>
                        <span className='login-input-span'>Password</span>
                        <input type="text" className='login-input-box' placeholder='Nhap Password'></input>
                    </div>
                    <button className="btn-login color-red">Login</button>
                </div>
            </div>
        </>
    )
}

export default Login;