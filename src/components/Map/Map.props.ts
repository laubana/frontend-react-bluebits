import { ForwardedRef } from "react";
import { Location } from "../../types/Location";
import { MapRef } from "react-map-gl";

export interface MapProps {
  forwardedRef?: ForwardedRef<MapRef>;
  location?: Location;
  markers?: Location[];
}
