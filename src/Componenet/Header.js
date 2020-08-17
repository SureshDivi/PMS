import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Header() {
  const dashbordHandler = () => {
    alert("DashBoard Details");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
        <a className="navbar-brand" href="#">
          <span
            style={{
              fontSize: "25px",
              fontFamily: "semi-bold",
              color: "#4cd221d6",
            }}
          >
            PMS
          </span>
        </a>

        <a className="navbar-brand" href="/">
          <span style={{ fontSize: "25px", fontFamily: "semi-bold" }}>
            <span style={{ color: "#17a2b8" }}>Login</span>
          </span>
        </a>
        <a className="navbar-brand" href="/register">
          <span style={{ fontSize: "25px", fontFamily: "semi-bold" }}>
            <span style={{ color: "#17a2b8" }}>Register</span>
          </span>
        </a>
        <a className="navbar-brand" href="/logout">
          <span style={{ fontSize: "25px", fontFamily: "semi-bold" }}>
            <span style={{ color: "#17a2b8", justifyContent: "end" }}>
              Logout
            </span>
          </span>
        </a>
        <div style={{ display: "none" }}>
          <button
            className="btn btn-success ml-auto mr-1"
            type="button"
            onClick={dashbordHandler}
          >
            DashBoard
          </button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        ></div>
      </nav>
    </div>
  );
}

export default Header;
