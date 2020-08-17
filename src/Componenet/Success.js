import React from "react";
import "../styles/LoginStyle.css";

const Success = (props) => {
  return (
    <div>
      <h2 style={{ fontSize: "24px" }}>
        SUCCESSFULLY REGISTERED.......PLEASE TRY LOGING IN
      </h2>
      {/* <div
        className="field"
        style={{ width: "30%", background: "green", height: "90%" }}
      >
        <input
          type="button"
          value="LOGIN"
          style={{ cursor: "pointer" }}
          onClick={() => props.history.push("/")}
        />
      </div> */}
    </div>
  );
};

export default Success;
