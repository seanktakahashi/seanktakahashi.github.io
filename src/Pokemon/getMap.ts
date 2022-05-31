import { floor1, floor1FromUpstairs } from "./PokemonMapLanding/floor1";
import { floor2 } from "./PokemonMapLanding/floor2";
import { landingPokemonMap } from "./PokemonMapLanding/landing";
import { MapId } from "./Map";
import { PokemonMap } from "./types";

export function getMap(map: MapId): PokemonMap {
  switch (map) {
    case MapId.landing:
      return landingPokemonMap;
    case MapId.floor1:
      return floor1;
    case MapId.floor1FromUpstairs:
      return floor1FromUpstairs;
    case MapId.floor2:
      return floor2;
  }
}