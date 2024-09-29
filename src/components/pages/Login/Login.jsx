import "./login.css"

const Login = () => {

    
    
    return (
        <div className="login_page">
            <div className="card_login">
                <h3 className="h3_login">Sing in</h3>
                <p className="textOne_login">Stay updated your professional world</p>
                <form className="form_loginPage" id="formLogin">
                    <input type="text"  className="inputEmail_login" placeholder="Email or Phone"/>
                    <input type="text"  className="inputPass_login" placeholder="Password"/>
                    <p className="textTow_login">forgot password?</p>
                    <input type="submit" className="signInBtn"/>
                </form>
                <p className="or_login">or</p>
                <button className="signInApple">Sign in with Apple</button>
            </div>
        </div>
    )
}

export default Login