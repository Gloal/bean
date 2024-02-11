import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import pin from "../assets/Images/pin.svg";
import Card from "./Card";

const MapComp = ({ data, token }) => {
  const [selectedCafe, setSelectedCafe] = useState(null);

  return (
    <Map
      initialViewState={{
        longitude: -0.207,
        latitude: 51.5,
        zoom: 12,
      }}
      mapboxAccessToken={token}
      style={{ width: 1200, height: 800 }}
      mapStyle="mapbox://styles/gloal/clsfe7wn0008d01qxh5p67hdn"
    >
      {...data.map((cafe) => (
        <Marker
          key={cafe._id}
          latitude={cafe.Geocode_Latitude}
          longitude={cafe.Geocode_Longitude}
        >
          <img
            src={pin}
            width="25px"
            height="30px"
            background="none"
            alt="cafe-icon"
            cursor="pointer"
            onClick={(e) => {
              e.preventDefault();
              setSelectedCafe(cafe);
              console.log(selectedCafe);
            }}
          />
        </Marker>
      ))}

      {selectedCafe ? (
        <Popup
          height="200px"
          width="200px"
          align-items="center"
          longitude={selectedCafe.Geocode_Longitude}
          latitude={selectedCafe.Geocode_Latitude}
          closeOnClick={false}
          onClose={() => {
            setSelectedCafe(null);
          }}
        >
          <Card key={selectedCafe._id} shopId={selectedCafe._id} />
        </Popup>
      ) : null}
    </Map>
  );
};

export default MapComp;
