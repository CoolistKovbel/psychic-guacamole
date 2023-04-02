import React from "react";

function MainHeader() {
  return (
    <header className="main-header">
      <h2>G S W C</h2>
      <nav className="main-header-nav">
        <ul className="main-header-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#setup">Setup</a>
          </li>
          <li>
            <a href="#requirements">Requirements</a>
          </li>
          <li>
            <a href="#contact">PM</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
