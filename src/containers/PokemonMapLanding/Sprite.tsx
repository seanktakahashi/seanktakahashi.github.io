import React from 'react';
import pikachuDown from './images/sprites/pikachu_down.png';
import pikachuLeft from './images/sprites/pikachu_left.png';
import pikachuRight from './images/sprites/pikachu_right.png';
import pikachuUp from './images/sprites/pikachu_up.png';
import { Direction, Position } from './types';

type SpriteImages = {
  [Direction.DOWN]: string
  [Direction.RIGHT]: string
  [Direction.LEFT]: string
  [Direction.UP]: string
}

const initPlace: Position = { i: 0, j: 0 };
const pikachuImages: SpriteImages = {
  [Direction.DOWN]: pikachuDown,
  [Direction.LEFT]: pikachuLeft,
  [Direction.RIGHT]: pikachuRight,
  [Direction.UP]: pikachuUp,
};

export default class Sprite extends React.Component {
  state = {
    position: initPlace,
    facing: Direction.DOWN,
    images: pikachuImages,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  handleKey = (event: KeyboardEvent) => {
    console.log(event.key);
    switch (event.key) {
      case 'h':
        this.moveLeft();
        break;
      case 'j':
        this.moveDown();
        break;
      case 'k':
        this.moveUp();
        break;
      case 'l':
        this.moveRight();
        break;
    }
  }

  moveLeft() {
    this.setState({
      position: { i: this.state.position.i, j: this.state.position.j - 1 },
      facing: Direction.LEFT
    });
  }

  moveDown() {
    this.setState({
      position: { i: this.state.position.i + 1, j: this.state.position.j },
      facing: Direction.DOWN
    });
  }

  moveUp() {
    this.setState({
      position: { i: this.state.position.i - 1, j: this.state.position.j },
      facing: Direction.UP
    });
  }

  moveRight() {
    this.setState({
      position: { i: this.state.position.i, j: this.state.position.j + 1 },
      facing: Direction.RIGHT
    });
  }

  getImage(): string {
    return pikachuImages[this.state.facing];
  }

  render() {
    return (
      <div
        className="sprite"
        style={{
          backgroundImage: `url(${this.getImage()})`,
          top: `${this.state.position.i * 2}vw`,
          left: `${this.state.position.j * 2}vw`
        }}
      />
    );
  }
}