import StripObject from "./StripObject";
import Color from "color";
import LoopingWorm from "./LoopingWorm";

export default class Stage extends StripObject {
  constructor() {
    super();
    this.slowWorm = new LoopingWorm({origin: 0, length: 7, speed: 2, color: Color.rgb(0, 255, 0, .2)});
    this.worm3 = new LoopingWorm({origin: 100, length: 200, speed: 200, color: Color.rgb(255, 255, 0, .2)});
    this.redFastWorm = new LoopingWorm({origin: 0, length: 30, speed: 500, color: Color.rgb(255, 0, 0, .2)});
  }

  update(delta) {
    this.slowWorm.update(delta);
    this.worm3.update(delta);
    this.redFastWorm.update(delta);
  }

  draw(context) {
    // this.slowWorm.draw(context);
    // this.worm3.draw(context);
    // this.redFastWorm.draw(context);
    let color = Color.rgb(255, 0, 255, 0);
    for (let i = 0; i < 100; i++) {
      context.set(i, color.alpha(i / 100));
    }
  }
}