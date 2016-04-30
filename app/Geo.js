var React = require('react');

var ReactGeoLocation = React.createClass({
  
  _handleGeoPosition: function(position) {
    this.props.getCoords(position.coords);
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