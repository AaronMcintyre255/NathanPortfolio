import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="container mx-auto px-4">
        <ul className="flex justify-between py-4">
          <li>
            <Link to="/" className="text-lg font-semibold hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/biography"
              className="text-lg font-semibold hover:underline"
            >
              Biography
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
