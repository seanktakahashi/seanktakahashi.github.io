import { TileType } from "../TileType";

const houseNE = TileType.woodHouseNE;
const houseNEE = TileType.woodHouseNEE;
const houseNNE = TileType.woodHouseNNE;
const houseNNEE = TileType.woodHouseNNEE;
const houseNNW = TileType.woodHouseNNW;
const houseNNWW = TileType.woodHouseNNWW;
const houseNW = TileType.woodHouseNW;
const houseNWW = TileType.woodHouseNWW;
const houseSE = TileType.woodHouseSE;
const houseSEE = TileType.woodHouseSEE;
const houseSSE = TileType.woodHouseSSE;
const houseSSEE = TileType.woodHouseSSEE;
const houseSSW = TileType.woodHouseSSW;
const houseSSWW = TileType.woodHouseSSWW;
const houseSW = TileType.woodHouseSW;
const houseSWW = TileType.woodHouseSWW;

const mountainNW = TileType.mountainNW;
const mountainN = TileType.mountainN;
const mountainNE = TileType.mountainNE;
const mountainW = TileType.mountainW;
const mountain = TileType.mountain;
const mountainE = TileType.mountainE;
const mountainSW = TileType.mountainSW;
const mountainS = TileType.mountainS;
const mountainSE = TileType.mountainSE;
const cave = TileType.cave;

const grass = TileType.grass;
const fenceS = TileType.fenceS;
const fenceE = TileType.fenceE;
const fenceSE = TileType.fenceSE;
const fenceW = TileType.fenceW;
const fenceSW = TileType.fenceSW;

const marble = TileType.marble;
const water = TileType.water;

const sign = TileType.sign;
const sandPatch = TileType.sandPatch;
const box = TileType.box;
const rock1 = TileType.rock1;
const rock2 = TileType.rock2;
const tree2 = TileType.tree2;
const weedSmall = TileType.weedSmall;
const flowersRed = TileType.flowersRed;

export const mapSeed = [
  [mountainN, mountainN, mountainN, mountainN, mountainN, mountainNE],
  [grass, rock2, grass, grass, grass, mountainE],
  [mountainNW, mountainN, mountainNE, sign, grass, mountainE],
  [mountainSW, cave, mountainSE, grass, grass, mountainE],
  [rock1, sandPatch, grass, grass, grass, mountainE],
  [mountainS, mountainS, mountainS, mountainS, mountainS, mountainSE],
];

export const M = 6;
export const N = 6;