import React, { useState } from "react";
import "./css/Header.css";
import { IoIosSunny } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import SideBar from "./SideBar";
import { TiMediaRecordOutline } from "react-icons/ti";

const Header: React.FC = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="MainHeader">
        <div className="Temp">
          <IoIosSunny className="TempIcone" />
          <p>86</p>
          <TiMediaRecordOutline
            style={{ position: "absolute", top: 20, left: 37 }}
          />
        </div>
        <div>Logo</div>
        <div onClick={toggleSideBar}>
          <RxHamburgerMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
