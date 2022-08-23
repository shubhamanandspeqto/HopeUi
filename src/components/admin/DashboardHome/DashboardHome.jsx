import React, { useEffect } from 'react'
import './DashboardHome.css'

import { CircularProgressbar } from "react-circular-progressbar";
import { Chrono } from "react-chrono";
import "react-circular-progressbar/dist/styles.css";

import Chart from "react-apexcharts";
import Progress_bar from '../../common/Progress_bar';
import { dashboardTimelineData } from '../Timeline/TimelineData';

let barChartData = {

    series: [{
        name: '',
        data: [44, 55, 41, 67, 22, 43],
        color: '#738AFE'
    }, {
        name: '',
        data: [13, 23, 20, 8, 13, 27],
        color: '#85F4FA'
    }],
    options: {
        stroke: {
            width: 1
        },
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
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
                borderRadius: 10,
                columnWidth: '25px',
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
            offsetY: 40,
            show: false
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
                    imageWidth: 200,
                    imageHeight: 200,
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
                        fontSize: "10px",
                        fontFamily: undefined,
                        color: undefined,
                        offsetY: -10,
                    },
                    value: {
                        show: true,
                        fontSize: "10px",
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
        data: [50, 45, 50, 45, 50, 45, 50, 45, 50],
        color: "#3A57E8",
    }, {
        name: 'Cost',
        data: [40, 35, 40, 35, 40, 35, 40, 35, 40],
        color: "#85C5FA"
    }],
    options: {
        legend: {
            position: 'top',
        },
        grid: {
            show: false,      // you can either change hear to disable all grids
            yaxis: {
                lines: {
                    show: false  //or just here to disable only x axis grids
                }
            },
            xaxis: {
                lines: {
                    show: false  //or just here to disable only x axis grids
                }
            }
        },
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false
            },
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
            categories: ["2017-12-19T00:00:00.000Z", "2018-01-19T00:00:00.000Z", "2018-02-19T01:30:00.000Z", "2018-03-19T02:30:00.000Z", "2018-04-19T03:30:00.000Z", "2018-05-19T04:30:00.000Z", "2018-06-19T05:30:00.000Z", "2018-07-19T06:30:00.000Z", "2018-08-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    },


};

