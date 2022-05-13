/*eslint-env browser */
/*globals $ */

// Default size of map (in tiles)
const DEFAULT_WIDTH = 30
const DEFAULT_HEIGHT = 15

/**
 * @param {object} $container jQuery node to inject map into
 * @param {{ width?: number, height?: number }} params
 */
class MapBuilder {
  constructor($container, area) {
    this.$elem = $container;
    if (area) {
      const { width, height } = area;
      this.width = width;
      this.height = height;
    } else {
      this.width = DEFAULT_WIDTH;
      this.height = DEFAULT_HEIGHT;
    }
  }

  static getClass(node) {
    const classList = node.classList;
    return classList[classList.length - 1];
  }

  setSelected(node) {
    this.selected = MapBuilder.getClass(node);
    $(node).addClass('selected');
    console.log(this.selected);
  }

  removeSelected() {
    $('.selected').removeClass('selected');
  }

  setupPalette() {
    $('.swatch').click((e) => {
      this.removeSelected();
      this.setSelected(e.target);
    });
  }

  buildTile() {
    const tile = $("<div></div>");
    $(tile).addClass("tile");
    $(tile).addClass("swatch");
    $(tile).addClass("grass");
    return tile;
  }

  buildRow() {
    const row = $("<div></div>");
    $(row).addClass("row");
    for (let i = 0; i < this.width; i++) {
      row.append(this.buildTile());
    }
    return row;
  }

  setupMapCanvas() {
    $(".map").empty();
    console.log(this.height, this.width);
    for (let i = 0; i < this.height; i++) {
      $(".map").append(this.buildRow());
    }
    $('.tile').mouseenter(({ target }) => {
      if (this.selected) {
        const currClass = MapBuilder.getClass(target);
        $(target).removeClass(currClass);
        $(target).addClass(this.selected);
        $(target).data('currClass', currClass);
        $(target).data('tmp', 1);
      }
    });
    $('.tile').mouseout(({ target }) => {
      const tmp = $(target).data('tmp');
      if (this.selected && tmp == 1) {
        $(target).removeClass(this.selected);
        const currClass = $(target).data('currClass');
        $(target).addClass(currClass);
        $(target).data('currClass', '');
      }
    });
    $('.tile').mousedown(({ target }) => {
      if (this.selected) {
        console.log(this.selected);
        const currClass = MapBuilder.getClass(target);
        $(target).removeClass(currClass);
        $(target).addClass(this.selected);
        $(target).data('tmp', 0);
      }
    });
  }

  static copyMap() {
    let result = [];
    $(".map").children().each((i, rowDiv) => {
      if ($(rowDiv).children().length > 0) {
        result.push([]);
      }
      $(rowDiv).children().each((j, tile) => {
        result[i].push(this.fixName(this.getClass(tile)));
      });
    });
    return this.customStringify(result);
  }

  static customStringify(str) {
    const prettyString = JSON.stringify(str, null, '\t');
    return prettyString.replace(/\",\n\t*/g, "\",");
  }

  static fixName(str) {
    const parts = str.split('-');
    const base = parts[0];
    const directions = ["n", "s", "e", "w", "ne", "nw", "se", "sw"]
    let direction = "";
    if (parts[1]) {
      if (directions.includes(parts[1])) {
        // Fully capitalize cardinal directions
        direction = parts[1].toUpperCase();
      } else {
        // Only capitalize first letter otherwise
        direction = parts[1].charAt(0).toUpperCase() + parts[1].substring(1);
      }
    }
    const inverse = parts[2] === "inverse" ? "Inverse" : "";
    return base + inverse + direction;
  }
}

