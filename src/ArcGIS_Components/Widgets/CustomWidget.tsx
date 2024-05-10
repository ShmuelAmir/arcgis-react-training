import React from "react";

import { MapViewContext } from "../Contexts/MapViewContext";

export function CustomWidget({
  children: WidgetComponent,
}: {
  children: React.ComponentType<{ view: __esri.MapView }>;
}) {
  const { view } = React.useContext(MapViewContext);
  const widgetRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!view || !widgetRef.current) return;

    view.ui.add(widgetRef.current, "top-right");

    const currWidget = widgetRef.current;

    return () => {
      if (currWidget) {
        view.ui.remove(currWidget);
      }
    };
  }, [view]);

  return <div ref={widgetRef}>{view && <WidgetComponent view={view} />}</div>;
}
