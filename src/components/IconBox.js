import React from "react";
import { useRef } from "react";
import { useGlobalContext } from "../context";
// import { Link } from "react-router-dom";

import CartContent from "./CartContent";
import LoginContent from "./LoginContent";

const IconBox = () => {
  const { iconboxOpen, rect, cartContent, loginBox } = useGlobalContext();
  const { top, right } = rect;

  return (
    <div>
      {iconboxOpen && (
        <aside className="iconbox">
          <div
            className="icon-box-header"
            style={{
              top: `${top / 2 - 10}px`,
              left: `${right - 42}px`,
              position: "fixed",
            }}
          ></div>
          <div
            className="icon-box icon-box-footer"
            style={{
              top: `${top}px`,
              left: `${right - 198}px`,
              position: "fixed",
            }}
          >
            {loginBox && <LoginContent />}
            {cartContent && <CartContent />}
          </div>
        </aside>
      )}
    </div>
  );
};

export default IconBox;
