import React from 'react'
import './DashboardHome.css'

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Chart from "react-apexcharts";

let barChartData = {

    series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43]
    }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10
            },
            radialBar: {
                dataLabels: {
                    show: false
                }
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                format: "ddd"
            },
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                '01/05/2011 GMT', '01/06/2011 GMT'
            ],
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
        fill: {
            opacity: 1
        }
    },


};

let donutData = {
    options: {
        labels: ["Fashion", "Accessories"],
        legend: {
            show: true,
            onItemClick: {
                toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: true
            }
        },
        plotOptions: {
            radialBar: {
                size: undefined,
                inverseOrder: false,
                startAngle: 0,
                endAngle: 275,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                    margin: 5,
                    size: "50%",
                    background: "transparent",
                    image: undefined,
                    imageWidth: 150,
                    imageHeight: 150,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    imageClipped: true,
                    position: "front",
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5
                    }
                },
                track: {
                    show: true,
                    startAngle: undefined,
                    endAngle: undefined,
                    background: "#f2f2f2",
                    strokeWidth: "97%",
                    opacity: 1,
                    margin: 5,
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5
                    }
                },
                dataLabels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: "22px",
                        fontFamily: undefined,
                        color: undefined,
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: "16px",
                        fontFamily: undefined,
                        color: undefined,
                        offsetY: 16,
                        formatter: function (val) {
                            return val + "%";
                        }
                    },
                    // total: {
                    //     show: true,
                    //     label: "Total",
                    //     color: "#373d3f",
                    //     formatter: function (w) {
                    //         return (
                    //             w.globals.seriesTotals.reduce((a, b) => {
                    //                 return a + b;
                    //             }, 0) /
                    //             w.globals.series.length +
                    //             "%"
                    //         );
                    //     }
                    // }
                }
            }
        }
    },

    series: [100, 255]
};

let state = {

    series: [{
        name: 'Sales',
        data: [50, 45, 50, 45, 50, 45, 50, 45, 50, 45, 50, 45],
        color: "#3A57E8",
    }, {
        name: 'Cost',
        data: [40, 35, 40, 35, 40, 35, 40, 35, 40, 35, 40, 35],
        color: "#3A57E8"
    }],
    options: {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0.2,
                gradientToColors: '#3A57E8', // optional, if not defined - uses the shades of same color in series
                inverseColors: false,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 25],
                colorStops: []
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                format: "MMM"
            },
            categories: ["2017-12-19T00:00:00.000Z", "2018-01-19T00:00:00.000Z", "2018-02-19T01:30:00.000Z", "2018-03-19T02:30:00.000Z", "2018-04-19T03:30:00.000Z", "2018-05-19T04:30:00.000Z", "2018-06-19T05:30:00.000Z", "2018-07-19T06:30:00.000Z", "2018-08-19T06:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-10-19T06:30:00.000Z", "2018-11-19T06:30:00.000Z", "2018-12-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    },


};

export default function DashboardHome() {
    return (
        <div className='special-page-container'>

            <div className='d-flex justify-content-between special-page-heading py-5 px-4'>
                <div className='d-flex flex-column'>
                    <h2>Hello Devs !</h2>
                    <p>We are on a mission to help developers like you to build beautiful projects for FREE.</p>
                </div>
                <div>
                    <button>
                        <img src="/assets/VoiceIcon.png" alt="" />
                        Announcments
                    </button>
                </div>
            </div>

            <div className='p-3'>
                <div className='d-flex w-100 row m-0 p-0'>

                    <div className='col-md-2'>
                        <div className='dashboard-card d-flex justify-content-center align-items-center p-2 py-3 gap-2'>
                            <div className='d-flex align-items-center' style={{ width: '50px' }}>
                                <CircularProgressbar value={66} />
                                <div className='dashboard-card-icon'>
                                    <img src="/assets/graph-arrow.svg" alt="" />
                                </div>
                            </div>
                            <div className='d-flex flex-column gap-2'>
                                <p>Total Sales</p>
                                <h6>$560K</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className='dashboard-card d-flex justify-content-center align-items-center p-2 py-3 gap-2'>
                            <div className='d-flex align-items-center' style={{ width: '50px' }}>
                                <CircularProgressbar value={66} />
                                <div className='dashboard-card-icon'>
                                    <img src="/assets/graph-arrow.svg" alt="" />
                                </div>
                            </div>
                            <div className='d-flex flex-column gap-2'>
                                <p>Total Profit</p>
                                <h6>$185K</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className='dashboard-card d-flex justify-content-center align-items-center p-2 py-3 gap-2'>
                            <div className='d-flex align-items-center' style={{ width: '50px' }}>
                                <CircularProgressbar value={66} />
                                <div className='dashboard-card-icon'>
                                    <img src="/assets/graph-arrow.svg" alt="" />
                                </div>
                            </div>
                            <div className='d-flex flex-column gap-2'>
                                <p>Total Cost</p>
                                <h6>$375K</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className='dashboard-card d-flex justify-content-center align-items-center p-2 py-3 gap-2'>
                            <div className='d-flex align-items-center' style={{ width: '50px' }}>
                                <CircularProgressbar value={66} />
                                <div className='dashboard-card-icon'>
                                    <img src="/assets/graph-arrow.svg" alt="" />
                                </div>
                            </div>
                            <div className='d-flex flex-column gap-2'>
                                <p>Revenue</p>
                                <h6>$742K</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className='dashboard-card d-flex justify-content-center align-items-center p-2 py-3 gap-2'>
                            <div className='d-flex align-items-center' style={{ width: '50px' }}>
                                <CircularProgressbar value={66} />
                                <div className='dashboard-card-icon'>
                                    <img src="/assets/graph-arrow.svg" alt="" />
                                </div>
                            </div>
                            <div className='d-flex flex-column gap-2'>
                                <p>Net Income</p>
                                <h6>$150K</h6>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className='dashboard-card d-flex justify-content-center align-items-center p-2 py-3 gap-2'>
                            <div className='d-flex align-items-center' style={{ width: '50px' }}>
                                <CircularProgressbar value={66} />
                                <div className='dashboard-card-icon'>
                                    <img src="/assets/graph-arrow.svg" alt="" />
                                </div>
                            </div>
                            <div className='d-flex flex-column gap-2'>
                                <p>Today</p>
                                <h6>$4600</h6>
                            </div>
                        </div>
                    </div>



                </div>

                <div className='col-md-8 p-3'>

                    <div className='w-100 p-3 dashboard-area-chart'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h6>$855.8K</h6>
                                <p>Gross Sales</p>
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        This Week
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="area"
                            width={'100%'}
                            height="100%"
                        />
                    </div>


                    <div className='row m-0 p-0 py-4'>
                        <div className='col-md-5 p-0 m-0'>
                            <div className='w-100 p-2 dashboard-donut-chart-container'>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between w-100 dashboard-donut-chart align-items-center'>
                                        <div>
                                            <h6 className='m-0 p-0'>Earnings</h6>
                                        </div>
                                        <div>
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    This Week
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='w-100'>
                                        <Chart
                                            options={donutData.options}
                                            series={donutData.series}
                                            type="radialBar"
                                            width={'100%'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-7 px-3'>

                            <div className='w-100 dashboard-bar-graph'>
                                <Chart options={barChartData.options} series={barChartData.series} type="bar" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>

                </div>
            </div>
        </div>
    )
}
