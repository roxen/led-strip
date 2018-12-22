import StripObject from "./StripObject"
import StripContext from "./StripContext";

export default class LoopingWorm extends StripObject {
  // startPosition and length in mm. speed in mm/s
  constructor(startPosition, length, speed, color) {
    super();
    this.position = startPosition;
    this.length = length;
    this.speed = speed;
    this.color = color;
  }

  update(progress) {
    this.position += progress * this.speed / 1000;
    if (this.position > StripContext.length() + this.length) {
      this.position = 0;
    }
  }

  draw(context) {
    context.drawLine(this.position, this.position - this.length, this.color)
  }
}