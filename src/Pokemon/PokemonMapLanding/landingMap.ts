import { Door, PokemonMap, Sign } from "../../Pokemon/types";
import { TileType } from "../tiles/TileType";

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

const bigTreeNW = TileType.bigTreeNW;
const bigTreeNE = TileType.bigTreeNE;
const bigTreeW = TileType.bigTreeW;
const bigTreeE = TileType.bigTreeE;
const bigTreeSW = TileType.bigTreeSW;
const bigTreeSE = TileType.bigTreeSE;

const mountainNW = TileType.mountainNW;
const mountainNE = TileType.mountainNE;
const mountainN = TileType.mountainN;
const mountainW = TileType.mountainW;
const mountainSW = TileType.mountainSW;
const mountainS = TileType.mountainS;
const mountainE = TileType.mountainE;
const mountainSE = TileType.mountainSE;
const mountain = TileType.mountain;
const cave = TileType.cave;

const grass = TileType.grass;
const fenceNW = TileType.fenceNW;
const fenceN = TileType.fenceN;
const fenceS = TileType.fenceS;
const fenceE = TileType.fenceE;
const fenceW = TileType.fenceW;
const fenceSE = TileType.fenceSE;
const fenceSW = TileType.fenceSW;

const marble = TileType.marble;
const water = TileType.water;

const sign = TileType.sign;
const box = TileType.box;
const rock1 = TileType.rock1;
const tree2 = TileType.tree2;
const weedSmall = TileType.weedSmall;
const flowersRed = TileType.flowersRed;

const doors: Door[] = [
  {
    position: { i: 7, j: 4 }, // house door
    naviateTo: '/pokemon/home',
  },
  {
    position: { i: 2, j: 11 }, // cave door
    naviateTo: '/pokemon/chess',
  }
];

const signs: Sign[] = [
  {
    position: { i: 7, j: 7 },
    dialog: "Sean's house!"
  },
];

export const landingPokemonMap: PokemonMap = {
  tiles: [
    [grass, grass, grass, grass, grass, grass, grass, mountainNW, mountainN, mountainN, mountainN, mountainN, mountainN, mountainNE, grass],
    [grass, grass, grass, grass, grass, grass, grass, mountainW, mountain, mountain, mountain, mountain, mountain, mountainE, grass],
    [grass, fenceNW, fenceN, fenceN, fenceN, fenceN, fenceN, mountainW, mountain, mountain, mountain, mountain, mountain, mountainE, grass],
    [grass, fenceW, grass, grass, grass, grass, grass, mountainW, mountain, mountain, mountain, mountain, mountain, mountainE, grass],
    [grass, fenceW, grass, houseNNWW, houseNNW, houseNNE, houseNNEE, mountainW, mountain, mountain, mountain, mountain, mountain, mountainE, grass],
    [grass, fenceW, grass, houseNWW, houseNW, houseNE, houseNEE, mountainSW, mountainS, mountainS, mountainS, cave, mountainS, mountainSE, grass],
    [grass, fenceW, grass, houseSWW, houseSW, houseSE, houseSEE, grass, fenceE, grass, grass, grass, grass, grass, grass],
    [grass, fenceW, grass, houseSSWW, houseSSW, houseSSE, houseSSEE, sign, fenceE, grass, grass, grass, grass, grass, grass],
    [grass, fenceW, grass, flowersRed, marble, marble, grass, grass, fenceE, grass, grass, grass, grass, grass, grass],
    [grass, fenceW, grass, grass, marble, marble, marble, marble, fenceE, marble, marble, marble, marble, marble, grass],
    [grass, fenceW, grass, grass, marble, marble, marble, marble, fenceE, marble, marble, marble, marble, marble, grass],
    [grass, fenceW, tree2, grass, water, water, marble, marble, fenceE, grass, grass, grass, grass, grass, grass],
    [grass, fenceW, grass, grass, water, water, marble, marble, fenceE, grass, grass, grass, grass, rock1, grass],
    [grass, fenceSW, fenceS, fenceS, fenceS, fenceS, fenceS, fenceS, fenceSE, grass, weedSmall, grass, weedSmall, grass, grass],
    [grass, bigTreeNW, bigTreeNE, grass, grass, grass, marble, marble, box, grass, water, water, water, water, grass],
    [grass, bigTreeW, bigTreeE, grass, grass, grass, marble, marble, grass, grass, water, water, water, water, grass],
    [grass, bigTreeSW, bigTreeSE, grass, grass, grass, marble, marble, grass, grass, water, water, water, water, grass],
    [grass, grass, grass, grass, grass, grass, marble, marble, grass, grass, water, water, water, water, grass],
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  ],
  doors,
  signs,
  start: { i: 8, j: 4 } // in front of house
}