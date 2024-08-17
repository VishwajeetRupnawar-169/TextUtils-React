import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// Navbar.defaultProps = {       // this can also be done preferably by using     -->export default function Navbar({title ="Set title here",aboutText="Set About here"}) {...
//     title: "Set title here",                                                 |
//     aboutText: "About"                                                       |--->if using this then use {title} and {aboutText} directly
//   };
            // |
            // |
            // ------>If using this then use props.title and props.aboutText and  -->export default function Navbar(props) {...



export default function Navbar(props) {
  return (                                                                       
    // <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>      B'coz we want to change navbar to dark and light mode so we use javascript here using {` `}and ${}
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>      
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" >{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary me-2" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-2`}>
          <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
        </div>
        
      </div>
    </div>
  </nav>
  )
}

Navbar.defaultProps = {
               title: "Set title here",                                                 
      aboutText: "About"                                                           
     };
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};



