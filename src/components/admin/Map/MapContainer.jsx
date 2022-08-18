import React,{Component} from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (<>
      <Map style={{width: '78%',height: '70%',background:'no-repeat'}} google={this.props.google} zoom={10}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
      </>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCsj1nufyAKB1bj1F4fhjF3fsOGnRBxRCk")
})(MapContainer)