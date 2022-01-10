import React from "react";
import { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { links } from "../data";

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useGlobalContext();
  const sidebarContainer = useRef(null);
  const sidebarInfo = useRef(null);

  useEffect(() => {
    const sidebarInfoHeight =
      sidebarInfo.current.getBoundingClientRect().height;
    sidebarContainer.current.style.height = `${sidebarInfoHeight}px`;
  }, []);

  return (
    <aside
      className={`${sidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      ref={sidebarContainer}
    >
      <div className="sidebar-info" ref={sidebarInfo}>
        <div className="sidebar-header">
          <button className="sidebar-close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="sidebar-content">
          {links.map((link) => {
            const { id, url, text } = link;

            return (
              <article key={id} className="sidebar-links">
                <li className="sidelinks">
                  <Link to={url}>
                    <p className="heading">{text}</p>
                  </Link>
                </li>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
