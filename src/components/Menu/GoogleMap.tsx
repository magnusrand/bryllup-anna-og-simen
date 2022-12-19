import { useEffect, useRef } from "react";

export const GoogleMap = ({
  center,
  zoom,
  label
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  label?: string;
}) => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapElement.current) {
      return;
    }
    const map = new google.maps.Map(mapElement.current, {
      center,
      zoom,
    });
    new google.maps.Marker({ position: center, map, label });
  });

  return <div ref={mapElement} style={{ height: "100%" }} id="map" />;
};
