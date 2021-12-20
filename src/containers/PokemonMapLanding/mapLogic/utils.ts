import { TileType } from "../TileType";
import { PokemonMap, Position, TileSet } from "../types";

const waterTileSet: TileSet = {
  NW: TileType.waterNW,
  N: TileType.waterN,
  NE: TileType.waterNE,
  W: TileType.waterW,
  base: TileType.water,
  E: TileType.waterE,
  SW: TileType.waterSW,
  S: TileType.waterS,
  SE: TileType.waterSE,
  InverseNW: TileType.waterInverseNW,
  InverseNE: TileType.waterInverseNE,
  InverseSW: TileType.waterInverseSW,
  InverseSE: TileType.waterInverseSE,
};

const marbleTileSet: TileSet = {
  NW: TileType.marbleNW,
  N: TileType.marbleN,
  NE: TileType.marbleNE,
  W: TileType.marbleW,
  base: TileType.marble,
  E: TileType.marbleE,
  SW: TileType.marbleSW,
  S: TileType.marbleS,
  SE: TileType.marbleSE,
  InverseNW: TileType.marbleInverseNW,
  InverseNE: TileType.marbleInverseNE,
  InverseSW: TileType.marbleInverseSW,
  InverseSE: TileType.marbleInverseSE,
}

function isTileTypeInSet(tile: TileType, tileSet: TileSet): boolean {
  return (
    tile === tileSet.NW ||
    tile === tileSet.N ||
    tile === tileSet.NE ||
    tile === tileSet.W ||
    tile === tileSet.base ||
    tile === tileSet.E ||
    tile === tileSet.SW ||
    tile === tileSet.S ||
    tile === tileSet.SE ||
    tile === tileSet.InverseNW ||
    tile === tileSet.InverseNE ||
    tile === tileSet.InverseSW ||
    tile === tileSet.InverseSE);
}


function isWaterTile(tile: TileType): boolean {
  return isTileTypeInSet(tile, waterTileSet);
}

export function isBuildingTile(tile: TileType): boolean {
  const buildingTiles = [
    TileType.woodHouseNE,
    TileType.woodHouseNEE,
    TileType.woodHouseNNE,
    TileType.woodHouseNNEE,
    TileType.woodHouseNNW,
    TileType.woodHouseNNWW,
    TileType.woodHouseNW,
    TileType.woodHouseNWW,
    TileType.woodHouseSE,
    TileType.woodHouseSEE,
    TileType.woodHouseSSE,
    TileType.woodHouseSSEE,
    // TileType.woodHouseSSW, // Door
    TileType.woodHouseSSWW,
    TileType.woodHouseSW,
    TileType.woodHouseSWW,
  ];
  return buildingTiles.includes(tile);
}

export function spaceIsObstructed(map: PokemonMap, position: Position): boolean {
  const M = map.length;
  const N = map[0].length;
  if (position.i < 0 || position.i >= M || position.j < 0 || position.j >= N) {
    return true;
  }
  const tileType = map[position.i][position.j].type;
  return isWaterTile(tileType) || isBuildingTile(tileType);
}

function selectTileFromSet(map: PokemonMap, tileSet: TileSet, i: number, j: number): TileType {
  const M = map.length;
  const N = map[0].length;
  if (i < 0 || i >= M || j < 0 || j >= N) {
    throw new Error(`position {i: ${i}, j: ${j}} is outside of map`);
  }
  // Bend
  if (i === 0 || !isTileTypeInSet(map[i - 1][j].type, tileSet)) {
    if (j > 0 && !isTileTypeInSet(map[i][j - 1].type, tileSet)) {
      // top + left grass
      return tileSet.NW;
    } else if (j < N - 1 && !isTileTypeInSet(map[i][j + 1].type, tileSet)) {
      // top + right grass
      return tileSet.NE;
    }
  } else if (i < M - 1 && !isTileTypeInSet(map[i + 1][j].type, tileSet)) {
    if (j !== 0 && !isTileTypeInSet(map[i][j - 1].type, tileSet)) {
      // bottom + left grass
      return tileSet.SW;
    } else if (j < N - 1 && !isTileTypeInSet(map[i][j + 1].type, tileSet)) {
      // bottom + right grass
      return tileSet.SE;
    }
  }
  // Edge
  if (i === 0 || !isTileTypeInSet(map[i - 1][j].type, tileSet)) {
    // top grass
    return tileSet.N;
  } else if (j > 0 && !isTileTypeInSet(map[i][j - 1].type, tileSet)) {
    // left grass
    return tileSet.W;
  } else if (j < N - 1 && !isTileTypeInSet(map[i][j + 1].type, tileSet)) {
    // right grass
    return tileSet.E;
  } else if (i < M - 1 && !isTileTypeInSet(map[i + 1][j].type, tileSet)) {
    return tileSet.S;
  }
  // Corner
  if (i === 0 || (j > 0 && !isTileTypeInSet(map[i - 1][j - 1].type, tileSet))) {
    // top left grass
    return tileSet.InverseNW;
  } else if (i === 0 || (j < N - 1 && !isTileTypeInSet(map[i - 1][j + 1].type, tileSet))) {
    // top right grass
    return tileSet.InverseNE;
  } else if (i < M - 1 && j > 0 && !isTileTypeInSet(map[i + 1][j - 1].type, tileSet)) {
    // bottom left grass
    return tileSet.InverseSW;
  } else if (i < M - 1 && j < N - 1 && !isTileTypeInSet(map[i + 1][j + 1].type, tileSet)) {
    // bottom left grass
    return tileSet.InverseSE;
  }
  // Surrounded
  return tileSet.base;
}

// This function only creates nice tile set borders because we draw with a width bloches of sides >= 2.
// In particular, this gaurentees that for any tile in the set, the right or left tile is also in the set.
// The same for the top and bottom tiles to a water tile.
function fixTileBorders(map: PokemonMap, tileSet: TileSet) {
  map.forEach((row, i) => {
    row.forEach((tile, j) => {
      if (isTileTypeInSet(tile.type, tileSet)) {
        tile.type = selectTileFromSet(map, tileSet, i, j);
      }
    });
  });
}

export function fixAllTileBorders(map: PokemonMap) {
  fixTileBorders(map, waterTileSet);
  fixTileBorders(map, marbleTileSet);
}
