import React from "react";

function Ai() {
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
                    <div className="col-md-6">
                      <div className="bedrock-image">
                        <img
                          src="/assets/beared-guy.png"
                          alt="bearedguy"
                          className="img-fluid"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="bedrock-content">
                        <p className="lead">
                          Upload<span>- Admin</span>
                        </p>
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

export default Ai;
