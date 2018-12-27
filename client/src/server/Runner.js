import LoopingWorm from "./LoopingWorm";
import Wave from "./Wave";
import Color from "color";
import gameloop from 'node-gameloop';

export default class Runner {
  constructor(stripContext) {
    this.stripContext = stripContext;
    // this.wave = new Wave();
    this.slowWorm = new LoopingWorm(495, 50, 5, Color.rgb(0, 255, 0, .5));
    this.redFastWorm = new LoopingWorm(0, 30, 500, Color.rgb(255, 0, 0));
    this.worm3 = new LoopingWorm(100, 200, 200, Color.rgb(255, 255, 0, .5));

    this.loop.bind(this);
  }

  update(progress) {
    // this.wave.update(progress);
    this.slowWorm.update(progress);
    this.redFastWorm.update(progress);
    this.worm3.update(progress);
  }

  draw() {
    // this.wave.draw(this.stripContext);
    this.worm3.draw(this.stripContext);
    this.slowWorm.draw(this.stripContext);

    // this.stripContext.all(Color.rgb(255, 0, 0, .2));
    this.redFastWorm.draw(this.stripContext);
    // this.stripContext.drawLine(600, 1000, Color.rgb(0, 0, 255));
  }

  loop(delta) {
    this.update(delta * 1000);

    this.stripContext.clear();

    this.draw(this.stripContext);

    this.stripContext.sync();
  }

  start() {
    const id = gameloop.setGameLoop((delta) => {
      this.loop(delta)
    }, 1000 / 30);
  }
}
