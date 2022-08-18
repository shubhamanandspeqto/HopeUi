import React from "react";
import Chart from "react-apexcharts";
import "./WidgetChart.css";

export default function WidgetChart() {
  let state = {
    chart: {
      height: 280,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
    },
  };

  return (
    <>
      <div className="special-page-container">
        <div className="d-flex justify-content-between special-page-heading py-5 px-4">
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
        <div></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="today_gains ">
              <div className="icon-top">
                <img
                  src="/assets/icon-plus-1.png"
                  alt="icon"
                  className="img-fluid"
                />
                <p className="lead">Todays Gains</p>
              </div>
              <div className="icon-middle">
                <p className="lead icon-p">65M</p>
                <p className="lead icon-p-2">
                  <img
                    src="/assets/icon-arrow.png"
                    alt="arrow"
                    className="img-fluid"
                  />
                  <span className="icon-span">10%</span>Increased
                </p>
              </div>
              <div id="chart" className="widget">
                <Chart
                  options={state}
                  series={state.series}
                  type="area"
                  height={150}
                  width={300}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="today_gains">
              <div className="icon-top">
                <img
                  src="/assets/icon-plus-2.png"
                  alt="icon"
                  className="img-fluid"
                />
                <p className="lead">Todays Gains</p>
              </div>
              <div className="icon-middle">
                <p className="lead icon-p">65M</p>
                <p className="lead icon-p-2">
                  <img
                    src="/assets/icon-arrow.png"
                    alt="arrow"
                    className="img-fluid"
                  />
                  <span className="icon-span">10%</span>Increased
                </p>
              </div>
              <div id="chart" className="widget">
                <Chart
                  options={state}
                  series={state.series}
                  type="area"
                  height={150}
                  width={292}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="today_gains">
              <div className="icon-top">
                <img
                  src="/assets/icon-plus-3.png"
                  alt="icon"
                  className="img-fluid"
                />
                <p className="lead">Todays Gains</p>
              </div>
              <div className="icon-middle">
                <p className="lead icon-p">65M</p>
                <p className="lead icon-p-2">
                  <img
                    src="/assets/icon-arrow.png"
                    alt="arrow"
                    className="img-fluid"
                  />
                  <span className="icon-span">10%</span>Increased
                </p>
              </div>
              <div id="chart" className="widget">
                <Chart
                  options={state}
                  series={state.series}
                  type="area"
                  height={150}
                  width={292}
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="today_gains">
              <div className="icon-top">
                <img
                  src="/assets/icon-plus-4.png"
                  alt="icon"
                  className="img-fluid"
                />
                <p className="lead">Todays Gains</p>
              </div>
              <div className="icon-middle">
                <p className="lead icon-p">65M</p>
                <p className="lead icon-p-2">
                  <img
                    src="/assets/icon-arrow.png"
                    alt="arrow"
                    className="img-fluid"
                  />
                  <span className="icon-span">10%</span>Increased
                </p>
              </div>
              <div id="chart" className="widget">
                <Chart
                  options={state}
                  series={state.series}
                  type="area"
                  height={150}
                  width={292}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="todays-sales">
              <div className="icon-top">
                <div className="icon-top-1">
                  <img
                    src="/assets/graph-plus-1.png"
                    alt="icon"
                    className="img-fluid"
                  />
                  <p className="lead">$18 378</p>
                </div>
                <p className="lead">Todays Sales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
