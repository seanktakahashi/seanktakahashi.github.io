import interiorTileSet from '../images/pokemon-emerald-interiors.png';

export enum InteriorTile {
  nothing = "nothing",
  nothingDoor = "nothing-door",
  // Wood Floor
  homeWoodFloor = "home-wood-floor",
  homeWoodFloorDark = "home-wood-floor-dark",
  homeWoodFloorDarkN = "home-wood-floor-dark-n",
  homeWoodFloorDarkNE = "home-wood-floor-dark-ne",
  homeWoodFloorLightSE = "home-wood-floor-light-se",
  // Doormat
  doorMatW = "doormat-w",
  doorMatE = "doormat-e",
  // Carpet
  homeCarpet = "home-carpet",
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
  // Downstairs Furniture
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
  // Upstairs Furniture
  homeBedN = "home-bed-n",
  homeBedNW = "home-bed-nw",
  homeBedNE = "home-bed-ne",
  homeBedS = "home-bed-s",
  homeBedSW = "home-bed-sw",
  homeBedSE = "home-bed-se",
  homeComputerDeskNW = "home-computer-desk-nw",
  homeComputerDeskNE = "home-computer-desk-ne",
  homeComputerDeskW = "home-computer-desk-w",
  homeComputerDeskE = "home-computer-desk-e",
  homeComputerDeskSW = "home-computer-desk-sw",
  homeComputerDeskSE = "home-computer-desk-se",
  homeMapWallS = "home-map-wall-s",
  homeMapWallN = "home-map-wall-n",
  homeGameCubeS = "home-game-cube-s",
  homeGameCubeN = "home-game-cube-n",
  homeTVS = "home-tv-s",
  homeTVN = "home-tv-n",
  homeWallClockS = "home-wall-clock-s",
  homeWallClockN = "home-wall-clock-n",
  // Wall
  homeWallN = "home-wall-n",
  homeWallS = "home-wall-s",
  homeWindowS = "home-window-s",
  homeWindowN = "home-window-n",
  // Stairs
  homeUpstairsNE = "home-upstairs-ne",
  homeUpstairsNW = "home-upstairs-nw",
  homeUpstairsN = "home-upstairs-n",
  homeUpstairsSE = "home-upstairs-se",
  homeUpstairsSW = "home-upstairs-sw",
  homeUpstairsS = "home-upstairs-s",
  homeDownstairsNE = "home-downstairs-ne",
  homeDownstairsNW = "home-downstairs-nw",
  homeDownstairsN = "home-downstairs-n",
  homeDownstairsSE = "home-downstairs-se",
  homeDownstairsSW = "home-downstairs-sw",
  homeDownstairsS = "home-downstairs-s",
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
  [InteriorTile.homeWoodFloorLightSE]: interiorTileSet,
  // Carpet
  [InteriorTile.homeCarpet]: interiorTileSet,
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
  // Downstairs Furniture
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
  // Upstairs Furniture
  [InteriorTile.homeBedN]: interiorTileSet,
  [InteriorTile.homeBedNW]: interiorTileSet,
  [InteriorTile.homeBedNE]: interiorTileSet,
  [InteriorTile.homeBedS]: interiorTileSet,
  [InteriorTile.homeBedSW]: interiorTileSet,
  [InteriorTile.homeBedSE]: interiorTileSet,
  [InteriorTile.homeComputerDeskNW]: interiorTileSet,
  [InteriorTile.homeComputerDeskNE]: interiorTileSet,
  [InteriorTile.homeComputerDeskW]: interiorTileSet,
  [InteriorTile.homeComputerDeskE]: interiorTileSet,
  [InteriorTile.homeComputerDeskSW]: interiorTileSet,
  [InteriorTile.homeComputerDeskSE]: interiorTileSet,
  [InteriorTile.homeMapWallS]: interiorTileSet,
  [InteriorTile.homeMapWallN]: interiorTileSet,
  [InteriorTile.homeGameCubeS]: interiorTileSet,
  [InteriorTile.homeGameCubeN]: interiorTileSet,
  [InteriorTile.homeTVS]: interiorTileSet,
  [InteriorTile.homeTVN]: interiorTileSet,
  [InteriorTile.homeWallClockS]: interiorTileSet,
  [InteriorTile.homeWallClockN]: interiorTileSet,
  // Wall
  [InteriorTile.homeWallN]: interiorTileSet,
  [InteriorTile.homeWallS]: interiorTileSet,
  [InteriorTile.homeWindowS]: interiorTileSet,
  [InteriorTile.homeWindowN]: interiorTileSet,
  // Stairs
  [InteriorTile.homeUpstairsNE]: interiorTileSet,
  [InteriorTile.homeUpstairsNW]: interiorTileSet,
  [InteriorTile.homeUpstairsN]: interiorTileSet,
  [InteriorTile.homeUpstairsSE]: interiorTileSet,
  [InteriorTile.homeUpstairsSW]: interiorTileSet,
  [InteriorTile.homeUpstairsS]: interiorTileSet,
  [InteriorTile.homeDownstairsNE]: interiorTileSet,
  [InteriorTile.homeDownstairsNW]: interiorTileSet,
  [InteriorTile.homeDownstairsN]: interiorTileSet,
  [InteriorTile.homeDownstairsSE]: interiorTileSet,
  [InteriorTile.homeDownstairsSW]: interiorTileSet,
  [InteriorTile.homeDownstairsS]: interiorTileSet,
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
    case InteriorTile.homeWoodFloorLightSE:
      return true;
    // Carpet
    case InteriorTile.homeCarpet:
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
    // Downstairs Furniture
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
    // Upstairs Furniture
    case InteriorTile.homeBedN:
      return false;
    case InteriorTile.homeBedS:
    case InteriorTile.homeBedNW:
    case InteriorTile.homeBedNE:
    case InteriorTile.homeBedSW:
    case InteriorTile.homeBedSE:
      return true;
    case InteriorTile.homeComputerDeskNW:
    case InteriorTile.homeComputerDeskNE:
    case InteriorTile.homeComputerDeskW:
    case InteriorTile.homeComputerDeskE:
      return false;
    case InteriorTile.homeComputerDeskSW:
    case InteriorTile.homeComputerDeskSE:
      return true;
    case InteriorTile.homeMapWallN:
    case InteriorTile.homeMapWallS:
      return false;
    case InteriorTile.homeGameCubeN:
      return false;
    case InteriorTile.homeGameCubeS:
      return true;
    case InteriorTile.homeTVS:
      return true;
    case InteriorTile.homeTVN:
      return false;
    case InteriorTile.homeWallClockS:
    case InteriorTile.homeWallClockN:
      return false;
    // Wall
    case InteriorTile.homeWallN:
    case InteriorTile.homeWallS:
    case InteriorTile.homeWindowS:
    case InteriorTile.homeWindowN:
    // Stairs
    case InteriorTile.homeUpstairsNE:
    case InteriorTile.homeUpstairsNW:
    case InteriorTile.homeUpstairsN:
    case InteriorTile.homeUpstairsSE:
    case InteriorTile.homeUpstairsSW:
      return false;
    case InteriorTile.homeUpstairsS:
      return true; // door
    case InteriorTile.homeDownstairsNE:
    case InteriorTile.homeDownstairsNW:
    case InteriorTile.homeDownstairsN:
    case InteriorTile.homeDownstairsSE:
    case InteriorTile.homeDownstairsSW:
      return false;
    case InteriorTile.homeDownstairsS:
      return true; // door
  }
}