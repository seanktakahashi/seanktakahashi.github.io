import { marbleTileSet, waterTileSet } from "../tileSets";
import { TileType } from "../TileType";
import { isWalkwayTileSet, PokemonMap, Position, TileSet, WalkwayTileSet } from "../types";

function isTileTypeInSet(tile: TileType, tileSet: TileSet): boolean {
  const inEnclosureSet = (
    tile === tileSet.NW ||
    tile === tileSet.N ||
    tile === tileSet.NE ||
    tile === tileSet.W ||
    tile === tileSet.base ||
    tile === tileSet.E ||
    tile === tileSet.SW ||
    tile === tileSet.S ||
    tile === tileSet.SE);
  return isWalkwayTileSet(tileSet) ?
    inEnclosureSet ||
    tile === tileSet.InverseNW ||
    tile === tileSet.InverseNE ||
    tile === tileSet.InverseSW ||
    tile === tileSet.InverseSE
    : inEnclosureSet;
}


function isWaterTile(tile: TileType): boolean {
  return isTileTypeInSet(tile, waterTileSet);
}

function isBuildingTile(tile: TileType): boolean {
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

function isAssortedObstruction(tile: TileType): boolean {
  return [
    TileType.box,
    TileType.rock1,
    TileType.rock2,
    TileType.sign,
    TileType.tree1,
    TileType.tree2,
    TileType.planter,
  ].includes(tile);
}

export function spaceIsObstructed(map: PokemonMap, position: Position): boolean {
  const M = map.length;
  const N = map[0].length;
  if (position.i < 0 || position.i >= M || position.j < 0 || position.j >= N) {
    return true;
  }
  const tileType = map[position.i][position.j].type;
  return isWaterTile(tileType) || isBuildingTile(tileType) || isAssortedObstruction(tileType);
}

function selectTileFromSet(map: PokemonMap, tileSet: WalkwayTileSet, i: number, j: number): TileType {
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
function fixTileBorders(map: PokemonMap, tileSet: WalkwayTileSet) {
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
