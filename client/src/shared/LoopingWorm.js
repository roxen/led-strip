import StripObject from "./StripObject"
import StripContext from "./StripContext";
import Color from "color";

export default class LoopingWorm extends StripObject {
  constructor(configuration) {
    super();
    this.position = configuration.origin || 0; // mm
    this.length = configuration.length || 100; // mm
    this.speed = configuration.speed || 200; // mm/s
    this.color = configuration.color || Color.rgb(255, 255, 255, .2);
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