import React from "react";
import NewPackages from "./NewPackages";
import "./Packages.css";

export default function Packages() {
  return (
    <>
      <div className="documents-page-container pb-3 ">
        <div className="d-flex justify-content-between documents-page-heading py-5 px-4">
          <div className="d-flex flex-column">
            <h4>Hello! Welcome to Bedrock.</h4>
            <p>
              You are currently using the invite-only product version of
              Bedrock.
            </p>
          </div>
        </div>

        <div
          className="m-3 package-page-content d-flex p-0 justify-content-between align-items-center"
          style={{ minHeight: "7.2rem" }}
        >
          <div className="ps-3 d-flex gap-5 align-items-center package-page-img-container">
            <img className="pb-3" src="/assets/beared-guy.png" alt="" />
            <p className="ps-5 d-flex user-admin gap-2 ">
              user name <span>- Admin</span>
            </p>
          </div>
        </div>

        <div className="container No-1 ">
          <div className="row align-items  ">
            <div className="col-md-3 ">
              <button className="img-margin container-button-color1">
                <p> Create a new task for Line up</p>
                <span>
                  <img src="/assets/plusicon1.png" />
                </span>
              </button>
            </div>
            <div className="col-md-3">
              <button className="img-margin container-button-color2">
                <p>Add documents for Lineup</p>
                <span>
                  <img src="/assets/plusicon1.png" />
                </span>
              </button>
            </div>
            <div className="col-md-3">
              <button className="img-margin container-button-color3">
                <p> Add issued shares Line up</p>
                <span>
                  <img src="/assets/plusicon1.png" />
                </span>
              </button>
            </div>
            <div className="col-md-3">
              <button className="container-button-color5  img-margin">
                <p>Add proof's for Line up</p>
                <span>
                  <img src="/assets/plusicon1.png" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <hr />

        <div className="container No-3 ">
          <div className="row align-items ">
            <div className="col-md-4">
              <button className=" img-margin container-button-color2">
                <p> Demo NDA Document.docx</p>
                <span>
                  <img src="/assets/dot.png.png" />
                </span>
              </button>
            </div>
            <div className="col-md-4">
              <button className=" img-margin container-button-color2">
                <p>Shares Purchase Agreement</p>
                <span>
                  <img src="/assets/dot.png.png" />
                </span>
              </button>
            </div>
            <div className="col-md-3">
              <button className=" img-margin container-button-color2">
                <p> Shareholder Captable.xls</p>
                <span>
                  <img src="/assets/dot.png.png" />
                </span>
              </button>
            </div>
            <div className="col-1 my-1">
              <button
                className="img-margin container-button-color6"
                data-bs-toggle="modal"
                data-bs-target="#package"
              >
                <span>
                  <img src="/assets/plusicon1.png" />
                </span>
                <p>more</p>
              </button>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="package"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "44%",
              maxWidth: "unset",
            }}
          >
            <div className="modal-content Newpackage-Width">
              {/* <div className="modal-header"> */}
              {/* <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div> */}
              <div className="modal-body" style={{ padding: "2% 15%" }}>
                <NewPackages />
              </div>
              {/* <div className="modal-footer Createflex">
                <button
                  type="button"
                  className="btn btn-primary "
                  style={{ width: "11vw" }}
                >
                  <p>Create</p>
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container No-4 ">
          <div className="row align-items ">
            <div className="col-md-4">
              <button className=" img-margin container-button-color3">
                <p>SpaceX issued Shares(5/1/22)</p>{" "}
                <span>
                  <img src="/assets/dot.png.png" />
                </span>
              </button>
            </div>
            <div className="col-md-4">
              <button className=" img-margin container-button-color3">
                <p>SpaceX issued Shares(1/1/22)</p>
                <span>
                  <img src="/assets/dot.png.png" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="container No-5 ">
          <div className="row align-items ">
            <div className="col-md-3">
              <button className=" img-margin container-button-color5">
                <p> Onfido identify proof </p>
                <span>
                  <img src="/assets/plusicon1.png" />
                </span>
              </button>
            </div>
            <div className="col-md-3">
              <button className=" img-margin container-button-color5">
                <p>Pitchbook shares data Feed Proof</p>
                <span>
                  <img src="/assets/plusicon1.png" />
                </span>
              </button>
            </div>
            <div className="col-md-3">
              <button className=" img-margin container-button-color5">
                <p> DocuSign Digital signature Proof</p>
                <span>
                  <img src="/assets/plusicon1.png" />
                </span>
              </button>
            </div>
            <div className="col-1 my-1">
              <button
                className="img-margin container-button-color6"
                data-bs-toggle="modal"
                data-bs-target="#package"
              >
                <span>
                  <img src="/assets/plusicon1.png" />
                </span>
                <p>more</p>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mx-5 No-1">
          <div className="col-sm-5">
            <div className="card heightCard1">
              <div className="card-body">
                <div className="img-margin1">
                  <nav
                    className="Packages-breadcrumb-container"
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb m-0 p-0">
                      <li
                        className="breadcrumb-item active breadcrumb1-item-css"
                        aria-current="page"
                      >
                        <p style={{ color: "white" }}>Task</p>
                      </li>
                      <li
                        className="breadcrumb-item active breadcrumb1-item-css"
                        aria-current="page"
                      >
                        <p className="straightPara">
                          Identification request for SpaceX purchase
                        </p>
                      </li>
                    </ol>
                  </nav>
                  <span>
                    <img src="/assets/dot.png.png" alt="" />
                  </span>
                </div>
                <h6 className="card-text textColor">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt eligendi, iste quasi tempora quo at iure reiciendis
                  architecto content.
                </h6>
                <div className="d-flex Packages-card-add-menu align-items-center mt-4 mb-2">
                  <div className="first"></div>
                  <div className="second"></div>
                  <div className="third"></div>
                  <div>
                    <img src="/assets/PlusIcon.png" alt="" />
                  </div>
                </div>
                <div className="conatiner my-4">
                  <button className="exportBtn">Export</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card ">
              <div className="card-body heightCard2">
                <div className="img-margin1">
                  <nav
                    className="Packages-breadcrumb-container"
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb m-0 p-0">
                      <li
                        className="breadcrumb-item active breadcrumb1-item-css"
                        aria-current="page"
                      >
                        <p style={{ color: "white" }}>Task</p>
                      </li>
                      <li
                        className="breadcrumb-item active breadcrumb1-item-css"
                        aria-current="page"
                      >
                        <p className="straightPara">
                          Share purchase agreement for SpaceX purchase
                        </p>
                      </li>
                    </ol>
                  </nav>
                  <span>
                    <img src="/assets/dot.png.png" alt="" />
                  </span>
                </div>

                <h6 className="card-text textColor">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt eligendi, iste quasi tempora quo at iure reiciendis
                  architecto content.
                </h6>
                <div className="d-flex Packages-card-add-menu align-items-center mt-4 mb-2">
                  <div className="first"></div>
                  <div className="second"></div>
                  <div className="third"></div>
                  <div>
                    <img src="/assets/PlusIcon.png" alt="" />
                  </div>
                </div>
                <div className="conatiner my-3">
                  <button className="exportBtn">Export</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
