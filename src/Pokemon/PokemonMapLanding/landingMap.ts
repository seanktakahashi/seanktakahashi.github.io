import { Door, PokemonMap, Sign } from "../../Pokemon/types";
import { Tile } from "../tiles/Tile";

const houseNE = Tile.woodHouseNE;
const houseNEE = Tile.woodHouseNEE;
const houseNNE = Tile.woodHouseNNE;
const houseNNEE = Tile.woodHouseNNEE;
const houseNNW = Tile.woodHouseNNW;
const houseNNWW = Tile.woodHouseNNWW;
const houseNW = Tile.woodHouseNW;
const houseNWW = Tile.woodHouseNWW;
const houseSE = Tile.woodHouseSE;
const houseSEE = Tile.woodHouseSEE;
const houseSSE = Tile.woodHouseSSE;
const houseSSEE = Tile.woodHouseSSEE;
const houseSSW = Tile.woodHouseSSW;
const houseSSWW = Tile.woodHouseSSWW;
const houseSW = Tile.woodHouseSW;
const houseSWW = Tile.woodHouseSWW;

const bigTreeNW = Tile.bigTreeNW;
const bigTreeNE = Tile.bigTreeNE;
const bigTreeW = Tile.bigTreeW;
const bigTreeE = Tile.bigTreeE;
const bigTreeSW = Tile.bigTreeSW;
const bigTreeSE = Tile.bigTreeSE;

const mountainNW = Tile.mountainNW;
const mountainNE = Tile.mountainNE;
const mountainN = Tile.mountainN;
const mountainW = Tile.mountainW;
const mountainSW = Tile.mountainSW;
const mountainS = Tile.mountainS;
const mountainE = Tile.mountainE;
const mountainSE = Tile.mountainSE;
const mountain = Tile.mountain;
const cave = Tile.cave;

const grass = Tile.grass;
const fenceNW = Tile.fenceNW;
const fenceN = Tile.fenceN;
const fenceS = Tile.fenceS;
const fenceE = Tile.fenceE;
const fenceW = Tile.fenceW;
const fenceSE = Tile.fenceSE;
const fenceSW = Tile.fenceSW;

const marble = Tile.marble;
const water = Tile.water;

const sign = Tile.sign;
const box = Tile.box;
const rock1 = Tile.rock1;
const tree2 = Tile.tree2;
const weedSmall = Tile.weedSmall;
const flowersRed = Tile.flowersRed;

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