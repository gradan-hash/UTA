import  { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">UTA Research</a>
      </div>
      <div
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/call-for-papers">Papers</a>
        </li>
        <li>
          <a href="/submissions">Submit</a>
        </li>
        <li>
          <a href="/peer-review">Review</a>
        </li>
        <li>
          <a href="/schedule">Agenda</a>
        </li>
        <li>
          <a href="/registration">Register</a>
        </li>
        <li>
          <a href="/virtual-conference">Virtual</a>
        </li>
        <li>
          <a href="/career-development">Career</a>
        </li>
        <li>
          <a href="/mentorship">Mentor</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
