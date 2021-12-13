import grass from './images/terrain/grass.png';
import flowersRed from './images/terrain/red_flowers.png';
import flowersOrange from './images/terrain/orange_flowers.png';
import flowersBlue from './images/terrain/blue_flowers.png';
import weed from './images/terrain/weed.png';
import weed4X from './images/terrain/weed_4x.png';
import weedSmAll from './images/terrain/weed_small.png';
import weed2X from './images/terrain/weed_2x.png';
import sandPatch from './images/terrain/sand_patch.png';
import box from './images/obstructions/box.png';
import rock1 from './images/obstructions/rock_1.png';
import rock2 from './images/obstructions/rock_2.png';
import sign from './images/obstructions/sign.png';
import tree1 from './images/obstructions/tree_1.png';
import tree2 from './images/obstructions/tree_2.png';
import planter from './images/obstructions/planter.png';

import mountainNW from './images/obstructions/mountain_1.png';
import mountainN from './images/obstructions/mountain_2.png';
import mountainNE from './images/obstructions/mountain_3.png';
import mountainW from './images/obstructions/mountain_4.png';
import mountain from './images/obstructions/mountain_5.png';
import mountainE from './images/obstructions/mountain_6.png';
import mountainSW from './images/obstructions/mountain_7.png';
import mountainS from './images/obstructions/mountain_8.png';
import mountainSE from './images/obstructions/mountain_9.png';
import cave from './images/obstructions/mountain_entrance.png';

import waterNW from './images/obstructions/water_1.png';
import waterN from './images/obstructions/water_2.png';
import waterNE from './images/obstructions/water_3.png';
import waterW from './images/obstructions/water_4.png';
import water from './images/obstructions/water_5.png';
import waterE from './images/obstructions/water_6.png';
import waterSW from './images/obstructions/water_7.png';
import waterS from './images/obstructions/water_8.png';
import waterSE from './images/obstructions/water_9.png';
import waterInverseNW from './images/obstructions/water_11.png';
import waterInverseNE from './images/obstructions/water_10.png';
import waterInverseSW from './images/obstructions/water_13.png';
import waterInverseSE from './images/obstructions/water_12.png';

import sand from './images/terrain/sand/center.png';
import sandNW from './images/terrain/sand/nw.png';
import sandN from './images/terrain/sand/n.png';
import sandNE from './images/terrain/sand/ne.png';
import sandW from './images/terrain/sand/w.png';
import sandE from './images/terrain/sand/e.png';
import sandSW from './images/terrain/sand/sw.png';
import sandS from './images/terrain/sand/s.png';
import sandSE from './images/terrain/sand/se.png';
import sandInverseNW from './images/terrain/sand/nw_inverse.png';
import sandInverseNE from './images/terrain/sand/ne_inverse.png';
import sandInverseSW from './images/terrain/sand/sw_inverse.png';
import sandInverseSE from './images/terrain/sand/se_inverse.png';

import fenceNW from './images/obstructions/fence_1.png';
import fenceN from './images/obstructions/fence_2.png';
import fenceNE from './images/obstructions/fence_3.png';
import fenceW from './images/obstructions/fence_4.png';
import fence from './images/obstructions/fence_5.png';
import fenceE from './images/obstructions/fence_6.png';
import fenceSW from './images/obstructions/fence_7.png';
import fenceS from './images/obstructions/fence_8.png';
import fenceSE from './images/obstructions/fence_9.png';

export enum TileType {
  // Assorted
  grass,
  flowersRed,
  flowersOrange,
  flowersBlue,
  weed,
  weed4X,
  weedSmAll,
  weed2X,
  sandPatch,
  box,
  rock1,
  rock2,
  sign,
  tree1,
  tree2,
  planter,
  // Mountains
  mountainNW,
  mountainN,
  mountainNE,
  mountainW,
  mountain,
  mountainE,
  mountainSW,
  mountainS,
  mountainSE,
  cave,
  // Water
  waterNW,
  waterN,
  waterNE,
  waterW,
  water,
  waterE,
  waterSW,
  waterS,
  waterSE,
  waterInverseNW,
  waterInverseNE,
  waterInverseSW,
  waterInverseSE,
  // Sand
  sand,
  sandNW,
  sandN,
  sandNE,
  sandW,
  sandE,
  sandSW,
  sandS,
  sandSE,
  sandInverseNW,
  sandInverseNE,
  sandInverseSW,
  sandInverseSE,
  // Fence
  fenceNW,
  fenceN,
  fenceNE,
  fenceW,
  fence,
  fenceE,
  fenceSW,
  fenceS,
  fenceSE,
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

export const getTypeImage = {
  // Assorted
  [TileType.grass]: grass,
  [TileType.flowersRed]: flowersRed,
  [TileType.flowersOrange]: flowersOrange,
  [TileType.flowersBlue]: flowersBlue,
  [TileType.weed]: weed,
  [TileType.weed4X]: weed4X,
  [TileType.weedSmAll]: weedSmAll,
  [TileType.weed2X]: weed2X,
  [TileType.sandPatch]: sandPatch,
  [TileType.box]: box,
  [TileType.rock1]: rock1,
  [TileType.rock2]: rock2,
  [TileType.sign]: sign,
  [TileType.tree1]: tree1,
  [TileType.tree2]: tree2,
  [TileType.planter]: planter,
  // Mountains
  [TileType.mountainNW]: mountainNW,
  [TileType.mountainN]: mountainN,
  [TileType.mountainNE]: mountainNE,
  [TileType.mountainW]: mountainW,
  [TileType.mountain]: mountain,
  [TileType.mountainE]: mountainE,
  [TileType.mountainSW]: mountainSW,
  [TileType.mountainS]: mountainS,
  [TileType.mountainSE]: mountainSE,
  [TileType.cave]: cave,
  // Water
  [TileType.waterNW]: waterNW,
  [TileType.waterN]: waterN,
  [TileType.waterNE]: waterNE,
  [TileType.waterW]: waterW,
  [TileType.water]: water,
  [TileType.waterE]: waterE,
  [TileType.waterSW]: waterSW,
  [TileType.waterS]: waterS,
  [TileType.waterSE]: waterSE,
  [TileType.waterInverseNW]: waterInverseNW,
  [TileType.waterInverseNE]: waterInverseNE,
  [TileType.waterInverseSW]: waterInverseSW,
  [TileType.waterInverseSE]: waterInverseSE,
  // Sand
  [TileType.sand]: sand,
  [TileType.sandNW]: sandNW,
  [TileType.sandN]: sandN,
  [TileType.sandNE]: sandNE,
  [TileType.sandW]: sandW,
  [TileType.sandE]: sandE,
  [TileType.sandSW]: sandSW,
  [TileType.sandS]: sandS,
  [TileType.sandSE]: sandSE,
  [TileType.sandInverseNW]: sandInverseNW,
  [TileType.sandInverseNE]: sandInverseNE,
  [TileType.sandInverseSW]: sandInverseSW,
  [TileType.sandInverseSE]: sandInverseSE,
  // Fence
  [TileType.fenceNW]: fenceNW,
  [TileType.fenceN]: fenceN,
  [TileType.fenceNE]: fenceNE,
  [TileType.fenceW]: fenceW,
  [TileType.fence]: fence,
  [TileType.fenceE]: fenceE,
  [TileType.fenceSW]: fenceSW,
  [TileType.fenceS]: fenceS,
  [TileType.fenceSE]: fenceSE,
}