import React from "react";
import style from "./Header.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row bg-primary text-white">
          <div className="col-sm-12">
            <span className="d-flex">
              <img src={logo} height="50" width="50" />
              <h1 className="ml-2">React App Template</h1>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
