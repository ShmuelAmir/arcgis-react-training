import React from "react";
import Locate from "@arcgis/core/widgets/Locate";

import { MapViewContext } from "../Contexts/MapViewContext";

export function ArcLocate() {
  const { view } = React.useContext(MapViewContext);

  React.useEffect(() => {
    const locate = new Locate({
      view: view,
      rotationEnabled: false,
      goToOverride: (view, options) => {
        options.target.scale = 15000;
        return view.goTo(options.target);
      },
    });

    view.ui.add(locate, "top-left");

    return () => locate.destroy();
  }, [view]);

  return <></>;
}
