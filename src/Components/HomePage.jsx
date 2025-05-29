import React from "react";
import "../Styles/HomePagestyle.css";
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";
import linkedin from "../Images/linkedin.svg";
import x from "../Images/x.svg";
import TCS from "../Images/TCS.svg";
import google from "../Images/google.svg";
import microsoft from "../Images/microsoft.svg";
import wipro from "../Images/wipro.svg";
import accenture from "../Images/accenture.svg";
import amazon from "../Images/amazon.svg";
import JobPortalHome from "../Images/JobPortalHome.webp";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import MonitorIcon from "@mui/icons-material/Monitor";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { Search } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const UserRegistration = (e) => {
    navigate("/Registration");
  };
  const UserLogin = (e) => {
    navigate("/Login");
  };
  return (
    <div className="page-container">
      {/* Header */}
      <header className="Homepage-header">
        <div className="logo">
          <span>Career</span> Connect
        </div>
        <nav className="nav-links">
          <a href="home">Home</a>
          <a href="jobs">Jobs</a>
          <a href="companies">Companies</a>
          <button className="btn-outline" onClick={UserLogin}>
            Log In
          </button>
          <button className="btn-primary" onClick={UserRegistration}>
            Register
          </button>
        </nav>
      </header>
      {/*Middle section  */}
      <main className="main-section">
        <div className="main-content">
          <div className="main-text">
            <h1 className="logo">
              <span>Find Your</span> Dream Job <span>Faster</span>
            </h1>
            <p>
              Discover too opportunities from leading companies. Personalized
              job matches, easy applications, real-time updates -{" "}
              <span className="span-logo">all in one place</span>
            </p>
          </div>
          <Card className="search-bar">
            <div>
              {/* <Search style={{
        position: 'absolute',
        left: 12,
        top: '50%',
        transform: 'translateY(-50%)'
      }} /> */}
              <input type="text" placeholder="      Job title, keywords or company" />
              <input
                type="text"
                placeholder="Location"
                style={{ maxWidth: "200px" }}
              />
              <button className="btn-primary">
                Explore Jobs
              </button>
            </div>
          </Card>
          <div className="main-image">
            <img src={JobPortalHome} alt="HandShake" />
          </div>
        </div>
      </main>
      <section className="company-section">
        <h2>Top Companies hiring currently</h2>
        <div className="company-list">
          <img src={google} alt="Google" />
          <img src={microsoft} alt="Microsoft" />
          <img src={wipro} alt="Wipro" />
          <img src={TCS} alt="TCS" />
          <img src={accenture} alt="Accenture" />
          <img src={amazon} alt="Amazon" />
        </div>
      </section>
      <section className="categories-section">
        <h2>Popular job categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h1>
              <MonitorIcon style={{ width: "4rem", height: "4rem" }} />
            </h1>
            <h3>Technology & IT</h3>
            <p>1350 Jobs available</p>
          </div>
          <div className="category-card">
            <h1>
              <HealthAndSafetyOutlinedIcon
                style={{ width: "4rem", height: "4rem" }}
              />
            </h1>
            <h3>Healthcare</h3>
            <p>578 Jobs available</p>
          </div>
          <div className="category-card">
            <h1>
              <TrendingUpRoundedIcon
                style={{ width: "4rem", height: "4rem" }}
              />
            </h1>
            <h3>Finance & Banking</h3>
            <p>842 Jobs available</p>
          </div>
          <div className="category-card">
            <h1>
              <CampaignRoundedIcon style={{ width: "4rem", height: "4rem" }} />
            </h1>
            <h3>Marketing & Sales</h3>
            <p>573 Jobs available</p>
          </div>
        </div>
      </section>
      <section className="stats-section">
        <div>
          <p className="stat-number">103K+</p>
          <p>Jobs available</p>
        </div>
        <div>
          <p className="stat-number">50K+</p>
          <p>Companies</p>
        </div>
        <div>
          <p className="stat-number">1M+</p>
          <p>Job seekers</p>
        </div>
      </section>
      {/*footer Section*/}
      <footer className="Homepagefooter">
        <div className="footer-grid">
          <div>
            <h6 className="logo">
              <span>Career</span> Connect
            </h6>
            <p>Connecting talented professionals with amazing opportunities</p>
          </div>
          <div>
            <h4>For Job Seekers</h4>
            <ul>
              <li>Browse jobs</li>
              <li>Companies</li>
              <li>Career advice</li>
              <li>Premium</li>
            </ul>
          </div>
          <div>
            <h4>For Employers</h4>
            <ul>
              <li>Post a job</li>
              <li>Browse candidates</li>
              <li>Subscription plans</li>
              <li>Recruitment solutions</li>
            </ul>
          </div>
          <div>
            <h4>Follow Us on</h4>
            <div className="social-icons">
              <span>
                <img src={facebook} alt="Facebook" />
              </span>
              <span>
                <img src={instagram} alt="Instagram" />
              </span>
              <span>
                <img src={linkedin} alt="LinkedIn" />
              </span>
              <span>
                <img src={x} alt="Twitter" />
              </span>
            </div>
          </div>
        </div>
        <p className="footer-note">@2025 AccureSofTech. All rights reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
