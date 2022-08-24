import React from "react";
import "./Error.css";

export default function Maintenance() {
  return (
    <div>
      <div className="maintenance-page  d-flex justify-content-center "></div>
      <div className="maintenance-footer-page d-flex flex-column justify-content-center text-align-center gap-3">
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
          <h1>Hang on!We are under Maintenance</h1>
          <p>
            It will not take a long time till we get the error fiked. We wii
            live again in
          </p>
          <h1>00 : 04 : 13 : 39</h1>
          <form className="form-inline gap-3">
            <div className="form-group mx-sm-3 mb-2 mx-3">
              <input
                type="mail"
                className=" maintainance-form-page"
                placeholder="Enter your mail"
              />
              <button className="maintainance-notification gap-5">
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
