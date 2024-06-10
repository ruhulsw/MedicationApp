import React, { useEffect, useState } from "react";
import "./css/SideBar.css";

interface SideBarProps {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ setShowSideBar, showSideBar }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (showSideBar) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 500); // Match the duration of the CSS transition
      return () => clearTimeout(timer);
    }
  }, [showSideBar]);

  const closeSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <>
      <div
        className={`SideBarOverLay ${showSideBar ? "visible" : ""}`}
        onClick={closeSideBar}
        style={{ display: visible ? "block" : "none" }}
      >
        <div
          className={`SideBar ${showSideBar ? "visible" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="SideBarItems">
            <p>Home</p>
          </div>
          <div className="SideBarItems">
            <p>Sign in</p>
          </div>
          <div className="SideBarItems">
            <p>Sign up</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
