import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';

export default class SimpleMapPage extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [44.045347199999995, -123.0777213],
    zoom: 9,
    greatPlaceCoords: {lat: 44.045347199999995, lng:  -123.0777213},
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);


  };

  createMapOptions(maps) {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwhell: false,
      styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
    }
  };


  render() {
    return (
       <GoogleMap
       options={this.createMapOptions}
        center={this.props.center}
        zoom={this.props.zoom}>
        <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
      </GoogleMap>
    );
  }
}