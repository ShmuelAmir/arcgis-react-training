import React from "react";

interface IGraphicsLayerContext {
  graphicsLayer: __esri.GraphicsLayer;
}

export const GraphicsLayerContext = React.createContext(
  {} as IGraphicsLayerContext
);
