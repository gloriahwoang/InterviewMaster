import "./LoginStyles.css";

const LoginContainer = () => {
    return (
        <div className='login-background'>
            <div className='login'>
                <h1>Login</h1>
                <p>Don't have an account?</p>
                <a href="./signup" className='registerhere'>
                    Register here.
                </a>

                <form>
                    <label for='email'>Email</label>
                    <input type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
                    <label for='password'>Password</label>
                    <input type='password' placeholder='**********' id='password' name='password'/>
                    <button>Login</button>
                </form>
            </div>
        </div>



    );
};

export default LoginContainer;