import React from 'react'
import '../WidgetCard/WidgetCard.css'

export default function WidgetCard() {
    return (
        <>
            <div className='widget-card-container'>

                <div className='d-flex justify-content-between widget-card-heading py-5 px-4'>
                    <div className='d-flex flex-column'>
                        <h2>Hello Devs !</h2>
                        <p>We are on a mission to help developers like you to build beautiful projects for free.</p>
                    </div>
                    <div>
                        <button>
                            <img src="/assets/VoiceIcon.png" alt="" />
                            Announcments
                        </button>
                    </div>
                </div>
                <div className="row widget-card p-3">
                    <div className="widget-card widget-card-body col-md-4">
                        <div className='widget-card-body-first'>
                            <p className='Regina-para1'>Regina Miles</p>
                            <p className='Regina-para2'>Trainer Expert</p>
                            <div className='star '>
                                <img src="..\assets\Star 6.png" alt="" />
                                <img src="..\assets\Star 6.png" alt="" />
                                <img src="..\assets\Star 6.png" alt="" />
                                <img src="..\assets\Star 9.png" alt="" />
                                <img src="..\assets\Star 9.png" alt="" />
                            </div>
                        </div>
                        <div className="widget-card-body-second">
                            <img src="..\assets\beared-guy.png" alt="" />
                        </div>
                        <div className="widget-card-body-third">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                            <div>
                                <img src="..\assets\Video.png" alt="" />
                                <img src="..\assets\Calendar.png" alt="" />
                                <img src="..\assets\Frame 36170.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="widget-card-body col-md-4">
                        <div>
                            <p className='conversion' >Conversion</p>
                        </div>



                        <div className='conversion-input '>
                            <div className="input-group mb-4">
                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">GRD</button>
                                </div>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">USD</button>
                                </div>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">Euro</button>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary w-100">Archivel</button>
                        </div>
                    </div>
                    <div className="widget-card-body col-md-4">
                        <div className='row'>
                            <div className="col-md-9 holiday">
                                <p>59<br />Holidays</p>
                            </div>
                            <div className="col-md-3 holiday-smile">
                                <img src="..\assets\Frame 35623.png" alt="" />
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-4 cone">
                                <img src="..\assets\Cone-min.png" alt="" />
                            </div>
                            <div className="col-md-8 cone-para w-80">
                                <p >Web workshop</p>
                                <p >1 hour agp</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 holiday-para3 w-100 p-1">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi?</p>
                            </div>
                        </div>
                        <div className="row holiday-para3 ps-3">

                            <p>-Agens Reppligers</p>
                            <p>-Managements</p>
                            <p>-Creative Sprint</p>


                        </div>


                    </div>
                </div>

                <div className="row widget-card p-4">
                    <div className="widget-card2-body col-md-4 admin-id-card1 birthday-img">
                        <div className='row birthday-img'>
                            <div><p className='Regina-para1 mb-3'>Upcoming Birthday</p></div>
                            <div className='d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515.png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Anna Mull</p>
                                    <p className='birthday-date'>Today</p>
                                </div>
                            </div>
                            <div className='d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515 (1).png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Jacob Jones</p>
                                    <p className='birthday-date'>Today</p>
                                </div>
                            </div>
                            <div className='d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515 (2).png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Jenny Wilson</p>
                                    <p className='birthday-date'>Today</p>
                                </div>
                            </div>
                            <div className='d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515.png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Leslie Alexander</p>
                                    <p className='birthday-date'>Today</p>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="widget-card2-body col-md-5 admin-id-card2">

                    </div>
                    <div className="widget-card2-body col-md-3 admin-id-card3">
                        <div className='row birthday-img'>
                            <div><p className='Regina-para1 mb-3'>Stories</p></div>
                            <div className='d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515.png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Anna Mull</p>
                                    <p className='birthday-date'>Today</p>
                                </div>
                            </div>
                            <div className='d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515 (1).png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Jacob Jones</p>
                                    <p className='birthday-date'>Today</p>
                                </div>
                            </div>
                            <div className='d-flex mb-2'>
                                <div className="col-md-4">
                                    <img src="..\assets\Frame 35515 (2).png" alt="" />
                                </div>
                                <div className="col-md-8 birthday-detail">
                                    <p className='birthday-name'>Jenny Wilson</p>
                                    <p className='birthday-date'>Today</p>
                                </div>
                            </div>


                            <button type="button" class="btn btn-primary w-100">See All</button>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
