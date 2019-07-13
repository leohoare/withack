import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



const AnyReactComponent = ({ text }) => <div>{text}</div>;
class PointComponent extends Component 
{

  render() {
    const point = require('./point.png');
    return (
      <img style={{width:'30px', height:'25px'}} src={point} />
    )
  }
} 


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '60%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAL6TJWfyItwAjsArphE0ThCOCP76yariY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {tooltips.map(example => <PointComponent lng={example['lng']} lat={example['lat']}  />)}


        </GoogleMapReact>
      </div>
    );
  }
}

const tooltips = [
  {
    lat: 59.955413,
    lng: 30.337844,
    text: ''
  },


]


 
export default SimpleMap;