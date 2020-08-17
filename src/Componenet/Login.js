import React, { useState } from "react";
import "../styles/LoginStyle.css";
import { getUser } from "../Utils/Common";
import { getLogindetails, setTokenSession } from "../Utils/Common";
import ReactLoading from "react-loading";

function Login(props) {
  const [userclassname, setuserclassname] = useState("field");
  const [passclassname, setpassclassname] = useState("field");
  const [load, setload] = useState(false);
  const [errmesg, seterrmesg] = useState("");
  let docu = document.getElementById("loginform");

  const handleLogsubmit = (e) => {
    setload(true);
    let usernam = docu.elements[0].value;
    console.log(usernam);
    let pass = docu.elements[1].value;
    // if (getUser() === null) {
    //   e.preventDefault();
    //   seterrmesg("*User is not Registered...Please Register");
    // } else if (usernam === getUser().username && pass === getUser().password) {
    //   seterrmesg("");
    //   props.history.push("/logedin");
    //   alert("Hi " + usernam + "" + "Successfully LogedIn");

    // }
    if (getLogindetails(usernam) === null) {
      e.preventDefault();
      seterrmesg("*User is not Registered...please Register");
    } else if (getLogindetails(usernam) === pass) {
      seterrmesg("");
      let randnum = Math.random()
        .toString()
        .concat("0".repeat(3))
        .substr(2, 3)
        .toString();
      setTokenSession("R-" + randnum, usernam);
      props.history.push("/dashboard");
      alert("R-" + randnum + usernam);
    } else {
      e.preventDefault();
      seterrmesg("*UserName or Password is Incorrect....");
    }
    setTimeout(() => {
      setload(false);
    }, 1000);
  };

  return (
    <div>
      <div>
        <form
          className="form-wrapper"
          id="loginform"
          onSubmit={handleLogsubmit}
        >
          <h2 style={{ textAlign: "center", fontSize: "18px" }}>LOGIN</h2>
          <div className={userclassname}>
            <input
              id={1}
              type="text"
              placeholder="Enter Username"
              onFocus={() => setuserclassname("field active")}
              onBlur={() => setuserclassname("field ")}
              required
            />
            <label htmlFor={1}>{"Username"}</label>
          </div>
          <br />

          <div className={passclassname}>
            <input
              id={2}
              type="password"
              placeholder="Enter Password"
              onFocus={() => setpassclassname("field active")}
              onBlur={() => setpassclassname("field")}
              required
            />
            <label htmlFor={2}>{"Password"}</label>
          </div>
          <br />
          <div
            className="field"
            style={{ height: "100%", background: "transparent" }}
          >
            <input
              type="submit"
              value="LOGIN"
              style={{ background: "#17a2b8" }}
            />
            <div className="loader">
              {load && <ReactLoading color="#513882" />}
            </div>
            <br />
            <br />
          </div>
          <br />
          <div>
            <label className="or"> OR </label>
          </div>
          <br />
          <div className="field" style={{ height: "100%" }}>
            <input
              type="button"
              value="REGISTER"
              style={{ background: "#17a2b8" }}
              onClick={() => props.history.push("/register")}
            />
          </div>
          <br />
        </form>
        <div id="errdiv">
          <span className="errmsg">{errmesg}</span>
        </div>
      </div>
      <div>{/* <Logedin user={props.usernam} /> */}</div>
    </div>
  );
}

export default Login;
