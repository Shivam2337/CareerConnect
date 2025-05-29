//import react from 'react';
import { useNavigate } from "react-router-dom";
import "../Styles/Registerstyle.css";
import register from "../Images/register.svg";

const Registration = () => {
  const navigate = useNavigate();
  const UserLogin = (e) => {
    navigate("/Login");
  };
  return (
    <div className="registerpage-container">
      {/*Header */}
      <header className="register-header">
        <div className="logo">
          <span>Career</span> Connect
        </div>
        <nav className="registernav-links">
          <a href="jobs">Jobs</a>
          <a href="companies">Companies</a>
          <button className="btn-primary" onClick={UserLogin}>
            Log In
          </button>
        </nav>
      </header>
      {/*Main Section */}
      <main className="register-section">
        <div className="register-content">
          <div className="register-text col-6">
            <h1>
              Welcome Back, to <span> Career Connect</span>
            </h1>
            <p>Your gateway to professional opportunities</p>
            <div className="illustration">
              <img src={register} alt="welcome Illustration" />
            </div>
          </div>
          {/*Form section */}
          <div className="register-fillUp col-6">
            <div>
              <h3>Register</h3>
              <p>Please enter your details</p>
              <div>
                <label className="m-1 row">Full Name</label>
                <input
                  type="name"
                  //   onChange={(e) => setemail(e.target.value)}
                  placeholder="Enter your full name"
                  required
                ></input>
              </div>
              <div>
                <label className="m-1 row">Email Id</label>
                <input
                  type="email"
                  //   onChange={(e) => setemail(e.target.value)}
                  placeholder="Enter your email id"
                  required
                ></input>
              </div>
              <div>
                <label className="m-1 row">Mobile Number</label>
                <input
                  type="number"
                  //   onChange={(e) => setemail(e.target.value)}
                  placeholder="Enter your mobile number"
                  required
                ></input>
              </div>
              <div>
                <label className="m-1 row">Create Password</label>
                <input
                  type="Password"
                  //   onChange={(e) => setLPass(e.target.value)}
                  placeholder="Create a Password"
                  required
                ></input>
              </div>
              <div>
                <label className="m-1 row">Confirm Password</label>
                <input
                  type="Password"
                  //   onChange={(e) => setLPass(e.target.value)}
                  placeholder="Confirm your Password"
                  required
                ></input>
              </div>
              <div>
                <label className="m-1 row">I am a........</label>
                <input
                  type="check"
                  //   onChange={(e) => setLPass(e.target.value)}
                  placeholder="Confirm your Password"
                  required
                ></input>
              </div>
              <div>
                <div>
                  <button
                    className="registerbtn-primary"
                    // onClick={loginUser}
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <div className="optionlogin">
                  <p>
                    Already have an account?<a href="login"> Log In</a>
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

export default Registration;
