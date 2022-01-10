import React from "react";
import { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [iconboxOpen, setIconboxOpen] = useState(false);
  const [cartContent, setCartContent] = useState(false);
  const [loginBox, setLoginBox] = useState(false);
  const [rect, setRect] = useState({ top: 0, right: 0, left: 0 });

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const showIconbox = () => {
    setIconboxOpen(true);
  };
  const closeIconbox = () => {
    setIconboxOpen(false);
  };

  const setBounding = (e) => {
    const reference = e.currentTarget.getBoundingClientRect();
    const topNum = reference.bottom;
    const rightNum = reference.right;
    const leftNum = reference.left;
    setRect({ top: topNum, right: rightNum, left: leftNum });
    showIconbox();
  };
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        sidebarOpen,
        iconboxOpen,
        showIconbox,
        closeIconbox,
        setBounding,
        rect,
        cartContent,
        loginBox,
        setCartContent,
        setLoginBox,
      }}
    >
      {children}{" "}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
