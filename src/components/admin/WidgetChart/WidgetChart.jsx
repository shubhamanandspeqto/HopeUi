import React from "react";
import Chart from "react-apexcharts";
import "./WidgetChart.css";

import LineChart from 'react-linechart';
import '../../../../node_modules/react-linechart/dist/styles.css';

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

  let areaChartOption = {
    stroke: {
      width: 1
    },
    chart: {
      height: 280,
      type: "area",
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Series 1",
        data: [10, 20, 0, 10],
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
    yaxis: {
      show: false
    },
    xaxis: {
      labels: {
        show: false
      },
      show: false,
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

  let lineChartOption = {
    series: [
      {
        name: "Desktops",
        data: [0, 0, 20, 0]
      }
    ],
    grid: {
      show: false
    },
    chart: {
      background: '#fff',
      toolbar: {
        show: false
      },
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    // title: {
    //   text: "Product Trends by Month",
    //   align: "left"
    // },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    yaxis: {
      show: false
    },
    xaxis: {
      labels: {
        show: false
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    }
  };

  let curvedLineChartOption = {
    series: [
      {
        name: "Desktops",
        data: [0, 50, 0, 25, 0, 15, 0]
      }
    ],
    grid: {
      show: false
    },
    chart: {
      background: '#fff',
      toolbar: {
        show: false
      },
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    // title: {
    //   text: "Product Trends by Month",
    //   align: "left"
    // },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    yaxis: {
      show: false
    },
    xaxis: {
      labels: {
        show: false
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    }
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


        <div className="container p-3 m-0">


          <div className="row m-0 p-0">
            <div className="col-md-3 p-1 m-0">
              <div className="today_gains p-2">
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
            <div className="col-md-3 p-1 m-0">
              <div className="today_gains p-2">
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
            <div className="col-md-3 p-1 m-0">
              <div className="today_gains p-2">
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
            <div className="col-md-3 p-1 m-0">
              <div className="today_gains p-2">
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


          <div className="row m-0 p-0">

            <div className="col-md-3 p-1 m-0">
              <div className="widget-line-chart-card p-2 py-3 pb-5">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column align-items-center z-index-container">
                    <img src="/assets/TotalSalesIcon.svg" alt="" />
                    <span>$18 378</span>
                  </div>
                  <div className="d-flex flex-column gap-5 z-index-container">
                    <p>Total Sales</p>
                    <span>+14%</span>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-center line-chart-container">
                  <Chart
                    options={lineChartOption}
                    series={lineChartOption.series}
                    type="line"
                    width="80%"
                    height='60%'
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3 p-1 m-0">
              <div className="widget-line-chart-card p-2 py-3 pb-5">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column align-items-center z-index-container">
                    <img src="/assets/TotalSalesIcon.svg" alt="" />
                    <span>$18 378</span>
                  </div>
                  <p>Total Sales</p>
                </div>

                <div className="d-flex align-items-center justify-content-center line-chart-container">
                  <Chart
                    options={lineChartOption}
                    series={lineChartOption.series}
                    type="line"
                    width="80%"
                    height='60%'
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3 p-1 m-0">
              <div className="widget-line-chart-card p-2 py-3 pb-5">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column align-items-center z-index-container">
                    <img src="/assets/TotalSalesIcon.svg" alt="" />
                    <span>$18 378</span>
                  </div>
                  <p>Total Sales</p>
                </div>

                <div className="d-flex align-items-center justify-content-center line-chart-container">
                  <Chart
                    options={lineChartOption}
                    series={lineChartOption.series}
                    type="line"
                    width="80%"
                    height='60%'
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3 p-1 m-0">
              <div className="widget-line-chart-card p-2 py-3 pb-5">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column align-items-center z-index-container">
                    <img src="/assets/TotalSalesIcon.svg" alt="" />
                    <span>$18 378</span>
                  </div>
                  <p>Total Sales</p>
                </div>

                <div className="d-flex align-items-center justify-content-center line-chart-container">
                  <Chart
                    options={lineChartOption}
                    series={lineChartOption.series}
                    type="line"
                    width="80%"
                    height='60%'
                  />
                </div>
              </div>
            </div>


          </div>


          <div className="row m-0 p-0 mt-3">

            <div className="col-md-3 p-1 m-0">
              <div className="widget-chartless-card p-2 d-flex flex-column gap-2">

                <div className="d-flex justify-content-between align-items-center widget-chartless-card-top">
                  <p>Invoice Sent</p>
                  <img src="/assets/Danger Circle.png" alt="" />
                </div>

                <div className="d-flex justify-content-between align-items-center widget-chartless-card-bottom">

                  <div className="d-flex align-items-center gap-2">
                    <img src="/assets/InvoiceScent.png" alt="" />
                    <p>352</p>
                  </div>

                  <img src="/assets/Document.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-3 p-1 m-0">
              <div className="widget-chartless-card p-2 d-flex flex-column gap-2">

                <div className="d-flex justify-content-between align-items-center widget-chartless-card-top">
                  <p>Invoice Sent</p>
                  <img src="/assets/Danger Circle.png" alt="" />
                </div>

                <div className="d-flex justify-content-between align-items-center widget-chartless-card-bottom">

                  <div className="d-flex align-items-center gap-2">
                    <img src="/assets/InvoiceScent.png" alt="" />
                    <p>352</p>
                  </div>

                  <img src="/assets/Document.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-3 p-1 m-0">
              <div className="widget-chartless-card p-2 d-flex flex-column gap-2">

                <div className="d-flex justify-content-between align-items-center widget-chartless-card-top">
                  <p>Invoice Sent</p>
                  <img src="/assets/Danger Circle.png" alt="" />
                </div>

                <div className="d-flex justify-content-between align-items-center widget-chartless-card-bottom">

                  <div className="d-flex align-items-center gap-2">
                    <img src="/assets/InvoiceScent.png" alt="" />
                    <p>352</p>
                  </div>

                  <img src="/assets/Document.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-3 p-1 m-0">
              <div className="widget-chartless-card p-2 d-flex flex-column gap-2">

                <div className="d-flex justify-content-between align-items-center widget-chartless-card-top">
                  <p>Invoice Sent</p>
                  <img src="/assets/Danger Circle.png" alt="" />
                </div>

                <div className="d-flex justify-content-between align-items-center widget-chartless-card-bottom">

                  <div className="d-flex align-items-center gap-2">
                    <img src="/assets/InvoiceScent.png" alt="" />
                    <p>352</p>
                  </div>

                  <img src="/assets/Document.png" alt="" />
                </div>
              </div>
            </div>

          </div>

          <div className="row m-0 p-0 mt-3">

            <div className="col-md-3 p-1 m-0">
              <div className="d-flex area-chart-card p-2">

                <div className="d-flex flex-column">
                  <h5>24%</h5>
                  <p>Service Used</p>
                </div>

                <div>
                  <Chart
                    options={areaChartOption}
                    series={areaChartOption.series}
                    type="area"
                    width={'100%'}
                    height="70%"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3 p-1 m-0">
              <div className="d-flex area-chart-card p-2">

                <div className="d-flex flex-column">
                  <h5>24%</h5>
                  <p>Service Used</p>
                </div>

                <div>
                  <Chart
                    options={areaChartOption}
                    series={areaChartOption.series}
                    type="area"
                    width={'100%'}
                    height="70%"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3 p-1 m-0">
              <div className="d-flex area-chart-card p-2">

                <div className="d-flex flex-column">
                  <h5>24%</h5>
                  <p>Service Used</p>
                </div>

                <div>
                  <Chart
                    options={areaChartOption}
                    series={areaChartOption.series}
                    type="area"
                    width={'100%'}
                    height="70%"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3 p-1 m-0">
              <div className="d-flex area-chart-card p-2">

                <div className="d-flex flex-column">
                  <h5>24%</h5>
                  <p>Service Used</p>
                </div>

                <div>
                  <Chart
                    options={areaChartOption}
                    series={areaChartOption.series}
                    type="area"
                    width={'100%'}
                    height="70%"
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="row m-0 p-0 mt-3">

            <div className="col-md-2 p-1 m-0">
              <div className="small-chart-card p-2 d-flex flex-column">
                <div>
                  <img src="/assets/FrontendTime.png" alt="" />
                </div>

                <div className="pt-2">
                  <h4>2.14s</h4>
                  <p>Frontend time</p>
                </div>

                <div>
                  <Chart
                    options={curvedLineChartOption}
                    series={curvedLineChartOption.series}
                    type="line"
                    width="100%"
                    height='60%'
                  />
                </div>

              </div>
            </div>

            <div className="col-md-2 p-1 m-0">
              <div className="small-chart-card p-2 d-flex flex-column">
                <div>
                  <img src="/assets/FrontendTime.png" alt="" />
                </div>

                <div className="pt-2">
                  <h4>2.14s</h4>
                  <p>Frontend time</p>
                </div>

                <div>
                  <Chart
                    options={curvedLineChartOption}
                    series={curvedLineChartOption.series}
                    type="line"
                    width="100%"
                    height='60%'
                  />
                </div>

              </div>
            </div>

            <div className="col-md-2 p-1 m-0">
              <div className="small-chart-card p-2 d-flex flex-column">
                <div>
                  <img src="/assets/FrontendTime.png" alt="" />
                </div>

                <div className="pt-2">
                  <h4>2.14s</h4>
                  <p>Frontend time</p>
                </div>

                <div>
                  <Chart
                    options={curvedLineChartOption}
                    series={curvedLineChartOption.series}
                    type="line"
                    width="100%"
                    height='60%'
                  />
                </div>

              </div>
            </div>

            <div className="col-md-2 p-1 m-0">
              <div className="small-chart-card p-2 d-flex flex-column">
                <div>
                  <img src="/assets/FrontendTime.png" alt="" />
                </div>

                <div className="pt-2">
                  <h4>2.14s</h4>
                  <p>Frontend time</p>
                </div>

                <div>
                  <Chart
                    options={curvedLineChartOption}
                    series={curvedLineChartOption.series}
                    type="line"
                    width="100%"
                    height='60%'
                  />
                </div>

              </div>
            </div>

            <div className="col-md-4 p-1 m-0">
              <div className="small-chart-card-long p-2 d-flex flex-column">
                <h5>Session (Now)</h5>

                <div className="d-flex">
                  <div>
                    <h4>12</h4>
                    {/* //Charat */}
                    <Chart
                      options={areaChartOption}
                      series={areaChartOption.series}
                      type="area"
                      width={'90%'}
                      height="70%"
                    />
                  </div>

                  <div className="d-flex flex-column w-25">
                    <p>1 HOURS AGO</p>
                    <p>1500 <span className="red">3.25%</span></p>
                    <p>1 DAY AGO</p>
                    <p>1890 <span className="green">1.00%</span></p>
                    <p>1 WEEK AGO</p>
                    <p>1260 <span className="red">9.87%</span></p>
                  </div>
                </div>

              </div>
            </div>


          </div>

          <div className="row m-0 p-0 mt-3">

            <div className="col-md-6 p-1 m-0">
              <div></div>
            </div>

            <div className="col-md-6 p-1 m-0">
              <div className="widget-upcoming-card p-2">
                <h2>Upcoming</h2>

                <div className="d-flex flex-column pt-3 gap-4 px-2">

                  <div className="d-flex m-0 p-0 justify-content-between ">

                    <div className="d-flex flex-column widget-upcoming-card-first">
                      <h6 className="p-0 m-0">Psychology Exam</h6>
                      <p>carry out writing exam in school</p>
                    </div>

                    <div className="d-flex flex-column widget-upcoming-card-second">
                      <p>19 jan</p>
                      <span>45 Minutes</span>
                    </div>

                    <div className="widget-upcoming-card-third">
                      <img className="p-2" src="/assets/Edit Square.png" alt="" />
                    </div>

                  </div>

                  <div className="d-flex m-0 p-0 justify-content-between">

                    <div className="d-flex flex-column widget-upcoming-card-first">
                      <h6 className="p-0 m-0">Psychology Exam</h6>
                      <p>carry out writing exam in school</p>
                    </div>

                    <div className="d-flex flex-column widget-upcoming-card-second">
                      <p>19 jan</p>
                      <span>45 Minutes</span>
                    </div>

                    <div className="widget-upcoming-card-third">
                      <img className="p-2" src="/assets/Edit Square.png" alt="" />
                    </div>

                  </div>

                  <div className="d-flex m-0 p-0 justify-content-between">

                    <div className="d-flex flex-column widget-upcoming-card-first">
                      <h6 className="p-0 m-0">Psychology Exam</h6>
                      <p>carry out writing exam in school</p>
                    </div>

                    <div className="d-flex flex-column widget-upcoming-card-second">
                      <p>19 jan</p>
                      <span>45 Minutes</span>
                    </div>

                    <div className="widget-upcoming-card-third">
                      <img className="p-2" src="/assets/Edit Square.png" alt="" />
                    </div>

                  </div>

                  <div className="d-flex m-0 p-0 justify-content-between">

                    <div className="d-flex flex-column widget-upcoming-card-first">
                      <h6 className="p-0 m-0">Psychology Exam</h6>
                      <p>carry out writing exam in school</p>
                    </div>

                    <div className="d-flex flex-column widget-upcoming-card-second">
                      <p>19 jan</p>
                      <span>45 Minutes</span>
                    </div>

                    <div className="widget-upcoming-card-third">
                      <img className="p-2" src="/assets/Edit Square.png" alt="" />
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </>
  );
}
