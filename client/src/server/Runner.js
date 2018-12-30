import gameloop from 'node-gameloop';

export default class Runner {
  constructor(stripContext, stage) {
    this.stripContext = stripContext;
    this.stage = stage;
  }

  loop(delta) {
    this.stage.update(delta * 1000);

    this.stripContext.clear();

    this.stage.draw(this.stripContext);

    this.stripContext.sync();
  }

  start() {
    const id = gameloop.setGameLoop((delta) => {
      this.loop(delta)
    }, 1000 / 60);
  }
}
