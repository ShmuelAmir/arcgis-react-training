import MapView from "@arcgis/core/views/MapView";

type CreateMapViewProps = {
  map: __esri.MapProperties;
  container: HTMLDivElement;
};

export const createMapView = ({ map, container }: CreateMapViewProps) => {
  return new MapView({
    map: map,
    container: container,
    center: [34.8514, 31.9993],
    zoom: 7,
  });
};
