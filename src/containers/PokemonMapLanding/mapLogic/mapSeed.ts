import { TileType } from "../TileType";

const grass = TileType.grass;
const fenceS = TileType.fenceS;
const fenceE = TileType.fenceE;
const fenceSE = TileType.fenceSE;
const marble = TileType.marble;
const water = TileType.water;
const sign = TileType.sign;
const box = TileType.box;

export const mapSeed = [
  [grass, TileType.woodHouseNNWW, TileType.woodHouseNNW, TileType.woodHouseNNE, TileType.woodHouseNNEE, grass, fenceE],
  [grass, TileType.woodHouseNWW, TileType.woodHouseNW, TileType.woodHouseNE, TileType.woodHouseNEE, grass, fenceE],
  [grass, TileType.woodHouseSWW, TileType.woodHouseSW, TileType.woodHouseSE, TileType.woodHouseSEE, grass, fenceE],
  [grass, TileType.woodHouseSSWW, TileType.woodHouseSSW, TileType.woodHouseSSE, TileType.woodHouseSSEE, box, fenceE],
  [grass, sign, marble, marble, grass, grass, fenceE],
  [grass, grass, marble, marble, marble, marble, fenceE],
  [grass, grass, marble, marble, marble, marble, fenceE],
  [grass, grass, water, water, marble, marble, fenceE],
  [grass, grass, water, water, marble, marble, fenceE],
  [fenceS, fenceS, fenceS, fenceS, marble, marble, fenceSE],
];
