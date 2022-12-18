import { useEffect, useRef } from "react";

export const GoogleMap = ({
  center,
  zoom,
}: {
  // @ts-expect-error typesjekking må fikses på en annen måte her
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapElement.current) {
      return;
    }
    // @ts-expect-error google mangler korrekt typesjekking
    const map = new google.maps.Map(mapElement.current, {
      center,
      zoom,
    });
    // @ts-expect-error google mangler korrekt typesjekking
    new google.maps.Marker({ position: center, map });
  });

  return <div ref={mapElement} style={{ height: "100%" }} id="map" />;
};
