import { createPoint } from "./ArcGIS_SDK/geometry/createPoint";
import { createSimpleMarkerSymbol } from "./ArcGIS_SDK/symbols/creactSimpleMarkerSymbole";
import { ArcMapView } from "./ArcGIS_Components/ArcMapView";
import { ArcGraphicsLayer } from "./ArcGIS_Components/ArcGraphicsLayer";
import { ArcGraphic } from "./ArcGIS_Components/ArcGraphic";
import { ArcFeatureLayer } from "./ArcGIS_Components/ArcFeatureLayer";
import { ArcLocate } from "./ArcGIS_Components/Widgets/ArcLocate";
import { CustomWidget } from "./ArcGIS_Components/Widgets/CustomWidget";
import { SelectWidget } from "./ArcGIS_Components/Widgets/SelectWidget";
import "./App.css";
import { LegendWidget } from "./ArcGIS_Components/Widgets/LegendWidget";
import { ScalebarWidget } from "./ArcGIS_Components/Widgets/ScalebarWidget";

function App() {
  const point = createPoint({
    longitude: 34.8514,
    latitude: 31.9993,
  });

  const simpleMarkerSymbol = createSimpleMarkerSymbol({
    color: "blue",
  });

  return (
    <ArcMapView>
      <ArcGraphicsLayer>
        <ArcGraphic geometry={point} symbol={simpleMarkerSymbol} />
      </ArcGraphicsLayer>
      <ArcFeatureLayer />
      <ArcLocate />
      <CustomWidget children={SelectWidget} />
      <ScalebarWidget />
      <LegendWidget />
    </ArcMapView>
  );
}

export default App;
