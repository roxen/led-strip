export default class StripObject {
  constructor() {
    this.visible = true;
  }

  update(progress) {
  };

  draw(stripContext) {
  }

  set visible(value) {
    this._visible = value;
  }

  get visible() {
    return this._visible;
  }
}
