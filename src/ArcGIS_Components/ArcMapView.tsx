import React from "react";
import Basemap from "@arcgis/core/Basemap";
import config from "@arcgis/core/config";

import { MapViewContext } from "./Contexts/MapViewContext";
import { createMapView } from "../ArcGIS_SDK/createMapView";
import "./ArcMapView.css";
import { createMap } from "../ArcGIS_SDK/createMap";

config.apiKey = import.meta.env.VITE_ESRI_API_KEY as string;

interface IArcMapViewProps {
  children?: React.ReactNode;
  mapProperties?: __esri.MapProperties;
}

export const ArcMapView = (props: IArcMapViewProps) => {
  const { children, mapProperties } = props;

  const mapRef = React.useRef(null);

  const [view, setView] = React.useState<__esri.MapView | undefined>();

  React.useEffect(() => {
    if (!mapRef?.current) return;

    // const map = createWebMap("41281c51f9de45edaf1c8ed44bb10e30");
    const map = createMap({ basemap: "osm" });

    const _view = createMapView({ map, container: mapRef.current });
    setView(_view);

    return () => _view && _view.destroy();
  }, [mapProperties]);

  React.useEffect(() => {
    if (!view || !mapProperties) return;

    view.map.basemap = Basemap.fromId(mapProperties.basemap as string);
  }, [view, mapProperties]);

  return (
    <div className="viewDiv" ref={mapRef}>
      {view && (
        <MapViewContext.Provider value={{ view }}>
          {children}
        </MapViewContext.Provider>
      )}
    </div>
  );
};
