import React from "react";
import "../styles/LoginStyle.css";
import { removeUserSession } from "../Utils/Common";
import { deleteToken } from "../Utils/Common";

const Logedout = (props) => {
  //removeUserSession();
  //document.getElementById("headtext").innerHTML = "";
  deleteToken();

  return (
    <div>
      <h2 style={{ fontSize: "18px" }}>SUCCESSFULLY LOGGED OUT.....</h2>
      <input
        type="button"
        value="LOGIN"
        style={{ cursor: "pointer", color: "#17a2b8" }}
        onClick={() => props.history.push("/")}
      />
    </div>
  );
};

export default Logedout;
