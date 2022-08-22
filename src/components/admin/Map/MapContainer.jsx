import React from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export function MapContainer(props) {
  
    return (
      <Map  google={props.google} zoom={5}>
 
        <Marker/>
 
        
      </Map>
    );
  
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCsj1nufyAKB1bj1F4fhjF3fsOGnRBxRCk")
})(MapContainer)

