import Graphic from "@arcgis/core/Graphic";
import { addressToLocations } from "@arcgis/core/rest/locator.js";

import { places } from "../../data/places";
import { createSimpleMarkerSymbol } from "../../ArcGIS_SDK/symbols/creactSimpleMarkerSymbole";
import { Select } from "../../components/Select";

const locatorUrl =
  "http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";

const symbol = createSimpleMarkerSymbol({
  color: "#000000",
  size: "12px",
  outline: {
    color: "#ffffff",
    width: "2px",
  },
});

function findPlaces(view: __esri.MapView, category: string, pt: __esri.Point) {
  view.closePopup();
  view.graphics.removeAll();

  if (category === "Choose a place type...") {
    return;
  }

  addressToLocations(locatorUrl, {
    address: category,
    location: pt,
    categories: [category],
    maxLocations: 25,
    outFields: ["Place_addr", "PlaceName"],
  }).then(
    (
      results: {
        attributes: Record<string, string>;
        location: __esri.Point;
      }[]
    ) => {
      results.forEach((result) => {
        const graphic = new Graphic({
          attributes: result.attributes,
          geometry: result.location,
          symbol,
          popupTemplate: {
            title: "{PlaceName}",
            content: "{Place_addr}",
          },
        });

        view.graphics.add(graphic);
      });
    }
  );
}

export function SelectWidget({ view }: { view: __esri.MapView }) {
  return (
    <Select
      options={places}
      handleChange={(event) => {
        findPlaces(view, event.target.value, view.center);
      }}
      className="esri-widget esri-select"
      style={{
        width: 175,
        fontFamily: "Avenir Next W00",
        fontSize: "1em",
      }}
    />
  );
}
