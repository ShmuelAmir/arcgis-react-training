import Map from "@arcgis/core/Map";

export function createMap(mapProperties: __esri.MapProperties) {
  return new Map({ basemap: "arcgis/topographic", ...mapProperties });
}
