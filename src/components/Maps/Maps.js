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
        google={this.props.google}
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
      <Marker
          onClick={this.onMarkerClick}
          name={'Daisy'}
          time={'Wants play for a few days'}
          position={{ lat: 45.462292, lng: -73.569222 }}
      />
      <Marker
          onClick={this.onMarkerClick}
          name={'Archarbar'}
          time={'Wants to go for a walk'}
          position={{ lat: 45.513702, lng: -73.596385 }}
      />
      <Marker
          onClick={this.onMarkerClick}
          name={'Rocket'}
          time={'Wants to stay for a week'}
          position={{ lat: 45.488947, lng: -73.626192 }}
      />
      <Marker
          onClick={this.onMarkerClick}
          name={'Saba'}
          time={'Wants to sleep for a few hours'}
          position={{ lat: 45.505839, lng: -73.571646 }}
      />
      <Marker
          onClick={this.onMarkerClick}
          name={'Bella'}
          time={'Wants to play for a few hours'}
          position={{ lat: 45.456422, lng: -73.571233 }}
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
