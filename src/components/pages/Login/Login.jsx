import "./login.css";
import SocialLogin from "./loginPages/SocialLogin";
import InputField from "./loginPages/InputField";
import 'react-material-symbols/rounded'; 


const Login = () => {
  return (
    <div className="box-login">
      <div className="login-container">
        <h2 className="form-title">Log in with</h2>
        <SocialLogin />

        <p className="separator">
          <span>or</span>
        </p>

        <form action="#" className="login-form">
          <InputField type="email" placeholder="Email address" icon="" />
          <InputField type="password" placeholder="Password" icon="" />

          <a href="#" className="forgot-password-link">
            Forgot password?
          </a>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        <p className="signup-prompt">
          Don&apos;t have an account?{" "}
          <a href="#" className="signup-link">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
