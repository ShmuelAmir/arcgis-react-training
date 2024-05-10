import React from "react";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";

import { MapViewContext } from "../Contexts/MapViewContext";

export function ScalebarWidget() {
  const { view } = React.useContext(MapViewContext);

  React.useEffect(() => {
    const scalebar = new ScaleBar({
      view: view,
    });

    view.ui.add(scalebar, "bottom-left");

    return () => scalebar.destroy();
  }, [view]);

  return <></>;
}
