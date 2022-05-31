import { Direction, Door, PokemonMap, Sign } from "../types";
import { Tile } from "../tiles/Tile";
import { MapId } from "../Map";

const woodFloor = Tile.homeWoodFloor;
const woodFloorDark = Tile.homeWoodFloorDark;
const woodFloorDarkN = Tile.homeWoodFloorDarkN;
const woodFloorLightSE = Tile.homeWoodFloorLightSE;

const carpet = Tile.homeCarpet;
const carpetE = Tile.homeCarpetE;
const carpetW = Tile.homeCarpetW;
const carpetSE = Tile.homeCarpetSE;
const carpetSW = Tile.homeCarpetSW;
const carpetS = Tile.homeCarpetS;
const carpetNE = Tile.homeCarpetNE;
const carpetNW = Tile.homeCarpetNW;
const carpetN = Tile.homeCarpetN;

const tvScreen = Tile.tvScreen;

const wallN = Tile.homeWallN;

const downstairsNE = Tile.homeDownstairsNE;
const downstairsNW = Tile.homeDownstairsNW;
const downstairsN = Tile.homeDownstairsN;
const downstairsSE = Tile.homeDownstairsSE;
const downstairsSW = Tile.homeDownstairsSW;
const downstairsS = Tile.homeDownstairsS;

const bedN = Tile.homeBedN;
const bedNW = Tile.homeBedNW;
const bedNE = Tile.homeBedNE;
const bedS = Tile.homeBedS;
const bedSW = Tile.homeBedSW;
const bedSE = Tile.homeBedSE;
const computerDeskNW = Tile.homeComputerDeskNW;
const computerDeskNE = Tile.homeComputerDeskNE;
const computerDeskW = Tile.homeComputerDeskW;
const computerDeskE = Tile.homeComputerDeskE;
const computerDeskSW = Tile.homeComputerDeskSW;
const computerDeskSE = Tile.homeComputerDeskSE;
const mapWallS = Tile.homeMapWallS;
const mapWallN = Tile.homeMapWallN;
const gameCubeS = Tile.homeGameCubeS;
const gameCubeN = Tile.homeGameCubeN;
const tVS = Tile.homeTVS;
const tVN = Tile.homeTVN;
const wallClockS = Tile.homeWallClockS;
const wallClockN = Tile.homeWallClockN;

const doors: Door[] = [
  {
    position: { i: 1, j: 7 }, // downstairs
    destination: MapId.floor1FromUpstairs,
  },
];

const signs: Sign[] = [
  {
    position: { i: 4, j: 1 },
    dialog: "It's so easy for a 20 minute power nap to become a 2 hour long slumber"
  },
];

export const floor2: PokemonMap = {
  tiles: [
    [computerDeskNW, computerDeskNE, mapWallN, wallN, tVN, wallClockN, downstairsNW, downstairsN, downstairsNE],
    [computerDeskW, computerDeskE, mapWallS, gameCubeN, tvScreen, wallClockS, downstairsSW, downstairsS, downstairsSE],
    [computerDeskSW, computerDeskSE, woodFloorLightSE, gameCubeS, tVS, woodFloorLightSE, woodFloorDarkN, woodFloorDarkN, woodFloorDarkN],
    [woodFloorDark, woodFloor, woodFloor, woodFloor, carpetNW, carpetN, carpetN, carpetNE, woodFloor],
    [bedNW, bedN, bedNE, woodFloor, carpetW, carpet, carpet, carpetE, woodFloor],
    [bedSW, bedS, bedSE, woodFloor, carpetW, carpet, carpet, carpetE, woodFloor],
    [woodFloorDark, woodFloor, woodFloor, woodFloor, carpetSW, carpetS, carpetS, carpetSE, woodFloor],
    [woodFloorDark, woodFloor, woodFloor, woodFloor, woodFloor, woodFloor, woodFloor, woodFloor, woodFloor],
  ],
  doors,
  signs: signs,
  start: {
    position: { i: 2, j: 7 }, // in front of stairs
    direction: Direction.DOWN,
  },
  background: undefined,
}