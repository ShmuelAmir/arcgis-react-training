import React from "react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

import { MapViewContext } from "./Contexts/MapViewContext";
import { GraphicsLayerContext } from "./Contexts/GraphicsLayerContext";

interface IArcGraphicsLayerProps {
  children?: React.ReactNode;
}

export const ArcGraphicsLayer = (props: IArcGraphicsLayerProps) => {
  const { children } = props;
  const { view } = React.useContext(MapViewContext);

  const [graphicsLayer, setGraphicsLayer] = React.useState<
    __esri.GraphicsLayer | undefined
  >();

  React.useEffect(() => {
    const _graphicsLayer = new GraphicsLayer();
    setGraphicsLayer(_graphicsLayer);
  }, []);

  React.useEffect(() => {
    if (!view || !graphicsLayer) return;
    view.map.add(graphicsLayer);
  }, [view, graphicsLayer]);

  return (
    <>
      {graphicsLayer && (
        <GraphicsLayerContext.Provider value={{ graphicsLayer }}>
          {children}
        </GraphicsLayerContext.Provider>
      )}
    </>
  );
};
