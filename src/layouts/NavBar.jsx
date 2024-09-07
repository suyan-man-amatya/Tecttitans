import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

import Logo from "../assets/web-logo2.png";

function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center p-3">
        <div className="logo">
          <img className="w-14" src={Logo} alt="" />
        </div>
        <div className="items flex gap-4">
          <div className="item hover:text-green-500">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="item hover:text-green-500">
            <Link to={"/about"}>About</Link>
          </div>
          <div className="item hover:text-green-500">
            <Link to={"/carecenter"}>Care Service</Link>
          </div>
        </div>
        <div className="login">
          <Link to={"/signin"}>
            {/* <Link to={"/dashboard"}> */}
            <Button title="Login" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
