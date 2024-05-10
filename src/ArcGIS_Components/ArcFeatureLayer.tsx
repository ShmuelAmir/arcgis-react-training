// view.map.add(trailsLayer, 0);
import React from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import { MapViewContext } from "./Contexts/MapViewContext";

export const ArcFeatureLayer = () => {
  const { view } = React.useContext(MapViewContext);

  const [featureLayer, setFeatureLayer] = React.useState<
    __esri.FeatureLayer | undefined
  >();

  React.useEffect(() => {
    const _featureLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
    });
    setFeatureLayer(_featureLayer);
  }, []);

  React.useEffect(() => {
    if (!view || !featureLayer) return;
    view.map.add(featureLayer);

    return () => featureLayer && featureLayer.destroy();
  }, [view, featureLayer]);

  return <></>;
};
