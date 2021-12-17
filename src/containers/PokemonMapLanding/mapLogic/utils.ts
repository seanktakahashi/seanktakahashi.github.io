import { TileType } from "../TileType";
import { PokemonMap, Position } from "../types";

export function spaceIsObstructed(map: PokemonMap, position: Position): boolean {
  const M = map.length;
  const N = map[0].length;
  if (position.i < 0 || position.i >= M || position.j < 0 || position.j >= N) {
    return true;
  }
  return isWaterTile(map[position.i][position.j].type);
}

export function isWaterTile(tile: TileType): boolean {
  const waterTiles = [
    TileType.waterNW,
    TileType.waterN,
    TileType.waterNE,
    TileType.waterW,
    TileType.water,
    TileType.waterE,
    TileType.waterSW,
    TileType.waterS,
    TileType.waterSE,
    TileType.waterInverseNW,
    TileType.waterInverseNE,
    TileType.waterInverseSW,
    TileType.waterInverseSE,
  ];
  return waterTiles.includes(tile);
}
