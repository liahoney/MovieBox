import React from 'react';
import style from './Navbar.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';




const Navbar = () => {
return (
    <header>
        
       
        
        <Logo />
        <nav>
          <a href="/">HOME</a>
          <a href="/signup">Singup</a>
          <a href="/login">Login</a>
       <div id="indicator"></div>
</nav>
        
    </header>
)
};

export default Navbar;
