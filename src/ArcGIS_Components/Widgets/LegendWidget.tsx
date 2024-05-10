import React from "react";
import Legend from "@arcgis/core/widgets/Legend";

import { MapViewContext } from "../Contexts/MapViewContext";

export function LegendWidget() {
  const { view } = React.useContext(MapViewContext);

  React.useEffect(() => {
    const legend = new Legend({
      view: view,
    });

    view.ui.add(legend, "top-right");

    return () => legend.destroy();
  }, [view]);

  return <></>;
}
