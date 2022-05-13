/* eslint no-unused-vars: 0 */
/* eslint-env browser */
/* globals $, MapBuilder, Player */

$(document).ready(() => {
  const $mapElement = $('#map-builder')
  const builder = new MapBuilder($mapElement)
  builder.setupPalette()
  builder.setupMapCanvas()
  new Player(0, 0, builder) //eslint-disable-line
})


function resetMap() {
  const $mapElement = $('#map-builder')
  const width = $('#width').val();
  const height = $('#height').val();
  const builder = new MapBuilder($mapElement, { width, height })
  builder.setupMapCanvas();
  new Player(0, 0, builder) //eslint-disable-line
}

function copyMap() {
  const mapArray = MapBuilder.copyMap();
  copyTextToClipboard(mapArray);
}
