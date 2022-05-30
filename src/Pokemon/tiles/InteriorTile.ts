import interiorTileSet from '../images/pokemon-emerald-interiors.png';

export enum InteriorTile {
  nothing = "nothing",
  nothingDoor = "nothing-door",
  // Wood Floor
  homeWoodFloor = "home-wood-floor",
  homeWoodFloorDark = "home-wood-floor-dark",
  homeWoodFloorDarkN = "home-wood-floor-dark-n",
  homeWoodFloorDarkNE = "home-wood-floor-dark-ne",
  // Doormat
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
  // N Carpet Objects
  homeCarpetNTv = "home-carpet-n-tv",
  tvScreen = "tv-screen",
  homeCarpetNCabinetSE = "home-carpet-n-cabinet-se",
  homeCarpetNCabinetSW = "home-carpet-n-cabinet-sw",
  homeCarpetNCabinetNE = "home-carpet-n-cabinet-ne",
  homeCarpetNCabinetNW = "home-carpet-n-cabinet-nw",
  // Carpet Chair
  homeCarpetChairE = "home-carpet-chair-e",
  homeCarpetChairW = "home-carpet-chair-w",
  // Carpet Table
  homeCarpetTableNE = "home-carpet-table-ne",
  homeCarpetTableNW = "home-carpet-table-nw",
  homeCarpetTableSE = "home-carpet-table-se",
  homeCarpetTableSW = "home-carpet-table-sw",
  // Furniture
  homeFridgeS = "home-fridge-s",
  homeFridgeN = "home-fridge-n",
  homeSinkNW = "home-sink-nw",
  homeSinkNE = "home-sink-ne",
  homeSinkSW = "home-sink-sw",
  homeSinkSE = "home-sink-se",
  homeDisplayNW = "home-display-nw",
  homeDisplayNE = "home-display-ne",
  homeDisplaySW = "home-display-sw",
  homeDisplaySE = "home-display-se",
  // Wall
  homeWallN = "home-wall-n",
  homeWallS = "home-wall-s",
  homeWindowS = "home-window-s",
  homeWindowN = "home-window-n",
  homeUpstairsNE = "home-upstairs-ne",
  homeUpstairsNW = "home-upstairs-nw",
  homeUpstairsN = "home-upstairs-n",
  homeUpstairsSE = "home-upstairs-se",
  homeUpstairsSW = "home-upstairs-sw",
  homeUpstairsS = "home-upstairs-s",
}

export const getInteriorTypeImage: {
  [key: string]: string
} = {
  [InteriorTile.nothing]: interiorTileSet,
  [InteriorTile.nothingDoor]: interiorTileSet,
  // Doormat
  [InteriorTile.doorMatW]: interiorTileSet,
  [InteriorTile.doorMatE]: interiorTileSet,
  // Wood Floor
  [InteriorTile.homeWoodFloor]: interiorTileSet,
  [InteriorTile.homeWoodFloorDark]: interiorTileSet,
  [InteriorTile.homeWoodFloorDarkN]: interiorTileSet,
  [InteriorTile.homeWoodFloorDarkNE]: interiorTileSet,
  // Carpet
  [InteriorTile.homeCarpetE]: interiorTileSet,
  [InteriorTile.homeCarpetW]: interiorTileSet,
  [InteriorTile.homeCarpetSE]: interiorTileSet,
  [InteriorTile.homeCarpetSW]: interiorTileSet,
  [InteriorTile.homeCarpetS]: interiorTileSet,
  [InteriorTile.homeCarpetN]: interiorTileSet,
  [InteriorTile.homeCarpetNE]: interiorTileSet,
  [InteriorTile.homeCarpetNW]: interiorTileSet,
  // N Carpet Objects
  [InteriorTile.homeCarpetNTv]: interiorTileSet,
  [InteriorTile.tvScreen]: interiorTileSet,
  [InteriorTile.homeCarpetNCabinetSE]: interiorTileSet,
  [InteriorTile.homeCarpetNCabinetSW]: interiorTileSet,
  [InteriorTile.homeCarpetNCabinetNE]: interiorTileSet,
  [InteriorTile.homeCarpetNCabinetNW]: interiorTileSet,
  // Carpet Chair
  [InteriorTile.homeCarpetChairE]: interiorTileSet,
  [InteriorTile.homeCarpetChairW]: interiorTileSet,
  // Carpet Table
  [InteriorTile.homeCarpetTableNE]: interiorTileSet,
  [InteriorTile.homeCarpetTableNW]: interiorTileSet,
  [InteriorTile.homeCarpetTableSE]: interiorTileSet,
  [InteriorTile.homeCarpetTableSW]: interiorTileSet,
  // Furniture
  [InteriorTile.homeFridgeS]: interiorTileSet,
  [InteriorTile.homeFridgeN]: interiorTileSet,
  [InteriorTile.homeSinkNW]: interiorTileSet,
  [InteriorTile.homeSinkNE]: interiorTileSet,
  [InteriorTile.homeSinkSW]: interiorTileSet,
  [InteriorTile.homeSinkSE]: interiorTileSet,
  [InteriorTile.homeDisplayNW]: interiorTileSet,
  [InteriorTile.homeDisplayNE]: interiorTileSet,
  [InteriorTile.homeDisplaySW]: interiorTileSet,
  [InteriorTile.homeDisplaySE]: interiorTileSet,
  // Wall
  [InteriorTile.homeWallN]: interiorTileSet,
  [InteriorTile.homeWallS]: interiorTileSet,
  [InteriorTile.homeWindowS]: interiorTileSet,
  [InteriorTile.homeWindowN]: interiorTileSet,
  [InteriorTile.homeUpstairsNE]: interiorTileSet,
  [InteriorTile.homeUpstairsNW]: interiorTileSet,
  [InteriorTile.homeUpstairsN]: interiorTileSet,
  [InteriorTile.homeUpstairsSE]: interiorTileSet,
  [InteriorTile.homeUpstairsSW]: interiorTileSet,
  [InteriorTile.homeUpstairsS]: interiorTileSet,
}

