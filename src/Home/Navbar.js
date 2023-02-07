import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const navItems = (
    <React.Fragment>
      <li>
        <Link
          activeClass="active"
          to="classes"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={100}
        >
          Classes
        </Link>
      </li>

      <li>
        <Link
          activeClass="active"
          to="trainers"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={100}
        >
          Trainers
        </Link>
      </li>

      <li>
        <Link
          activeClass="active"
          to="price"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={100}
        >
          Pricing
        </Link>
      </li>

      <li>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={100}
        >
          Contact Us
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a
            href="localhost:3000"
            className="btn btn-ghost normal-case text-xl text-white font-[monospace]"
          >
            Stay Active
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-bold">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
