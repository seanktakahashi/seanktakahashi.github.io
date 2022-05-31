import { Tile } from "../tiles/Tile";
import { Direction, PokemonMap } from "../types";

const mountainNW = Tile.mountainNW;
const mountainN = Tile.mountainN;
const mountainNE = Tile.mountainNE;
const mountainE = Tile.mountainE;
const mountainSW = Tile.mountainSW;
const mountainS = Tile.mountainS;
const mountainSE = Tile.mountainSE;
const cave = Tile.cave;

const grass = Tile.grass;

const sign = Tile.sign;
const sandPatch = Tile.sandPatch;
const rock1 = Tile.rock1;
const rock2 = Tile.rock2;

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
      destination: '/',
    },
  ],
  signs: [
    {
      position: { i: 2, j: 3 },
      dialog: "Welcome to the world of POKéMON",
    },
  ],
  start: {
    position: { i: 4, j: 1 }, // in front of cave door
    direction: Direction.DOWN,
  },
  background: undefined,
}