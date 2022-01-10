import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Button = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <button className="sidebar-toggle" onClick={openSidebar}>
      <FaBars />
    </button>
  );
};

export default Button;
