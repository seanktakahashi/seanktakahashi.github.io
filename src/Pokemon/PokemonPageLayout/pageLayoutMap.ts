import { TileType } from "../tiles/TileType";
import { PokemonMap } from "../types";

const mountainNW = TileType.mountainNW;
const mountainN = TileType.mountainN;
const mountainNE = TileType.mountainNE;
const mountainE = TileType.mountainE;
const mountainSW = TileType.mountainSW;
const mountainS = TileType.mountainS;
const mountainSE = TileType.mountainSE;
const cave = TileType.cave;

const grass = TileType.grass;

const sign = TileType.sign;
const sandPatch = TileType.sandPatch;
const rock1 = TileType.rock1;
const rock2 = TileType.rock2;

export const pageLayoutMap: PokemonMap = {
  tiles: [
    [mountainN, mountainN, mountainN, mountainN, mountainN, mountainNE],
    [grass, rock2, grass, grass, grass, mountainE],
    [mountainNW, mountainN, mountainNE, sign, grass, mountainE],
    [mountainSW, cave, mountainSE, grass, grass, mountainE],
    [rock1, sandPatch, grass, grass, grass, mountainE],
    [mountainS, mountainS, mountainS, mountainS, mountainS, mountainSE],
  ],
  doors: [
    {
      position: { i: 3, j: 1 }, // cave door
      naviateTo: '/',
    },
  ],
  signs: [
    {
      position: { i: 2, j: 3 },
      dialog: "Welcome to the world of POKéMON",
    },
  ],
  start: { i: 4, j: 1 }, // in front of cave door
}