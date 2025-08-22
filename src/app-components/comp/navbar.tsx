import type { FC } from "react";
import "./navbar.css";
const Navbar: FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-bar">
          <img className="logo" src="#" alt="logo" />
          <h2>ICE</h2>
        </div>
        <div className="placehold">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
          </ul>
        </div>
        <input className="search" type="search" placeholder="Search..." />
        <img className="profile" src="#" alt="profile" />
      </nav>
    </>
  );
}
export default Navbar;