export default function DashboardHome() {
    // let darkTheme = true

    let LightMode = () => {
        let elements = document.getElementsByClassName('dark-mode')
        let Body = document.getElementsByClassName('extra-dark')
        let enterprise = document.getElementsByClassName('dark-background')

        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i].classList);
            elements[i].classList.remove("dark-mode-dashboard-card")
            // elements[i].classList.remove("dashboard-card")
        }

        for (let i = 0; i < Body.length; i++) {
            Body[i].classList.remove("Extra-dark")
        }
        for (let i = 0; i < enterprise.length; i++) {
            enterprise[i].classList.remove("color-mode-round-ul")
        }

    }


    let themeChange = () => {
        let elements = document.getElementsByClassName('dark-mode')
        let Body = document.getElementsByClassName('extra-dark')
        let enterprise = document.getElementsByClassName('dark-background')


        console.log(elements);
        console.log(elements[0]);
        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i].classList);
            elements[i].classList.add("dark-mode-dashboard-card")
            // elements[i].classList.remove("dashboard-card")
        }

        for (let i = 0; i < Body.length; i++) {
            Body[i].classList.add("Extra-dark")
        }
        for (let i = 0; i < enterprise.length; i++) {
            enterprise[i].classList.add("color-mode-round-ul")
        }

    }

    return (
        <>

        <div className='special-page-container extra-dark'>

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
                        <div id='first-card' className='dashboard-card dark-mode d-flex justify-content-center align-items-center p-2 py-3 gap-2'>
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
                        <div className='dashboard-card d-flex dark-mode justify-content-center align-items-center p-2 py-3 gap-2'>
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
                        <div className='dashboard-card dark-mode d-flex justify-content-center align-items-center p-2 py-3 gap-2'>
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
                        <div className='dashboard-card dark-mode d-flex justify-content-center align-items-center p-2 py-3 gap-2'>
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
                        <div className='dashboard-card dark-mode d-flex justify-content-center align-items-center p-2 py-3 gap-2'>
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
                        <div className='dashboard-card dark-mode d-flex justify-content-center align-items-center p-2 py-3 gap-2'>
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

                <div className='row m-0 p-0 pt-3'>

                    <div className='col-md-8'>

                        <div className='w-100 p-3  dashboard-area-chart dark-mode'>
                            <div className='d-flex  justify-content-between'>
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
                            <div className='col-md-5 dark-p-0 m-0'>
                                <div className='w-100 p-2 dashboard-donut-chart-container dark-mode'>
                                    <div className='w-100 d-flex flex-column'>
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

                                        <div className='w-100 dashboard-donut-chart-div'>
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

                            <div className='col-md-7  ps-3 p-0'>

                                <div className='dashboard-bar-graph dark-mode '>

                                    <div className='d-flex justify-content-between w-100 dashboard-donut-chart align-items-center p-2'>
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


                                    <div className='w-100  '>
                                        <Chart options={barChartData.options} series={barChartData.series} type="bar" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='py-4'>
                            <div className='Enterprise-Client'>
                                <div className='d-flex justify-content-between enterprise-client-heading dark-mode align-items-center p-3'>
                                    <div>
                                        <h6 className='p-0 m-0'>Enterprise Clients</h6>
                                        <p className='d-flex gap-2 align-items-center'>
                                            <img src="/assets/blue-tick-small.png" alt="" />
                                            15 New Acquired ths month
                                        </p>
                                    </div>
                                    <div>
                                        <img src="/assets/DownArrow.png" alt="" />
                                    </div>
                                </div>

                                <div className='enterprise-client-body w-100 pt-3 extra-dark'>
                                    <table className='w-100'>

                                        <tr className='enterprise-client-body-header extra-dark'>
                                            <th className='ps-2'>COMPANIES</th>
                                            <th className='ps-4'>CONTACTS</th>
                                            <th className='ps-4'>ORDER</th>
                                            <th className='text-end pe-2'>COMPLETION</th>
                                        </tr>

                                        <tr className='enterprise-table-border dark-mode'>
                                            <td className='d-flex gap-2 py-2 ps-2 dashboard-etnerprise-row-container align-items-center'>
                                                <p className='dashboard-etnerprise-img-container'>
                                                    <img src="/assets/Cone-min.svg" alt="" />
                                                </p>
                                                <span>Addidas Sportwear</span>
                                            </td>
                                            <td className='dashboard-contact-class'>
                                                <p className='d-flex justify-content-end'>
                                                    <ul className='d-flex w-100 mb-0 '>
                                                        <li className='p-2 dark-background'>SP</li>
                                                        <li className='p-2 dark-background'>PP</li>
                                                        <li className='p-2 dark-background'>MM</li>
                                                    </ul>
                                                </p>
                                            </td>
                                            <td>
                                                <p className='ps-4'>$14,000</p>
                                            </td>
                                            <td className='ps-3 pe-2'>
                                                <p>70%</p>
                                                <Progress_bar bgcolor={'#738AFE'} progress={70} height={10} />
                                            </td>
                                        </tr>

                                        <tr className='enterprise-table-border alternate-color dark-mode'>
                                            <td className='d-flex gap-2 py-2 ps-2 dashboard-etnerprise-row-container align-items-center'>
                                                <p className='dashboard-etnerprise-img-container'>
                                                    <img src="/assets/Sphere-min.svg" alt="" />
                                                </p>
                                                <span>Netflix</span>
                                            </td>
                                            <td className='dashboard-contact-class'>
                                                <p className='d-flex justify-content-end'>
                                                    <ul className='d-flex w-100 mb-0'>
                                                        <li className='p-2 dark-background'>SP</li>
                                                        <li className='p-2 dark-background'>MM</li>
                                                    </ul>
                                                </p>
                                            </td>
                                            <td>
                                                <p className='ps-4'>$14,000</p>
                                            </td>
                                            <td className='ps-3 pe-2'>
                                                <p>25%</p>
                                                <Progress_bar bgcolor={'#738AFE'} progress={25} height={10} />
                                            </td>
                                        </tr>

                                        <tr className='enterprise-table-border alternate-color dark-mode'>
                                            <td className='d-flex gap-2 py-2 ps-2 dashboard-etnerprise-row-container align-items-center'>
                                                <p className='dashboard-etnerprise-img-container'>
                                                    <img src="/assets/Cube-min.svg" alt="" />
                                                </p>
                                                <span>Shopifi Stores</span>
                                            </td>
                                            <td className='dashboard-contact-class'>
                                                <p className='d-flex justify-content-end'>
                                                    <ul className='d-flex w-100 mb-0'>
                                                        <li className='p-2 dark-background'>PP</li>
                                                        <li className='p-2 dark-background'>TP</li>
                                                    </ul>
                                                </p>
                                            </td>
                                            <td>
                                                <p className='ps-4'>$14,000</p>
                                            </td>
                                            <td className='ps-3 pe-2'>
                                                <p>100%</p>
                                                <Progress_bar bgcolor={'#1AA053'} progress={100} height={10} />
                                            </td>
                                        </tr>

                                        <tr className='enterprise-table-border alternate-color dark-mode'>
                                            <td className='d-flex gap-2 py-2 ps-2 dashboard-etnerprise-row-container align-items-center'>
                                                <p className='dashboard-etnerprise-img-container'>
                                                    <img src="/assets/Cube-min.svg" alt="" />
                                                </p>
                                                <span>Boostrap Technologies</span>
                                            </td>
                                            <td className='dashboard-contact-class'>
                                                <p className='d-flex justify-content-end'>
                                                    <ul className='d-flex w-100 mb-0'>
                                                        <li className='p-2 dark-background'>SP</li>
                                                        <li className='p-2 dark-background'>PP</li>
                                                        <li className='p-2 dark-background'>MM</li>
                                                        <li className='p-2 dark-background'>TP</li>
                                                    </ul>
                                                </p>
                                            </td>
                                            <td>
                                                <p className='ps-4'>$14,000</p>
                                            </td>
                                            <td className='ps-3 pe-2'>
                                                <p>100%</p>
                                                <Progress_bar bgcolor={'#1AA053'} progress={100} height={10} />
                                            </td>
                                        </tr>

                                        <tr className='enterprise-table-border alternate-color dark-mode'>
                                            <td className='d-flex gap-2 py-2 ps-2 dashboard-etnerprise-row-container align-items-center'>
                                                <p className='dashboard-etnerprise-img-container'>
                                                    <img src="/assets/Cube-min.svg" alt="" />
                                                </p>
                                                <span>Community First</span>
                                            </td>
                                            <td className='dashboard-contact-class'>
                                                <p className='d-flex justify-content-end'>
                                                    <ul className='d-flex w-100 mb-0'>
                                                        <li className='p-2 dark-background'>MM</li>
                                                    </ul>
                                                </p>
                                            </td>
                                            <td>
                                                <p className='ps-4'>$14,000</p>
                                            </td>
                                            <td className='ps-3 pe-2'>
                                                <p>75%</p>
                                                <Progress_bar bgcolor={'#738AFE'} progress={75} height={10} />
                                            </td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className=''>
                            <div className='dashboard-card-container  dark-mode p-4'>
                                <div className='dashboard-credit-card  p-3 d-flex flex-column gap-4'>

                                    <div className='d-flex justify-content-between dashboard-credit-card-header'>
                                        <div>
                                            <h4 className='m-0 p-0'>VISA</h4>
                                            <p>PREMIUM ACCOUNT</p>
                                        </div>
                                        <div>
                                            <img src="/assets/debit-card-icon.svg" alt="" />
                                        </div>
                                    </div>

                                    <div>
                                        <p>5789 **** **** 2847</p>
                                    </div>

                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <p>Card Holder</p>
                                            <h6>Mike Smith</h6>
                                        </div>

                                        <div>
                                            <p>Expire Date</p>
                                            <h6>06/21</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='dashboard-below-card dark-mode'>

                                <div className='d-flex gap-4 dashboard-below-card-header p-4'>
                                    <div className='d-flex align-items-center gap-2'>
                                        <img src="/assets/Bag.png" alt="" />
                                        <div className='d-flex flex-column'>
                                            <p className='dark-mode'>1153</p>
                                            <span>Products</span>
                                        </div>
                                    </div>

                                    <div className='d-flex align-items-center gap-2'>
                                        <img src="/assets/Buy.svg" alt="" />
                                        <div className='d-flex flex-column'>
                                            <p className='dark-mode'>81K</p>
                                            <span>Order Served</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='dashboard-below-card-body d-flex justify-content-between p-4 align-items-center'>
                                    <div className='d-flex flex-column'>
                                        <h4>$4,050,12,300</h4>
                                        <p>Life time sales</p>
                                    </div>
                                    <p className='p-2'>YoY 24%</p>
                                </div>

                                <div className='d-flex justify-content-around pb-4'>
                                    <button className='dashboard-view-button px-3 py-1'>View Project</button>
                                    <button className='dashboard-analytics-button px-3 py-1'>Analytics</button>
                                </div>

                            </div>
                        </div>

                        <div className='dashboard-website-visitors dark-mode d-flex justify-content-between p-3 mt-4'>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h4>750K</h4>
                                <p>Website Visitors</p>
                            </div>

                            <div className='d-flex flex-column  justify-content-center align-items-center'>
                                <h4>7,500</h4>
                                <p>New Customers</p>
                            </div>
                        </div>

                        <div className='dashboard-activity-overview dark-mode mt-4 p-3'>
                            <div className='d-flex flex-column dashboard-activity-overview-header'>
                                <h5>Actvity overview</h5>
                                <div className='d-flex gap-3 align-items-center ps-2'>
                                    <img src="/assets/green-arrow- up.png" alt="" />
                                    <p>
                                        16% this month
                                    </p>
                                </div>
                            </div>

                            <div className='dashboard-timeline dark-mode' style={{ height: "335px" }}>
                                <Chrono items={dashboardTimelineData} mode="VERTICAL" hideControls={true} cardHeight={10} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div style = {{position: "absolute"}}>
            <button  onClick={() => { themeChange() }} >Theme</button>
            <button  onClick={() => { LightMode() }} >Theme</button>
            </div>
        </div>
        </>
    )
}
