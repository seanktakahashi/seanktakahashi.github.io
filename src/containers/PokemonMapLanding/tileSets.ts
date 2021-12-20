import { TileType } from "./TileType";
import { EnclosureTileSet, WalkwayTileSet } from "./types";

export const waterTileSet: WalkwayTileSet = {
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

export const marbleTileSet: WalkwayTileSet = {
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

export const mountainTileSet: EnclosureTileSet = {
  NW: TileType.mountainNW,
  N: TileType.mountainN,
  NE: TileType.mountainNE,
  W: TileType.mountainW,
  base: TileType.mountain,
  E: TileType.mountainE,
  SW: TileType.mountainSW,
  S: TileType.mountainS,
  SE: TileType.mountainSE,
};

export const fenceTileSet: EnclosureTileSet = {
  NW: TileType.fenceNW,
  N: TileType.fenceN,
  NE: TileType.fenceNE,
  W: TileType.fenceW,
  base: TileType.fence,
  E: TileType.fenceE,
  SW: TileType.fenceSW,
  S: TileType.fenceS,
  SE: TileType.fenceSE,
};