/* eslint-env browser */
/* globals $ */

// The size of a swatch (in pixels)
const SWATCH_SIZE = 25

// Utility function - checks if a given swatch name is walkable terrain.
const isTerrain = swatchType => (
  [
    'grass',
    'flowers-red',
    'flowers-orange',
    'flowers-blue',
    'weed',
    'weed-4x',
    'weed-small',
    'weed-2x',
    'field',
    'sand-patch',
    'sand',
    'sand-nw',
    'sand-n',
    'sand-ne',
    'sand-w',
    'sand-e',
    'sand-sw',
    'sand-s',
    'sand-se',
    'sand-nw-inverse',
    'sand-ne-inverse',
    'sand-sw-inverse',
    'sand-se-inverse',
  ].indexOf(swatchType) >= 0
)

/**
 * Constructor for the player (Pikachu sprite).
 *
 * @param {number}     x       The beginning x coordinate (usually zero)
 * @param {number}     y       The beginning y coordinate (usually zero)
 * @param {MapBuilder} builder The MapBuilder object, with information about the map.
 *                             In particular, this builder object should have the container
 *                             element as a property so the '.map' div can be found using a
 *                             jQuery 'find' call.
 */
class Player {
  draw() {
    this.$player.css("left", (this.x * SWATCH_SIZE) + 'px');;  
    this.$player.css("top", (this.y * SWATCH_SIZE) + 'px');;  
  }

  removeFacing() {
    this.$player.removeClass('facing-left');
    this.$player.removeClass('facing-up');
    this.$player.removeClass('facing-down');
    this.$player.removeClass('facing-right');
  }

  constructor(x, y, builder) {
    this.builder = builder
    this.x = x;
    this.y = y;
    this.$map = builder.$elem.find('.map')
    this.$player = $("<div></div>");  
    this.$player.addClass('player facing-down')
    this.draw();
    this.$map.append(this.$player);

    $(document).keydown((which) => {
      switch(which.keyCode) {
        case (37):
          this.removeFacing();
          this.$player.addClass('facing-left')
          this.x -= 1;
          break;
        case (38):
          this.removeFacing();
          this.$player.addClass('facing-up')
          this.y -= 1;
          break;
        case (39):
          this.removeFacing();
          this.$player.addClass('facing-right')
          this.x += 1;
          break;
        case (40):
          this.removeFacing();
          this.$player.addClass('facing-down')
          this.y += 1;
          break;
        default:
          break;
      }
      this.draw();
    });

  }

}
