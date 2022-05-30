import interiorTileSet from '../images/pokemon-emerald-interiors.png';

export enum InteriorTileType {
  nothing = "nothing",
  nothingDoor = "nothing-door",
  // Floor
  homeWoodFloor = "home-wood-floor",
  doorMatW = "doormat-w",
  doorMatE = "doormat-e",
  // Carpet
  homeCarpetE = "home-carpet-e",
  homeCarpetSE = "home-carpet-se",
  homeCarpetSW = "home-carpet-sw",
  homeCarpetS = "home-carpet-s",
  homeCarpetW = "home-carpet-w",
  homeCarpetNE = "home-carpet-ne",
  homeCarpetNW = "home-carpet-nw",
  homeCarpetN = "home-carpet-n",
  // Carpet Chair
  homeCarpetChairE = "home-carpet-chair-e",
  homeCarpetChairW = "home-carpet-chair-w",
  // Carpet Table
  homeCarpetTableNE = "home-carpet-table-ne",
  homeCarpetTableNW = "home-carpet-table-nw",
  homeCarpetTableSE = "home-carpet-table-se",
  homeCarpetTableSW = "home-carpet-table-sw",
}

export const getInteriorTypeImage: {
  [key: string]: string
} = {
  [InteriorTileType.nothing]: interiorTileSet,
  [InteriorTileType.nothingDoor]: interiorTileSet,
  [InteriorTileType.homeWoodFloor]: interiorTileSet,
  [InteriorTileType.doorMatW]: interiorTileSet,
  [InteriorTileType.doorMatE]: interiorTileSet,
  // Carpet
  [InteriorTileType.homeCarpetE]: interiorTileSet,
  [InteriorTileType.homeCarpetW]: interiorTileSet,
  [InteriorTileType.homeCarpetSE]: interiorTileSet,
  [InteriorTileType.homeCarpetSW]: interiorTileSet,
  [InteriorTileType.homeCarpetS]: interiorTileSet,
  [InteriorTileType.homeCarpetN]: interiorTileSet,
  [InteriorTileType.homeCarpetNE]: interiorTileSet,
  [InteriorTileType.homeCarpetNW]: interiorTileSet,
  // Carpet Chair
  [InteriorTileType.homeCarpetChairE]: interiorTileSet,
  [InteriorTileType.homeCarpetChairW]: interiorTileSet,
  // Carpet Table
  [InteriorTileType.homeCarpetTableNE]: interiorTileSet,
  [InteriorTileType.homeCarpetTableNW]: interiorTileSet,
  [InteriorTileType.homeCarpetTableSE]: interiorTileSet,
  [InteriorTileType.homeCarpetTableSW]: interiorTileSet,
}