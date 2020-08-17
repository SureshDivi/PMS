import React from "react";

function Footer() {
  return (
    <div id="footer-container" className="footer-container">
      <div
        id="footer-wrap"
        className="footer-container-wrap"
        style={{ width: "1000px" }}
      >
        <span class="footer-container-wrap-show">
          <a
            id="btn-support"
            className="btn-app"
            target="_blank"
            style={{ display: "inline" }}
          ></a>
          <a id="btn-app" className="btn-app"></a>
        </span>
      </div>
    </div>
  );
}
export default Footer;
