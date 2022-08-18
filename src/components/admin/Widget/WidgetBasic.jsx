import React from "react";
import "./WidgetBasic.css";
import Progressbar from "../../common/Progress_bar";
import StarRatings from "react-star-ratings";

export default function Widget() {
  // class Foo extends Component {
  //   changeRating( newRating, name ) {
  //     this.setState({
  //       rating: newRating
  //     });
  //   }
  // }

  return (
    <div className="widget-basic-page-container">
      <div className="d-flex justify-content-between widget-basic-page-heading py-5 px-4">
        <div className="d-flex flex-column">
          <h2>Hello Devs !</h2>
          <p>
            We are on a mission to help developers like you to build beautiful
            projects for FREE.
          </p>
        </div>
        <div>
          <button>
            <img src="/assets/VoiceIcon.png" alt="" />
            Announcments
          </button>
        </div>
      </div>

      <div className="row widget-card p-3">
        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <p className="widget-heading-para d-flex justify-content-center text-gray">
              AVG Impressions
            </p>
            <div className="d-flex justify-content-between">
              <h4>2.648</h4>
              <img
                className="arrowpicture1"
                src="/assets/Arrow - Up Square.png"
                alt=""
              />
            </div>

            <p className="widget-para d-flex justify-content-start text-gray">
              26.84%
            </p>
            <Progressbar bgcolor="#C03221" progress="70" height={10} />
          </div>
        </div>

        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <p className="widget-heading-para d-flex justify-content-center text-gray">
              AVG Engaments Rate
            </p>
            <div className="d-flex justify-content-between">
              <h4>2.648</h4>
              <img className="arrowpicture" src="/assets/arrow1.png" alt="" />
            </div>

            <p className="widget-para d-flex justify-content-start text-gray">
              26.84%
            </p>
            <Progressbar bgcolor="#068B92" progress="70" height={10} />
          </div>
        </div>

        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <p className="widget-heading-para d-flex justify-content-center text-gray">
              AVG Engaments Rate
            </p>
            <div className="d-flex justify-content-between">
              <h4>2.648</h4>
              <img
                className="arrowpicture2"
                src="/assets/Arrow_green.png"
                alt=""
              />
            </div>

            <p className="widget-para d-flex justify-content-start text-gray">
              26.84%
            </p>
            <Progressbar bgcolor="#17904B" progress="70" height={10} />
          </div>
        </div>
        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <p className="widget-heading-para d-flex justify-content-center text-gray">
              AVG Engaments Rate
            </p>
            <div className="d-flex justify-content-between">
              <h4>2.648</h4>
              <img className="arrow-blue" src="/assets/Arrow_blue.png" alt="" />
            </div>

            <p className="widget-para d-flex justify-content-start text-gray">
              26.84%
            </p>
            <Progressbar bgcolor="#344ED1" progress="70" height={10} />
          </div>
        </div>
        <div className="widget-medical-card col-md-3 py-5">
          <div className="widget-medical-body">
            <div className="d-flex justify-content-between">
              <img
                className="profile-doctors"
                src="/assets/Doctors.png"
                alt=""
              />
              <div className="Doctors">
                <h4>5600</h4>
                <p className="widget-para-doctors d-flex justify-content-start text-#068B92">
                  Doctors
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-medical-card col-md-3 py-5">
          <div className="widget-medical-body-nurses">
            <div className="d-flex justify-content-between">
              <img
                className="profile-doctors"
                src="/assets/Nurses.png"
                alt=""
              />
              <div className="nurses">
                <h4>5600</h4>

                <p className="widget-para-nurse d-flex justify-content-start text-#068B92">
                  Nurses
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-medical-card col-md-3 py-5">
          <div className="widget-medical-body-patients">
            <div className="d-flex justify-content-between">
              <img
                className="profile-doctors"
                src="/assets/patient.png"
                alt=""
              />
              <div className="patients">
                <h4>5600</h4>
                <p className="widget-para-patients d-flex justify-content-start text-#068B92">
                  Patients
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-medical-card col-md-3 py-5">
          <div className="widget-medical-body-pharmastics">
            <div className="d-flex justify-content-between">
              <img
                className="profile-doctors"
                src="/assets/Pharmarcists.png"
                alt=""
              />
              <div className="pharmastics">
                <h4>5600</h4>
                <p className="widget-para d-flex justify-content-start text-#068B92">
                  Pharmastics
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <div className="d-flex justify-content-between">
              <img className="customers" src="/assets/customers1.png" />
              <div className="customers-details">
                <p className="widget-para d-flex justify-content-between text-gray">
                  Coustemers
                </p>
                <h4>75</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <div className="d-flex justify-content-between">
              <img className="customers2" src="/assets/customer2.png" />
              <div className="customers-details">
                <p className="widget-para d-flex justify-content-between text-gray">
                  Coustemers
                </p>
                <h4>75</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <div className="d-flex justify-content-between">
              <img className="customers3" src="/assets/customer3.png" />
              <div className="customers-details">
                <p className="widget-para d-flex justify-content-between text-gray">
                  Coustemers
                </p>
                <h4>75</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-card col-md-3 ">
          <div className="widget-basic-body">
            <div className="d-flex justify-content-between">
              <img className="customers4" src="/assets/customer4.png" />
              <div className="customers-details">
                <p className="widget-para d-flex justify-content-between text-gray">
                  Coustemers
                </p>
                <h4>75</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 row m-0 p-0">
          <div className="widget-working-time-card col-md-3 ">
            <div className="widget-basic-working-time-body">
              <div className="d-flex justify-content-between">
                <p className="d-flex justify-content-between text-gray border-style-outset">
                  Worked Today
                </p>
                <p className="d-flex justify-content-end text-gray">08:00 Hr</p>
              </div>
            </div>
          </div>

          <div className="widget-working-time-card col-md-3 ">
            <div className="widget-basic-weekend-body">
              <div className="d-flex justify-content-between">
                <p className="d-flex justify-content-between text-gray border-style-outset">
                  Worked Week
                </p>
                <p className="d-flex justify-content-end text-gray">40:00 Hr</p>
              </div>
            </div>
          </div>

          <div className="widget-working-time-card col-md-3 ">
            <div className="widget-basic-issue-body">
              <div className="d-flex justify-content-between">
                <p className="d-flex justify-content-between text-gray border-style-outset">
                  Worked Issue
                </p>
                <p className="d-flex justify-content-end text-gray">12:00 Hr</p>
              </div>
            </div>
          </div>

          <div className="widget-working-time-card col-md-3 ">
            <div className="widget-basic-income-body">
              <div className="d-flex justify-content-between">
                <p className="d-flex justify-content-between text-gray border-style-outset">
                  Worked Income
                </p>
                <p className="d-flex justify-content-end text-gray">$54000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 row m-0 p-0">
          <div className="widget-working-t-card col-md-4 ">
            <div className="widget-basic-order-body">
              <div className="d-flex justify-content-between">
                <img src="/assets/Profileimage.png" />
                <div className="d-flex-justify-content-center">
                  <h3 className="d-flex jestify-cententent-center">21K</h3>
                  <p className="d-flex justify-content-between text-gray">
                    Order Served
                  </p>
                </div>
                <div>
                  <button type="button" className="btn btn-primary">
                    <img src="assets/Arrow -Button.png" alt="" />
                    3.48%
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="widget-working-t-card col-md-4 ">
            <div className="widget-basic-order-body d-flex justify-content-between">
              <div>
                <img src="/assets/earnings.png" />
              </div>
              <div className="earnigs">
                <h3>250M</h3>
                <p>Total Earning</p>
              </div>
            </div>
          </div>

          <div className="widget-working-t-card col-md-4 ">
            <div className="widget-basic-order-body d-flex justify-content-between">
              <div>
                <img src="/assets/smile.png" />
              </div>
              <div className="reviews">
                <h5>Positive Reviews</h5>
                <StarRatings
                  rating={5}
                  starRatedColor="#FAA938"
                  // changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                  size={2}
  
                />

                <p>4.5/5</p>
              </div>
            </div>
          </div>

          <div className="mt-3  row m-0 p-0">
            <div className="widget-working-credit-card col-md-4 ">
              <div className="widget-basic-order-body">
                <div>
                  <h5>$3450</h5>
                </div>
                <div className=" text-gray">
                  <p>Young Current Balance</p>
                  <p>20% ($520)</p>
                </div>
                <div>
                

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
