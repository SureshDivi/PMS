import React, { useState } from "react";
import "../styles/LoginStyle.css";
import { setUserSession } from "../Utils/Common";

function Register(props) {
  let doc = document.getElementById("regform");
  let today = new Date();
  let curdate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [selectclass, setselectclass] = useState({
    name: false,
    uname: false,
    pas: false,
    addr: false,
    email: false,
  });
  const [errumsg, seterrumsg] = useState("");
  const [errunmsg, seterrunmsg] = useState("");
  const [erremmsg, seterremmsg] = useState("");
  const [userDetails, setuserDetails] = useState({ regdate: curdate });

  const changeValuename = (e) => {
    if (e.target.value !== "" && e.target.value.match("^[a-zA-Z]+$") === null) {
      document.getElementById("err1").style.display = "block";
      seterrumsg("*Name should contain only alphabets");
    } else if (e.target.value.match("^[a-zA-Z]+$") !== null) {
      document.getElementById("err1").style.display = "none";
      seterrumsg("");
      setuserDetails({ ...userDetails, name: doc.elements[0].value });
    }
  };

  const changeValueuname = (e) => {
    if (e.target.value !== "" && e.target.value.match("^[a-zA-Z]+$") === null) {
      document.getElementById("erruname").style.display = "block";
      seterrunmsg("*User name should contain only alphabets");
    } else if (
      e.target.value === "" ||
      e.target.value.match("^[a-zA-Z]+$") !== null
    ) {
      document.getElementById("erruname").style.display = "none";
      seterrunmsg("");
      setuserDetails({ ...userDetails, username: doc.elements[1].value });
    }
  };

  const changeValueemail = (e) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(e.target.value) === false && e.target.value !== "") {
      document.getElementById("erremail").style.display = "block";
      seterremmsg("*Enter valid email address");
    } else {
      document.getElementById("erremail").style.display = "none";
      seterremmsg("");
      setuserDetails({ ...userDetails, email: doc.elements[4].value });
    }
  };

  const handleSubmit = (e) => {
    if (errumsg !== "" || errunmsg !== "" || erremmsg !== "") {
      alert("Please Enter proper details");
      e.preventDefault();
    } else {
      // let randnum = Math.random()
      //   .toString()
      //   .concat("0".repeat(3))
      //   .substr(2, 3)
      //   .toString();
      // setUserSession("R-" + randnum, userDetails);
      // props.history.push("/success");
      setUserSession(userDetails);
      props.history.push("/success");
    }
  };

  return (
    <form
      className="form-wrapper"
      id="regform"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2 style={{ textAlign: "center", fontSize: "18px" }}>REGISTER</h2>
      <div className={`field ${selectclass.name ? "active" : ""}`}>
        <input
          id={1}
          type="text"
          name="Name"
          placeholder="Enter Name"
          onChange={changeValuename}
          onFocus={() => setselectclass({ name: true })}
          onBlur={() => setselectclass({ name: false })}
          required
        />
        <label htmlFor={1}>{"Name"}</label>
      </div>
      <div>
        <label style={{ display: "none", color: "darkred" }} id="err1">
          {errumsg}
        </label>
      </div>{" "}
      <br />
      <div className={`field ${selectclass.uname ? "active" : ""}`}>
        <input
          id={2}
          type="Username"
          placeholder="Enter Username"
          onChange={changeValueuname}
          onFocus={() => setselectclass({ uname: true })}
          onBlur={() => setselectclass({ uname: false })}
          required
        />
        <label htmlFor={2}>{"Username"}</label>
      </div>{" "}
      <div>
        <label style={{ display: "none", color: "darkred" }} id="erruname">
          {errunmsg}
        </label>
      </div>
      <br />
      <div className={`field ${selectclass.pas ? "active" : ""}`}>
        <input
          id={3}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setuserDetails({ ...userDetails, password: e.target.value });
          }}
          onFocus={() => setselectclass({ pas: true })}
          onBlur={() => setselectclass({ pas: false })}
          required
        />
        <label htmlFor={3}>{"Password"}</label>
      </div>{" "}
      <br />
      <div className={`field ${selectclass.addr ? "active" : ""}`}>
        <input
          id={4}
          type="text"
          placeholder="Enter Address"
          onChange={(e) => {
            setuserDetails({ ...userDetails, address: e.target.value });
          }}
          onFocus={() => setselectclass({ addr: true })}
          onBlur={() => setselectclass({ addr: false })}
          required
        />
        <label htmlFor={4}>{"Address"}</label>
      </div>
      <br />
      <div className={`field ${selectclass.email ? "active" : ""}`}>
        <input
          id={5}
          type="text"
          placeholder="Enter Email Address"
          onChange={changeValueemail}
          onFocus={() => setselectclass({ email: true })}
          onBlur={() => setselectclass({ email: false })}
          required
        />
        <label htmlFor={5}>{"Email Address"}</label>
      </div>
      <div>
        <label style={{ display: "none", color: "darkred" }} id="erremail">
          {erremmsg}
        </label>
      </div>
      <br />
      <div className="field active disabled">
        <input id={6} type="text" placeholder={curdate} disabled={true} />
        <label htmlFor={6}>{"Registration Date"}</label>
      </div>
      <br />
      <select
        onChange={(e) => {
          setuserDetails({ ...userDetails, acctype: e.target.value });
        }}
        id="Acount Type"
        className="field"
        style={{ fontWeight: "bold", fontSize: "16px" }}
        required
      >
        <option value="">Acount Type</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
      </select>
      <br />
      <br />
      <div
        className="field"
        style={{
          width: "100%",
          background: "#17a2b8",
          height: "90%",
        }}
      >
        <input type="submit" value="SUBMIT" style={{ cursor: "pointer" }} />
      </div>
      <br />
    </form>
  );
}

export default Register;
