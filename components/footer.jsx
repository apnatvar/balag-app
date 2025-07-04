import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../pages/styles/components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="column left">
          <ul className="links">
            <li><a href="#" className="link">About</a></li>
            <li><a href="#" className="link">Gallery</a></li>
            <li><a href="#" className="link">Blogs</a></li>
            <li><a href="#" className="link">Contact Us</a></li>
            <li><a href="#" className="link">Work With Us</a></li>
          </ul>
        </div>
        <div className="column right">
          <p className="title">Connect with us</p>
          <div className="social-icons">
            <a href="#" className="social-link"><FaFacebook /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>Created by <span className="creator">Brownsmith Dynamics</span></p>
      </div>
    </footer>
  );
};

