import React from 'react'
import './Timeline.css'
import { Chrono } from "react-chrono";
import { smallTimelineData, timelineData } from './TimelineData';

export default function Timeline() {
    return (
        <div className='special-page-pricing pb-3'>

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

            <div className='timeline-container m-3 p-3'>
                <Chrono items={timelineData} mode="VERTICAL_ALTERNATING" hideControls={true} />
            </div>

            <div className='m-3 d-flex gap-3 small-timeline-container'>
                <div className='w-50 first-small-timeline'>
                    <h5 className='p-4'>Small Dots Timeline</h5>
                    <div style={{ height: "730px" }}>
                        <Chrono items={smallTimelineData} mode="VERTICAL" hideControls={true} >
                            <div className="chrono-icons">
                                <img src="/assets/LoginIcon.svg" alt="image1" />
                                <img src="/assets/MaintenanceIcon.svg" alt="image2" />
                                <img src="/assets/DevMeetupIcon.svg" alt="image2" />
                                <img src="/assets/ClientCallIcon.svg" alt="image2" />
                                <img src="/assets/MegaEventIcon.svg" alt="image2" />
                            </div>
                        </Chrono>
                    </div>
                </div>
                <div className='w-50 second-small-timeline'>
                    <h5 className='p-4'>Small Dots Timeline</h5>
                    <div style={{ height: "730px" }}>
                        <Chrono items={smallTimelineData} mode="VERTICAL" hideControls={true} />
                    </div>
                </div>
            </div>

        </div>
    )
}
