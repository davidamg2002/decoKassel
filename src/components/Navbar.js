import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Button from "./Button.js";
import { MdOutlinePerson } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { links } from "../data";

const Navbar = () => {
  const {
    showIconbox,
    setBounding,
    closeIconbox,
    setCartContent,
    setLoginBox,
  } = useGlobalContext();

  const handleBox = (e) => {
    const target = e.target;
    if (target.classList.contains("bag-icon")) {
      showIconbox();
      setCartContent(true);
      setLoginBox(false);
    } else if (target.classList.contains("person-icon")) {
      showIconbox();
      setLoginBox(true);
      setCartContent(false);
    } else {
      closeIconbox();
    }
  };

  return (
    <nav className="navbar" onMouseOver={handleBox}>
      <div className="nav-center">
        {/* sidebar toggle button  */}
        <div className="toggle-btn-container">
          <Button />
        </div>
        <div className="logo">
          <Link to="/">
            <h2>decoKassel</h2>
          </Link>
        </div>
        {/* nav icons  */}
        <div className="nav-icons">
          <div className="person-icon" onMouseOver={setBounding}>
            <MdOutlinePerson />
          </div>
          <p>
            <FiHeart />
          </p>
          <div className="bag-icon" onMouseOver={setBounding}>
            <HiOutlineShoppingBag />
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="nav-bottom-links">
          <ul className="bottom-links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <form className="search-form">
          <input type="text" name="name" id="name" placeholder="search" />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
