import React from 'react'
import '../Map/Vector.css'
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';

// import MapContainer from './MapContainer';


export default function Vector() {
    return (
        <>
            <div className='map-page-container'>

                <div className='d-flex justify-content-between map-page-heading py-5 px-4'>
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
                <div className='map-container p-3'>
                    <div className='d-flex justify-content-between'>
                        <h2>Vector</h2>
                    </div>
                    <div className='google-map'>
                        <MapContainer/>
                    </div>
                </div>
            </div>
        </>
    )
}

