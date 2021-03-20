import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { googleAPIKey } from "../../config/googleAPIKey"

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={props.google}
        zoom={14}
        styles={{ width: "50%", height: "50%", padding: "1000px" }}
        initialCenter={{
          lat: 45.497280,
          lng: -73.590549,
        }}
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'Max'}
          time={'Wants to go for a walk'}
          position={{ lat: 45.497280, lng: -73.590549 }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <h4>{this.state.selectedPlace.time}</h4>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleAPIKey,
})(MapContainer)
