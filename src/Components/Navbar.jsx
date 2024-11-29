import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">AIMAN</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {['Home', 'About', 'Service', 'Contact'].map((section) => (
              <li key={section}>
                <Link
                  to={section.toLowerCase()} // match the ID of each section
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} // Adjust for fixed navbar height
                  className="cursor-pointer"
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn bg-gradient-to-r from-pink-400 to-orange-300 rounded-full text-white cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
