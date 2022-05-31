import { MapId } from "../Map";
import { Tile } from "../tiles/Tile";
import { Direction, Door, PokemonMap, Sign } from "../types";

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

const marbleNW = Tile.marbleNW;
const marbleNE = Tile.marbleNE;
const marbleN = Tile.marbleN;
const marbleW = Tile.marbleW;
const marbleSW = Tile.marbleSW;
const marbleS = Tile.marbleS;
const marbleE = Tile.marbleE;
const marbleSE = Tile.marbleSE;
const marbleInverseNE = Tile.marbleInverseNE;
const marbleInverseSE = Tile.marbleInverseSE;
const marbleInverseSW = Tile.marbleInverseSW;

const water = Tile.water;
const waterNW = Tile.waterNW;
const waterNE = Tile.waterNE;
const waterN = Tile.waterN;
const waterW = Tile.waterW;
const waterSW = Tile.waterSW;
const waterS = Tile.waterS;
const waterE = Tile.waterE;
const waterSE = Tile.waterSE;

const sign = Tile.sign;
const box = Tile.box;
const rock1 = Tile.rock1;
const tree2 = Tile.tree2;
const weedSmall = Tile.weedSmall;
const flowersRed = Tile.flowersRed;

const doors: Door[] = [
  {
    position: { i: 7, j: 4 }, // house door
    destination: MapId.floor1,
  },
  {
    position: { i: 5, j: 11 }, // cave door
    destination: '/pokemon/chess',
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
    [grass, fenceW, grass, flowersRed, marbleNW, marbleNE, grass, grass, fenceE, grass, grass, grass, grass, grass, grass],
    [grass, fenceW, grass, grass, marbleW, marbleInverseNE, marbleN, marbleN, marbleN, marbleN, marbleN, marbleN, marbleN, marbleNE, grass],
    [grass, fenceW, grass, grass, marbleSW, marbleS, marbleInverseSW, marbleInverseSE, marbleS, marbleS, marbleS, marbleS, marbleS, marbleSE, grass],
    [grass, fenceW, tree2, grass, waterNW, waterNE, marbleW, marbleE, fenceE, grass, grass, grass, grass, grass, grass],
    [grass, fenceW, grass, grass, waterSW, waterSE, marbleSW, marbleSE, fenceE, grass, grass, grass, grass, rock1, grass],
    [grass, fenceSW, fenceS, fenceS, fenceS, fenceS, fenceS, fenceS, fenceSE, grass, weedSmall, grass, weedSmall, grass, grass],
    [grass, bigTreeNW, bigTreeNE, grass, grass, grass, marbleNW, marbleNE, box, grass, waterNW, waterN, waterN, waterNE, grass],
    [grass, bigTreeW, bigTreeE, grass, grass, grass, marbleW, marbleE, grass, grass, waterW, water, water, waterE, grass],
    [grass, bigTreeSW, bigTreeSE, grass, grass, grass, marbleW, marbleE, grass, grass, waterW, water, water, waterE, grass],
    [grass, grass, grass, grass, grass, grass, marbleSW, marbleSE, grass, grass, waterSW, waterS, waterS, waterSE, grass],
    [grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass, grass],
  ],
  doors,
  signs,
  start: {
    position: { i: 8, j: 4 }, // in front of house
    direction: Direction.DOWN,
  },
  background: grass,
}