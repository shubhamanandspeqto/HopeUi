import React from 'react'
//Calender
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import "./Calender.css";

//Date Picker
// import DateTimePicker from 'react-datetime-picker';



export default function Calender() {
    return (
        <div className='special-page-calender'>
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

            <div className='calender-head'>
                <div className='d-flex justify-content-between px-3 py-3'>
                    <h2 className='calender-header'>Calender</h2>
                    <button className="btn btn-primary calender-btn " type="button">Button</button> 
                </div>
            </div>

            <div className='calender-container'>
            <div id="calender-main" style={{overflow: 'auto' }}>
                <FullCalendar
                    
                    plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,listWeek'
                    }}
                   
                />
            </div>
            </div>
        </div>
    )
}
