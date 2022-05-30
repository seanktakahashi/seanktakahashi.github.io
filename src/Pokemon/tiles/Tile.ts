
import { getInteriorTypeImage, InteriorTile, isInteriorTileWalkable } from './InteriorTile';
import { ExteriorTile, getExteriorImage, isExteriorTileWalkable } from './ExteriorTile';

export const Tile = { ...InteriorTile, ...ExteriorTile };
export type Tile = InteriorTile | ExteriorTile;

function isExteriorTile(tile: Tile): tile is ExteriorTile {
  return tile in ExteriorTile;
}

export const getTypeImage: {
  [key: string]: string
} = {
  ...getExteriorImage,
  ...getInteriorTypeImage,
}

export const isTileWalkable = (tileType: Tile): boolean => {
  return isExteriorTile(tileType) ?
    isExteriorTileWalkable(tileType) :
    isInteriorTileWalkable(tileType);
}