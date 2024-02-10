import * as React from 'react';
import ReactMapGl from 'react-map-gl';

const Map = (props)=> {



  return (
  <ReactMapGl {...props}
    mapStyle="mapbox://styles/gloal/clsfbar6201uw01qygdyygt92" >Here is Map
  </ReactMapGl>
  )
}

export default Map;