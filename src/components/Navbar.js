import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';


 const Navbar = () =>{
  return(
    <nav className="nav-wrapper">
        <div className="container">
            <div className="left">
              <Link to="/" className="brand-logo">P I Z Z A</Link>
            </div>

            <ul className="right">
                <li><Link to="/">1-800-263-1775</Link></li>
                <Cart />
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
