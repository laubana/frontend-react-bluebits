import React, { useEffect, useState } from "react";
import Map, { Marker, FullscreenControl, GeolocateControl } from "react-map-gl";
import { MapProps } from "./Map.props";
import { Container } from "./Map.style";
import { Location } from "../../types/Location";

import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = (props: MapProps): JSX.Element => {
  const { forwardedRef, location, markers } = props;

  const [currentLocation, setCurrentLocation] = useState<Location | undefined>(
    undefined
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setCurrentLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, [navigator.geolocation.getCurrentPosition((position) => position)]);

  return (
    <Container>
      {currentLocation && (
        <Map
          ref={forwardedRef}
          mapboxAccessToken={import.meta.env.VITE_MAPBOX}
          initialViewState={{
            zoom: 12,
            latitude: location?.latitude || currentLocation.latitude,
            longitude: location?.longitude || currentLocation.longitude,
          }}
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid lightgrey",
            borderRadius: "8px",
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <Marker
            latitude={currentLocation.latitude}
            longitude={currentLocation.longitude}
            color="black"
          />
          {markers &&
            markers.map((locationMapItem, locationMapIndex) => (
              <Marker
                latitude={locationMapItem.latitude}
                longitude={locationMapItem.longitude}
                color="crimson"
                key={locationMapIndex}
              />
            ))}
        </Map>
      )}
    </Container>
  );
};

export default React.memo(MapComponent);
