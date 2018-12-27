import StripObject from "./StripObject";
import Color from "color";
import StripContext from "./StripContext";
import interpolate from "color-interpolate";

export default class Wave extends StripObject {
  constructor() {
    super();
    this.wavelength = 100; // mm
    this.speed = 100; // mm/s
    this.origin = 500; // source
    this.colormap = interpolate(['#21FFFF', '#0F00FF']);

    this.baseAngle = 0;
  }

  // if speed is 1000 mm/s, base angle should run 2pi in one s
  update(progress) {
    this.baseAngle -= this.speed / this.wavelength * 2 * Math.PI * progress / 1000;
  }

  draw(stripContext) {
    for (let i = 0; i < StripContext.nofLeds(); i++) {
      let position = i * StripContext.mmPerLed();
      let angleOffset = (this.origin - position) / this.wavelength * 2 * Math.PI;
      let angle = this.baseAngle - angleOffset;
      if (position < this.origin) {
        angle = this.baseAngle + angleOffset;
      }

      let value = .5 + Math.sin(angle) * .5;
      let color = this.colormap(value);

      stripContext.set(i, Color(color).alpha(.6));
    }
  }
}
