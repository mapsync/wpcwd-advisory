import React from 'react'
import { Link } from 'gatsby'
import { ExternalLink } from 'react-feather';

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src="/img/logo.png" alt="Wood Creek Water District" />
        </Link>
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-start has-text-centered">
        <Link className="navbar-item" activeClassName="active" to="/">
          Alerts
        </Link>
        <Link className="navbar-item" activeClassName="active" to="/map">
          Map
        </Link>
        <Link className="navbar-item" activeClassName="active" to="/contact">
          Contact
        </Link>
        <a  className="navbar-item" rel="noopener noreferrer" href="https://smartbillcorp.com/oa/frmLogin.aspx?ws=winchesterky" target="_blank">
          Bill Pay&nbsp;<ExternalLink size={16}/>
        </a>
      </div>
      </div>
    </div>
  </nav>
  )}
}

export default Navbar
