import React from "react";
import "../Bedrock-upload/Upload.css";

export default function Upload() {
  return (
    <div>
      <div className="special-page-container">
        <div className="d-flex justify-content-between special-page-heading bed-padding px-4 py-5">
          <div className="d-flex flex-column">
            <h2>Hello! Welcome to Bedrock.</h2>
            <p>
              You are currently using the invite-only product version of
              Bedrock.
            </p>
          </div>
        </div>

        <div className="bedrock">
          <div className="container">
            <div className="row">
              <section className="bedrockProfile">
                <div className="container">
                  <div className="row bedrock-row">
                    <div className="col-md-4">
                      <div className="bedrock-image">
                        <img
                          src="/assets/beared-guy.png"
                          alt="bearedguy"
                          className="img-fluid"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="bedrock-content">
                        <p className="lead">
                          Upload<span>- user name</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bedrock-upload-button">
                        <button className="btn">Upload</button>
                        <p>My Documents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bedrockUpload">
                <div className="container">
                  <div className="row card-row-2">
                    <div className="col-md-5">
                      <div className="bedrockUpload-card">
                        <div className="bedrockUpload-card-content">
                          <h3>Select a document</h3>
                          <img
                            src="/assets/bedrock-dot.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <button className="btn">
                          Click Here to Browse Files
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-md-1">
                      <img
                        src="/assets/arrow.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="row card-row">
                    <div className="col-md-5">
                      <div className="bedrockUpload-card">
                        <div className="bedrockUpload-card-content">
                          <h3>Add Document Details</h3>
                          <img
                            src="/assets/bedrock-dot.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <form>
                          <div class="mb-3">
                            <label for="" class="form-label">
                              Document Title
                            </label>
                            <input type="text" class="form-control" />
                          </div>
                          <div class="mb-3">
                            <label for="" class="form-label">
                              Document Desc
                            </label>
                            <input type="text" class="form-control" />
                          </div>

                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bedrockUpload">
                <div className="container">
                  <div className="row card-row-2">
                    <div className="col-md-5">
                      <div className="bedrockUpload-card">
                        <div className="bedrockUpload-card-content">
                          <h3>Sign Transaction</h3>
                          <img
                            src="/assets/bedrock-dot.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <button className="btn">Sign Transaction</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
