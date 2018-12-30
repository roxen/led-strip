export default class Runner {
  constructor(stripContext, stage) {
    this.stripContext = stripContext;
    this.stage = stage;
  }

  loop(timestamp) {
    let progress = timestamp - this.lastRender;

    this.stage.update(progress);

    this.stripContext.clear();

    this.stage.draw(this.stripContext);

    this.stripContext.sync();

    this.lastRender = timestamp;
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }

  start() {
    this.lastRender = 0;
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }
}
