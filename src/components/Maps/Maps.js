import React, { Component } from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"
import { googleAPIKey } from "../../config/googleAPIKey"
import { Alert, AlertTitle } from "@material-ui/lab"
import InfoWindowContainer from "./InfoWindow"
import { Button } from "@material-ui/core"

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
    book: false,
  }

  handleBook = () => {
    console.log(this.state.book)
    this.setState({ book: true })
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    return (
      <>
        {this.state.book && (
          <Alert severity={"success"} style={{ margin: "20px" }}>
            <AlertTitle>Success !</AlertTitle>
            You have successfully <strong>BOOPED</strong> some quality time with
            this pet - <strong>Congrats e!</strong>
          </Alert>
        )}
        <Map
          google={this.props.google}
          zoom={14}
          styles={{ width: "50%", height: "50%", padding: "1000px" }}
          initialCenter={{
            lat: 45.49728,
            lng: -73.590549,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Max"}
            time={"Wants to go for a walk"}
            position={{ lat: 45.49728, lng: -73.590549 }}
          />
          <InfoWindowContainer
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <h4>{this.state.selectedPlace.time}</h4>

              <Button fullWidth variant="contained" onClick={this.handleBook}>
                BOOP me
              </Button>
            </div>
          </InfoWindowContainer>
        </Map>
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleAPIKey,
})(MapContainer)
