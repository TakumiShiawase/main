import React from "react";


function Navbar(props) {
    return (
      <header className="header">
        <div className="logo"><a href="#" className="back_button"><p><i class="arrow left"></i></p></a>logo</div>
        <nav className="navbar">
          <ul className="navbar-nav">
          { props.children} </ul>
        </nav>
      </header>
    );
  };
  

export default Navbar;