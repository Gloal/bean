import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import pin from "../assets/Images/pin.svg";
import Card from "./Card";
import "../styles/MapComp.css";
import { Link } from "@mui/material";

const MapComp = ({ data, token }) => {
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [viewState, setViewState] = useState({
    longitude: -0.207,
    latitude: 51.5,
    zoom: 10,
  })

  const showCafeLocation = (cafe)=>(e)=>{
    e.preventDefault();
    setViewState({
      longitude: cafe.Geocode_Longitude,
      latitude: cafe.Geocode_Latitude,
      zoom: 12
    })
    setSelectedCafe(cafe);
    console.log(selectedCafe);
  }

  const onMove = (viewState)=>{
    const newMapCenter = [viewState.longitude, viewState.latitude]
    setViewState(newMapCenter)
  }

  return (
    <>
      <div className="wrap">
        <div className="sidebar">
          <div className="heading">
            Favorite Cafes
          </div>
          <div id="listings" className="listings">
            {...data.map((cafe) => (
                <div className="item">
                  <Link className="title" href="#" 
                  onClick={showCafeLocation(cafe)}>
                    {cafe.BusinessName}
                  </Link>
                  <div>
                    {cafe.AddressLine2} {cafe.PostCode}
                  </div>
                </div>
            ))}
          </div>
        </div>
        <div id="map" className="map">
          <Map
          {...viewState}
            onMove={onMove}
            mapboxAccessToken={token}
            style={{ width: "75vw", height: "70vh" }}
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
        </div>
      </div>
    </>
  );
};

export default MapComp;
