import React, { useState } from 'react'
import "./WidgetBasic.css";
import Progressbar from "../../common/Progress_bar";
//import StarRating from 'react-star-rating'
import { Rating } from 'react-simple-star-rating'



export default function Widget() {

  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate)
  }

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

      <div className="row widget-card p-3 m-0">
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
                  <button className="blue-button">
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

                {/* <StarRatings
                  rating={5}
                  starRatedColor="#FAA938"
                  numberOfStars={5}
                  name="small-rating"
                  size={30}
                /> */}
                {/* <StarRating name="react-star-rating" caption="Rate this component!" totalStars={5} /> */}

                <Rating size={15} onClick={handleRating} ratingValue={rating} />
                <p>4.5/5</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0 p-0">
          <div className="mt-3  row m-0 p-0">
            <div className="widget-working-credit-card col-md-4 ">
              <div className="widget-basic-order-credit-body ">
                <h5>$3450</h5>
                <div className=" text-gray">
                  <p className="grey-1">Young Current Balance</p>
                  <p className="grey-2">20% ($520)</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-danger btn-lg btn-block w-100 mb-4"
                  >
                    Add Credit
                  </button>
                </div>
                <div className="progres-details">
                  <div className="pro-1 mb-3">
                    <p className="widget-para d-flex justify-content-between text-gray mb-2">
                      Insurance
                    </p>

                  </div>
                  <div>
                    <Progressbar bgcolor="#068B92" progress="70" height={10} />
                  </div>

                  <div className="pro-2 mb-3">
                    <p className="widget-para d-flex justify-content-start text-gray mb-2">
                      Savings
                    </p>
                    <Progressbar bgcolor="#344ED1" progress="70" height={10} />
                  </div>
                  <div className="pro-3 mb-3">
                    <p className="widget-para d-flex justify-content-start text-gray mb-2">
                      Investement
                    </p>
                    <Progressbar bgcolor="#068B92" progress="70" height={10} />
                  </div>

                  <div className="pro-4 mb-3">
                    <p className="widget-para d-flex justify-content-start text-gray mb-2">
                      Progress
                    </p>
                    <Progressbar bgcolor="#17904B" progress="70" height={10} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-between flex-column">
              <div className="total-customers-card ">
                {/* <div className="total-cusmers-card col-md-6"> */}
                <div>
                  <img src="/assets/totalcustomer.png" />
                </div>
                <div className="total-customerss">
                  <p className="d-flex justify-content-between color-grey gap-3">
                    customers
                  </p>
                  <h4>60,586</h4>
                </div>
                <div className="customer-control">
                  <button className="blue-button">
                    <img src="/assets/Arrow - Up.png" alt="" />
                    3.48%
                  </button>
                </div>
                {/* </div> */}
              </div>
              <div className="total-customers-card mt-5">
                {/* <div className="total-cusmers-card col-md-6"> */}
                <div>
                  <img src="/assets/Plus.png" />
                </div>
                <div className="total-customerss">
                  <p className="d-flex justify-content-between color-grey gap-3">
                    customers
                  </p>
                  <h4>60,586</h4>
                </div>
                <div className="customer-control">
                  <button className="profit-button">
                    <img src="/assets/Arrow - Up.png" alt="" />
                    3.48%
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-between flex-column">
              <div className="total-customers-card ">
                {/* <div className="total-cusmers-card col-md-6"> */}
                <div>
                  <img src="/assets/calculator.png" />
                </div>
                <div className="total-customerss">
                  <p className="d-flex justify-content-between color-grey gap-3">
                    customers
                  </p>
                  <h4>60,586</h4>
                </div>
                <div className="customer-control">
                  <button className="calculate">
                    <img className="w-25" src="/assets/Arrow - Up.png" alt="" />
                    <p>3.48%</p>
                  </button>
                </div>
                {/* </div> */}
              </div>
              <div className="total-customers-card mt-5">
                {/* <div className="total-cusmers-card col-md-6"> */}
                <div>
                  <img src="/assets/minus.png" />
                </div>
                <div className="total-customerss">
                  <p className="d-flex justify-content-between color-grey gap-3">
                    customers
                  </p>
                  <h4>60,586</h4>
                </div>
                <div className="customer-control">
                  <button className="loss-button">
                    <img src="/assets/Arrow - Up.png" alt="" />
                    3.48%
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>

            <div className="col-md-4 d-flex  justify-content-between flex-column gap-4 ">
              <div className="total-assets  m-0 p-3 py-4">
                <div className="d-flex justify-content-start">
                  <h4>Assets</h4>
                </div>
                <div className="details d-flex justify-content-end">
                  <div className="d-flex flex-column align-items-center">
                    <h3>-108.56k</h3>
                    <p className="text gray">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>

              <div className="total-assets  m-0 p-3  py-4">
                <div className="d-flex justify-content-start">
                  <h4>Assets</h4>
                </div>
                <div className="details d-flex justify-content-end">
                  <div className="d-flex flex-column align-items-center">
                    <h3>-108.56k</h3>
                    <p className="text gray">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>

              <div className="total-assets  m-0 p-3 py-4">
                <div className="d-flex justify-content-start">
                  <h4>Assets</h4>
                </div>
                <div className="details d-flex justify-content-end">
                  <div className="d-flex flex-column align-items-center">
                    <h3>-108.56k</h3>
                    <p className="text gray">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0 p-0">
          <div className="mt-3 row m-0 p-0">
            <div className="row m-0 col-md-6 p-0">
              <div className="widget-card col-md-6 ">
                <div className="widget-basic-body">
                  <div className="d-flex justify-content-between">
                    <p className="  text-gray">Revenue</p>
                    <button className="last-card-month">Monthly</button>
                  </div>

                  <div className="d-flex justify-content-between">
                    <h4>$35000</h4>
                  </div>

                  <p className="widget-para d-flex justify-content-start text-gray">
                    Total Revenue
                  </p>

                  <Progressbar bgcolor="#344ED1" progress="70" height={10} />
                </div>
              </div>

              <div className="widget-card col-md-6 ">
                <div className="widget-basic-body">
                  <div className="d-flex justify-content-between">
                    <p className=" text-gray">Order</p>
                    <button className="last-card-annual">Annual</button>
                  </div>

                  <div className="d-flex justify-content-between">
                    <h4>2500</h4>
                  </div>

                  <p className="widget-para d-flex justify-content-start text-gray">
                    New Orders
                  </p>
                  <Progressbar bgcolor="#D95F18" progress="70" height={10} />
                </div>
              </div>

              <div className="widget-card col-md-6 ">
                <div className="widget-basic-body">
                  <div className="d-flex justify-content-between">
                    <p className=" text-gray">Leeds</p>
                    <button className="last-card-today">Today</button>
                  </div>

                  <div className="d-flex justify-content-between">
                    <h4>$35000</h4>
                  </div>

                  <p className="widget-para d-flex justify-content-start text-gray">
                    New Leeds
                  </p>

                  <Progressbar bgcolor="#C03221" progress="70" height={10} />
                </div>
              </div>

              <div className="widget-card col-md-6 ">
                <div className="widget-basic-body">
                  <div className="d-flex justify-content-between">
                    <p className="text-gray">Conversion</p>
                    <button className="last-card-for-month">This Month</button>
                  </div>

                  <div className="d-flex justify-content-between">
                    <h4>35%</h4>
                  </div>

                  <p className="widget-para d-flex justify-content-start text-gray">
                    This Month
                  </p>
                  <Progressbar bgcolor="#068B92" progress="70" height={10} />
                </div>
              </div>
            </div>

            <div className="widget-card col-md-6 ">
              <div className="widget-basic-assign-body">
                <div>
                  <img src="/assets/CardPro.png"></img>
                </div>
                <div className="d-flex justify-content-center">
                  <h5>Bini Jets</h5>
                </div>

                <p className="widget-assign d-flex text-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
                  arcu turpis. Nunc
                </p>

                <button className="assign">Assign</button>

                <hr />

                <div className="d-flex justify-content-between w-100">
                  <h3>4500</h3>
                  <h3>3.9</h3>
                </div>

                <div className="d-flex justify-content-between text-gray w-100">
                  <p>Operations</p>
                  <p>Medical Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
