import React from "react";
import "../Bedrock/Bedrock.css";

export default function Bedrock() {
  return (
    <div className="bedrock">
      <div className="container">
        <div className="row">
          <section className="bedrockProfile">
            <div className="container">
              <div className="row bedrock-row">
                <div className="col-md-6">
                  <div className="bedrock-image">
                    <img
                      src="./assets/beared-guy.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="bedrock-content">
                    <p className="lead">
                      user name<span>- Admin</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="bedrockIntro">
            <div className="container">
              <div className="row bedcu">
                <div className="col-md-12">
                  <div className="row bedrow">
                    <div className="col-md-6">
                      <div className="bedrock-intro-heading">
                        <h4 className="text-left">Bedrock Introduction</h4>
                      </div>
                      <div className="bedrock-intro-subheading mt-2">
                        <h5 className="text-left">Hello, user name</h5>
                      </div>
                      <div className="bedrock-para mt-4">
                        <p className="lead">
                          Welcome to Bedrock, the proprietary blockchain &
                          platform ecosystem built{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bedrock-due-data">
                        <p className="lead">DUE DATE: Aug 19, 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="bedrock-item">
                        <p>Items</p>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <p>Quantity </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-left"> Price </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-right bedrock-total">Totals</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="bedrock-item">
                        <p>Items 1</p>
                        {/* <br /> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <p>5 </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-left"> $120 </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-right bedrock-total">$2,880.00</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="bedrock-item">
                        <p>Items 2</p>
                        {/* <br /> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <p>5 </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-left"> $120 </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-right bedrock-total">$2,880.00</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="bedrock-item">
                        <p>Items 3</p>
                        {/* <br /> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <p>5 </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-left"> $120 </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-right bedrock-total">$2,880.00</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="bedrock-item">
                        <p>Items 4</p>
                        {/* <br /> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <p>5 </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-left"> $120 </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-right bedrock-total">$2,880.00</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="bedrock-item">
                        <p>Items 5</p>
                        {/* <br /> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <p>5 </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-left"> $120 </p>
                    </div>
                    <div className="col-md-2">
                      <p className="text-right bedrock-total">$2,880.00</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row netrow">
                    <div className="col-md-3">
                      <div className="netAmount">
                        <h4>Net Amount</h4>
                      </div>
                    </div>{" "}
                    <div className="col-md-3">
                      <div className="netAmountp">
                        <h4>$2,880.00</h4>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-1">
                      <img
                        src="./assets/logo.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-11">
                      <p className="lead bottom-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ligula interdum tellus sed scelerisque sed habitasse
                        pharetra odio. In sem nunc ac cursus maecenas. Et
                        tincidunt ultrices non et quis elit. Libero dignissim
                        laoreet mattis mollis molestie vitae odio morbi sed.
                      </p>
                    </div>
                    <p className="lead print">
                      Please pay within 15 days. Thank you for your business.
                    </p>
                  </div>
                  <div className="row">
                    <button className="btn text-center bedrockButton">
                      Print
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
