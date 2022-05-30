
import { getInteriorTypeImage, InteriorTileType } from './InteriorTileType';
import { ExteriorTileType, getExteriorTypeImage } from './ExteriorTileType';

export const TileType = { ...InteriorTileType, ...ExteriorTileType };
export type TileType = InteriorTileType | ExteriorTileType;

export function isExteriorTile(tileType: TileType) {
  return tileType in ExteriorTileType;
}

export const getTypeImage: {
  [key: string]: string
} = {
  ...getExteriorTypeImage,
  ...getInteriorTypeImage,
}
