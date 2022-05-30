import { Door, PokemonMap, Sign } from "../../Pokemon/types";
import { TileType } from "../tiles/TileType";

const nothing = TileType.nothing;
const nothingDoor = TileType.nothingDoor;
const homeWoodFloor = TileType.homeWoodFloor;
const doorMatW = TileType.doorMatW;
const doorMatE = TileType.doorMatE;

const carpetE = TileType.homeCarpetE;
const carpetW = TileType.homeCarpetW;
const carpetSE = TileType.homeCarpetSE;
const carpetSW = TileType.homeCarpetSW;
const carpetS = TileType.homeCarpetS;
const carpetNE = TileType.homeCarpetNE;
const carpetNW = TileType.homeCarpetNW;
const carpetN = TileType.homeCarpetN;

const carpetChairE = TileType.homeCarpetChairE;
const carpetChairW = TileType.homeCarpetChairW;

const carpetTableNE = TileType.homeCarpetTableNE;
const carpetTableNW = TileType.homeCarpetTableNW;
const carpetTableSE = TileType.homeCarpetTableSE;
const carpetTableSW = TileType.homeCarpetTableSW;

const doors: Door[] = [
  {
    position: { i: 2, j: 1 }, // house door
    naviateTo: '/',
  },
];

const signs: Sign[] = [
  {
    position: { i: 7, j: 7 },
    dialog: "Sean's house!"
  },
];

export const homeMap: PokemonMap = {
  tiles: [
    [carpetNW, carpetN, carpetN, carpetN, carpetN, carpetNE, homeWoodFloor, homeWoodFloor, homeWoodFloor, homeWoodFloor],
    [carpetW, carpetChairW, carpetTableNW, carpetTableNE, carpetChairE, carpetE, homeWoodFloor, homeWoodFloor, homeWoodFloor, homeWoodFloor],
    [carpetW, carpetChairW, carpetTableSW, carpetTableSE, carpetChairE, carpetE, homeWoodFloor, homeWoodFloor, homeWoodFloor, homeWoodFloor],
    [carpetSW, carpetS, carpetS, carpetS, carpetS, carpetSE, homeWoodFloor, doorMatW, doorMatE, homeWoodFloor],
    [nothing, nothing, nothing, nothing, nothing, nothingDoor, nothingDoor, nothing],
  ],
  doors,
  signs: [],
  start: { i: 1, j: 1 } // in front of house
}