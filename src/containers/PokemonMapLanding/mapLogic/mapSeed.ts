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

const mountainW = TileType.mountainW;
const mountainSW = TileType.mountainSW;
const mountainS = TileType.mountainS;
const mountainE = TileType.mountainE;
const mountainSE = TileType.mountainSE;
const mountain = TileType.mountain;
const cave = TileType.cave;

const grass = TileType.grass;
const fenceS = TileType.fenceS;
const fenceE = TileType.fenceE;
const fenceSE = TileType.fenceSE;
const marble = TileType.marble;
const water = TileType.water;
const sign = TileType.sign;
const box = TileType.box;
const rock1 = TileType.rock1;
const tree2 = TileType.tree2;
const flowersRed = TileType.flowersRed;

export const mapSeed = [
  [grass, houseNNWW, houseNNW, houseNNE, houseNNEE, mountainW, mountain, mountain, mountain, mountain, mountain, mountainE],
  [grass, houseNWW, houseNW, houseNE, houseNEE, mountainSW, mountainS, mountainS, mountainS, cave, mountainS, mountainSE],
  [grass, houseSWW, houseSW, houseSE, houseSEE, grass, fenceE, grass, grass, grass, grass, grass],
  [grass, houseSSWW, houseSSW, houseSSE, houseSSEE, box, fenceE, grass, grass, grass, grass, grass],
  [grass, flowersRed, marble, marble, grass, grass, fenceE, grass, grass, grass, grass, grass],
  [grass, grass, marble, marble, marble, marble, marble, marble, marble, marble, marble, marble],
  [grass, grass, marble, marble, marble, marble, marble, marble, marble, marble, marble, marble],
  [tree2, grass, water, water, marble, marble, fenceE, grass, grass, grass, grass, grass],
  [grass, grass, water, water, marble, marble, fenceE, grass, grass, grass, grass, rock1],
  [fenceS, fenceS, fenceS, fenceS, marble, marble, fenceSE, grass, grass, grass, grass, grass],
  [grass, grass, grass, grass, marble, marble, sign, grass, grass, grass, grass, grass],
];
