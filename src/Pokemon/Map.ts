enum LandingMapId {
  landing = "landing",
  floor1 = "floor1",
  floor1FromUpstairs = "floor1FromUpstairs",
  floor2 = "floor2",
}

export const MapId = { ...LandingMapId };
export type MapId = LandingMapId;

export function isMapId(mapId: string): mapId is MapId {
  return mapId in MapId;
}