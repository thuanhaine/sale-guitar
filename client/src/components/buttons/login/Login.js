import './Login.scss';





function Login() {
    return (
        <>
            <div className="container">
                <div className="content">
                    <h1 className='title'>Login</h1>
                    <div className='input-form'>
                        <span className='input-span'>Username</span>
                        <input type="text" className='input-box' placeholder='Nhap username'></input>
                    </div>
                    <div className='input-form'>
                        <span className='input-span'>Password</span>
                        <input type="text" className='input-box' placeholder='Nhap Password'></input>
                    </div>
                    <button className="btn-login color-red">Click Me !!</button>
                </div>
            </div>
        </>
    )
}

export default Login;