import { MapId } from "../Map";
import { Tile } from "../tiles/Tile";
import { Direction, Door, PokemonMap, Sign } from "../types";

const nothing = Tile.nothing;
const nothingDoor = Tile.nothingDoor;
const doorMatW = Tile.doorMatW;
const doorMatE = Tile.doorMatE;

const woodFloor = Tile.homeWoodFloor;
const woodFloorDark = Tile.homeWoodFloorDark;
const woodFloorDarkN = Tile.homeWoodFloorDarkN;
const woodFloorDarkNE = Tile.homeWoodFloorDarkNE;

const carpetE = Tile.homeCarpetE;
const carpetW = Tile.homeCarpetW;
const carpetSE = Tile.homeCarpetSE;
const carpetSW = Tile.homeCarpetSW;
const carpetS = Tile.homeCarpetS;
const carpetNE = Tile.homeCarpetNE;
const carpetNW = Tile.homeCarpetNW;
const carpetN = Tile.homeCarpetN;

const carpetNTv = Tile.homeCarpetNTv;
const tvScreen = Tile.tvScreen;
const carpetNCabinetSE = Tile.homeCarpetNCabinetSE;
const carpetNCabinetSW = Tile.homeCarpetNCabinetSW;
const carpetNCabinetNE = Tile.homeCarpetNCabinetNE;
const carpetNCabinetNW = Tile.homeCarpetNCabinetNW;

const carpetChairE = Tile.homeCarpetChairE;
const carpetChairW = Tile.homeCarpetChairW;

const carpetTableNE = Tile.homeCarpetTableNE;
const carpetTableNW = Tile.homeCarpetTableNW;
const carpetTableSE = Tile.homeCarpetTableSE;
const carpetTableSW = Tile.homeCarpetTableSW;

const fridgeS = Tile.homeFridgeS;
const fridgeN = Tile.homeFridgeN;
const sinkNW = Tile.homeSinkNW;
const sinkNE = Tile.homeSinkNE;
const sinkSW = Tile.homeSinkSW;
const sinkSE = Tile.homeSinkSE;
const displayNW = Tile.homeDisplayNW;
const displayNE = Tile.homeDisplayNE;
const displaySW = Tile.homeDisplaySW;
const displaySE = Tile.homeDisplaySE;

const wallS = Tile.homeWallS;
const wallN = Tile.homeWallN;
const windowS = Tile.homeWindowS;
const windowN = Tile.homeWindowN;
const upstairsNE = Tile.homeUpstairsNE;
const upstairsNW = Tile.homeUpstairsNW;
const upstairsN = Tile.homeUpstairsN;
const upstairsSE = Tile.homeUpstairsSE;
const upstairsSW = Tile.homeUpstairsSW;
const upstairsS = Tile.homeUpstairsS;

const doors: Door[] = [
  {
    position: { i: 9, j: 8 }, // front door
    destination: MapId.landing,
  },
  {
    position: { i: 9, j: 9 }, // front door
    destination: MapId.landing,
  },
  {
    position: { i: 2, j: 8 }, // upstairs
    destination: MapId.floor2,
  },
];

const signs: Sign[] = [
  {
    position: { i: 4, j: 4 },
    dialog: "Maybe I should subscribe to Hulu again. There isn't much to watch on TV without a subscription service"
  },
];

export const inFrontOfStairs = {
  position: { i: 3, j: 8 },
  direction: Direction.DOWN,
}

export const frontDoor = {
  position: { i: 8, j: 8 },
  direction: Direction.UP,
}

export const floor1: PokemonMap = {
  tiles: [
    [wallN, wallN, windowN, wallN, wallN, windowN, windowN, nothing, nothing, nothing, nothing],
    [fridgeN, sinkNW, sinkNE, displayNW, displayNE, windowS, windowS, upstairsNW, upstairsN, upstairsNE, wallN],
    [fridgeS, sinkSW, sinkSE, displaySW, displaySE, woodFloorDarkN, woodFloorDarkN, upstairsSW, upstairsS, upstairsSE, wallS],
    [woodFloorDark, woodFloorDarkN, woodFloorDarkN, woodFloorDarkN, woodFloorDarkN, woodFloor, woodFloor, woodFloorDarkNE, woodFloorDarkN, woodFloorDarkN, woodFloorDarkN],
    [woodFloorDark, woodFloor, carpetNCabinetNW, carpetNCabinetNE, tvScreen, woodFloor, woodFloor, woodFloor, woodFloor, woodFloor, woodFloor],
    [woodFloorDark, carpetNW, carpetNCabinetSW, carpetNCabinetSE, carpetNTv, carpetN, carpetNE, woodFloor, woodFloor, woodFloor, woodFloor],
    [woodFloorDark, carpetW, carpetChairW, carpetTableNW, carpetTableNE, carpetChairE, carpetE, woodFloor, woodFloor, woodFloor, woodFloor],
    [woodFloorDark, carpetW, carpetChairW, carpetTableSW, carpetTableSE, carpetChairE, carpetE, woodFloor, woodFloor, woodFloor, woodFloor],
    [woodFloorDark, carpetSW, carpetS, carpetS, carpetS, carpetS, carpetSE, woodFloor, doorMatW, doorMatE, woodFloor],
    [nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothing, nothingDoor, nothingDoor, nothing],
  ],
  doors,
  signs: signs,
  start: frontDoor,
  background: undefined,
}

export const floor1FromUpstairs: PokemonMap = {
  ...floor1,
  start: inFrontOfStairs,
}