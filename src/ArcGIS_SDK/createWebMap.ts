import WebMap from "@arcgis/core/WebMap";

export function createWebMap(id: string) {
  return new WebMap({
    portalItem: {
      id: id,
    },
  });
}
