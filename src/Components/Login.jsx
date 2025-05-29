// import react from 'react';
import { useNavigate } from "react-router-dom";
import "../Styles/Loginstyle.css";
import linkedin from "../Images/linkedin.svg";
import google_g from "../Images/google_g.jpg";
import login from "../Images/login.svg";

const Login = () => {
  const navigate = useNavigate();
  const UserRegistration = (e) => {
    navigate("/Registration");
  };

  return (
    <div className="loginpage-container">
      {/*Header */}
      <header className="Login-header">
        <div className="logo">
          <span>Career</span> Connect
        </div>
        <nav className="loginnav-links">
          <a href="jobs">Jobs</a>
          <a href="companies">Companies</a>
          <button className="btn-primary" onClick={UserRegistration}>
            Register
          </button>
        </nav>
      </header>
      {/*Main Section */}
      <main className="login-section">
        <div className="login-content">
          <div className="login-text col-6">
            <h1>
              Welcome Back, to <span> Career Connect</span>
            </h1>
            <p>Your gateway to professional opportunities</p>
             <div className="illustration"><img
              src={login}
              alt="welcome Illustration"
            /></div>
          </div>
          {/*Form section */}
          <div className="login-fillUp col-6">
            <div>
              <h3>Log In</h3>
              <p>Please enter your details</p>
              <div>
                <label className="m-1 row">Email Id : </label>
                <input
                  type="email"
                  //   onChange={(e) => setemail(e.target.value)}
                  placeholder="Enter email id"
                  required
                ></input>
              </div>
              <div>
                <label className="m-1 row">Password :</label>
                <input
                  type="Password"
                  //   onChange={(e) => setLPass(e.target.value)}
                  placeholder="Enter Password  "
                  required
                ></input>
                <p className="forgotpass">
                  <a href="forgot_password"> Forgot Password</a>
                </p>
              </div>
              <div>
                <div>
                  <button
                    className="loginbtn-primary"
                    // onClick={loginUser}
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
                <div className="optionlogin">or continue with</div>
                <div>
                  <button className="loginbtn-outline">
                    <img src={google_g} alt="Google" />
                     Google
                  </button>
                  <button className="loginbtn-outline">
                    <img src={linkedin} alt="LinkedIn" />
                     Continue with LinkedIn
                  </button>
                </div>
                <div className="optionlogin">
                  <p>
                    Don't have an account?<a href="register"> Register</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
