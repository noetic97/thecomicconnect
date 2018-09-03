import React from 'react';

const Header = () => {
  return (
    <header>
      {/* <img src="https://i.kym-cdn.com/entries/icons/mobile/000/003/448/Fuck-headshots.jpg" alt=""/> */}
      <h1 className="main-title">The Comic Connect</h1>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#">New Comics</a>
          </li>
          <li>
            <a href="#">Reading Lists</a>
          </li>
          <li>
            <a href="#">Saved Comics</a>
          </li>
          <li>
            <a href="#">Imprints</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Secret</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
