import LoopingWorm from "../shared/LoopingWorm";
import Wave from "../shared/Wave";
import Color from "color";

export default class Runner {
  constructor(stripContext) {
    this.stripContext = stripContext;
    // this.wave = new Wave();
    this.slowWorm = new LoopingWorm(495, 50, 5, Color.rgb(0, 255, 0));
    // this.worm2 = new LoopingWorm(0, 30, 1000, Color.rgb(255, 0, 0));
    // this.worm3 = new LoopingWorm(1000, 200, 0, Color.rgb(255, 0, 0, .5));
  }

  update(progress) {
    // this.wave.update(progress);
    this.slowWorm.update(progress);
    // this.worm2.update(progress);
    // this.worm3.update(progress);
  }

  draw() {
    // this.wave.draw(this.stripContext);
    this.slowWorm.draw(this.stripContext);
    // this.stripContext.all(Color.rgb(255, 0, 0, .2));
    // this.worm3.draw(this.stripContext);
    // this.worm2.draw(this.stripContext);
    // this.stripContext.drawLine(600, 1000, Color.rgb(0, 0, 255));
  }

  loop(timestamp) {
    let progress = timestamp - this.lastRender;

    this.update(progress);

    this.stripContext.clear();

    this.draw(this.stripContext);

    this.stripContext.sync();

    this.lastRender = timestamp;
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }

  start() {
    this.lastRender = 0;
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }
}
