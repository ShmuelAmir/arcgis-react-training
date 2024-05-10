import React from "react";
import Graphic from "@arcgis/core/Graphic";

import { GraphicsLayerContext } from "./Contexts/GraphicsLayerContext";

export const ArcGraphic = (graphicProperties: __esri.GraphicProperties) => {
  const { graphicsLayer } = React.useContext(GraphicsLayerContext);

  const [graphic, setGraphic] = React.useState<__esri.Graphic | undefined>();

  React.useEffect(() => {
    const graphicPoint = new Graphic({
      attributes: { Name: "Graphic", Descripsion: "I am a point" },
      popupTemplate: {
        title: "{Name}",
        content: "{Descripsion}",
      },
      ...graphicProperties,
    });

    setGraphic(graphicPoint);
  }, [graphicProperties]);

  React.useEffect(() => {
    if (!graphic || !graphicsLayer) return;
    graphicsLayer.add(graphic);
  }, [graphic, graphicsLayer]);

  return <></>;
};
