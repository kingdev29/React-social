var React = require('react');


let geocoder = new google.maps.Geocoder;

var ReactGeoLocation = React.createClass({
  
  _handleGeoPosition: function(position) {
    this.props.getCoords(position.coords);
    console.log(position)
  },

  _handleClick: function(e) {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._handleGeoPosition);
    }
  },

  render: function() {
    return <a href="#" onClick={this._handleClick}>Detect location</a>;
  }
  
});


var Geo = React.createClass({

  _getCoords: function(coords) {
    this.setState({
      lat: coords.latitude,
      lng: coords.longitude,
    });
    var latlng = {lat: parseFloat(coords.latitude), lng: parseFloat(coords.longitude)}
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
          console.log(results)
        }
      });
  },

  getInitialState: function() {
    return {
      lat: null,
      lng: null 
    };
  },

  render: function() {
    return (
      <div>
        <ReactGeoLocation getCoords={this._getCoords} />
        <div>lat: {this.state.lat}, lng: {this.state.lng}</div>
      </div>
    )
  }
});


module.exports = Geo;