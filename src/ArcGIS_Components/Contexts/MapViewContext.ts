import React from "react";

interface IViewContext {
  view: __esri.MapView;
}

export const MapViewContext = React.createContext({} as IViewContext);
