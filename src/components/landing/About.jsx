import React from "react";
// import Doc from "../../assets/doctors2.png";
// import Logo from "../../assets/web-logo2.png";
import Button from "../../layouts/Button";

function About() {
  return (
    <>
      <div className="flex flex-col justify-center h-2/5 rounded-3xl shadow-sm bg-gradient-to-t from-green-100 to-blue-200 items-center text-center">
        <div className="text-area flex flex-col w-3/4 justify-center items-center pl-20 ">
          <div className="slog rounded-full flex w-1/5 justify-center px-3 py-2 ">
            {/* <img src={Logo} alt="" /> */}
            logo section
          </div>
          <div className="title text-5xl py-3 w-2/4">
            <h1 className="font-semibold">We're changing the whole game.</h1>
          </div>
          <div className="description text-slate-400"></div>
          <div className="book py-2">
            <Button title="Connect with our Professionals ↗" />
          </div>
        </div>
        <div className="flex justify-center image-area  w-3/4 ">
          {/* <img style={{ height: "50vh" }} src={Doc} alt="" /> */}
          image area
        </div>
      </div>
    </>
  );
}

export default About;
