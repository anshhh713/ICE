import type { FC } from "react";

import Snowflake from "../../../public/ice.svg?react";
import { Search } from "lucide-react";
import "./navbar.css";
const Navbar: FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-bar">
          <Snowflake className="logo" />
          <h2>ICE</h2>
        </div>
        <div className="placehold">
          <ul>
            <li>
              <a href="" className="placeholde">
                Home
              </a>
            </li>
            <li>
              <a href="" className="placeholde">
                Contact Us
              </a>
            </li>
            <li>
              <a href="" className="placeholde">
                About
              </a>
            </li>
            <li>
              <a href="" className="placeholde">
                Features
              </a>
            </li>
          </ul>
        </div>
        <div className="search-bar">
          <input className="search" type="search" placeholder="Search..." />
          <button type="submit" className="search-button">
            <Search className="search-b" />
          </button>
        </div>
        <img className="profile" src="#" alt="profile" />
      </nav>
    </>
  );
};
export default Navbar;
