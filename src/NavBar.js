import React from "react";
import logo from "./logo512.png"; // Adjust the path to your image

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-700 text-gray-500 h-16 p-2">
      <a href="/">
        <img src={logo} alt="Logo" className="h-12" />
      </a>
      <div className="flex justify-center w-full gap-3">
        <a href="/projects" className="nav-link hover:text-gray-300">
          Projects
        </a>
        <a href="/contact" className="nav-link hover:text-gray-300">
          Contact
        </a>
        {/* Add more links or text here */}
      </div>
    </nav>
  );
};

export default NavBar;
