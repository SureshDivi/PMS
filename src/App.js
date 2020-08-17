import React from "react";
import "./App.css";
import Header from "../src/Componenet/Header";
import Footer from "../src/Componenet/Footer";
import Login from "../src/Componenet/Login";
import Register from "../src/Componenet/Register";
import { BrowserRouter, Route } from "react-router-dom";
import Logedin from "../src/Componenet/Logedin";
import Success from "../src/Componenet/Success";
import Logedout from "../src/Componenet/Logout";
import PublicRoute from "../src/Componenet/Routes/PublicRoute";
import PrivateRoute from "../src/Componenet/Routes/PrivateRoute";
import Dashboard from "../src/Componenet/Dashboard";

function App() {
  return (
    <div className="App" style={{ zoom: "95%" }}>

      <BrowserRouter>
        <div>
          <Header />
          <div className="content">
            {/* <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logedin" component={Logedin} />
            <Route path="/success" component={Success} />
            <Route path="/logout" component={Logedout} /> */}

            <PublicRoute exact path="/" component={Login} />
            <PublicRoute path="/register" component={Register} />
            <PrivateRoute path="/success" component={Success} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/logout" component={Logedout} />
          </div>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
