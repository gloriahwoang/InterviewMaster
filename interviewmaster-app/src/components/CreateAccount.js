import "./CreateAccountStyles.css";

const CreateAccount = () => {
    return (
        <div className='create-background'>
            <div className='create'>
                <h1>Create a New Account</h1>
                <p>Come join InterviewMaster today! Already have an account?</p>
                <a href="./login" className='loginhere'>
                    Login here.
                </a>

                <form>
                    <label for='fullname'>Full Name</label>
                    <input type='fullname' placeholder='John Doe' id='fullname' name='fullname'/>
                    <label for='email'>Email</label>
                    <input type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
                    <label for='password'>Password</label>
                    <input type='password' placeholder='**********' id='password' name='password'/>
                    <button>Join InterviewMaster</button>
                </form>

                <p>By submitting the form you agree to InterviewMaster's</p>
                <p>Terms of Service</p>
            </div>
        </div>



    );
};

export default CreateAccount;