export const isInteriorTileWalkable = (tileType: InteriorTile): boolean => {
  switch (tileType) {
    case InteriorTile.nothing:
      return false;
    case InteriorTile.nothingDoor:
      return true;
    // Doormat
    case InteriorTile.doorMatW:
    case InteriorTile.doorMatE:
    // Wood Floor
    case InteriorTile.homeWoodFloor:
    case InteriorTile.homeWoodFloorDark:
    case InteriorTile.homeWoodFloorDarkN:
    case InteriorTile.homeWoodFloorDarkNE:
      return true;
    // Carpet
    case InteriorTile.homeCarpetE:
    case InteriorTile.homeCarpetW:
    case InteriorTile.homeCarpetSE:
    case InteriorTile.homeCarpetSW:
    case InteriorTile.homeCarpetS:
    case InteriorTile.homeCarpetN:
    case InteriorTile.homeCarpetNE:
    case InteriorTile.homeCarpetNW:
      return true;
    // N Carpet Objects
    case InteriorTile.homeCarpetNTv:
      return true;
    case InteriorTile.tvScreen:
      return false;
    case InteriorTile.homeCarpetNCabinetSE:
    case InteriorTile.homeCarpetNCabinetSW:
      return true;
    case InteriorTile.homeCarpetNCabinetNE:
    case InteriorTile.homeCarpetNCabinetNW:
      return false;
    // Carpet Chair
    case InteriorTile.homeCarpetChairE:
    case InteriorTile.homeCarpetChairW:
      return true;
    // Carpet Table
    case InteriorTile.homeCarpetTableNE:
    case InteriorTile.homeCarpetTableNW:
    case InteriorTile.homeCarpetTableSE:
    case InteriorTile.homeCarpetTableSW:
      return false;
    // Furniture
    case InteriorTile.homeFridgeS:
    case InteriorTile.homeFridgeN:
    case InteriorTile.homeSinkNW:
    case InteriorTile.homeSinkNE:
    case InteriorTile.homeSinkSW:
    case InteriorTile.homeSinkSE:
    case InteriorTile.homeDisplayNW:
    case InteriorTile.homeDisplayNE:
    case InteriorTile.homeDisplaySW:
    case InteriorTile.homeDisplaySE:
      return false;
    // Wall
    case InteriorTile.homeWallN:
    case InteriorTile.homeWallS:
    case InteriorTile.homeWindowS:
    case InteriorTile.homeWindowN:
    case InteriorTile.homeUpstairsNE:
    case InteriorTile.homeUpstairsNW:
    case InteriorTile.homeUpstairsN:
    case InteriorTile.homeUpstairsSE:
    case InteriorTile.homeUpstairsSW:
      return false;
    case InteriorTile.homeUpstairsS:
      return true; // door
  }
}