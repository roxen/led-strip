export default class StripContext {

  static nofLeds() {
    return 144;
  }

  static length() {
    return 1000;
  }

  static mmPerLed() {
    return StripContext.length() / StripContext.nofLeds();
  }

  // Strip expected to implement interface of https://www.npmjs.com/package/dotstar
  constructor(strip) {
    this.strip = strip;
    this.colors = [];
  }

  all(color) {
    for (let i = 0; i < StripContext.nofLeds(); i++) {
      this.colors[i] = color;
    }
  }

  set(index, color) {
    if (index >= 0 && index < StripContext.nofLeds() && Number.isInteger(index)) {
      this.colors[index] = color;
    }
  }

  clear() {
    this.colors = [];
    this.strip.clear();
  }

  sync() {
    for (let i = 0; i < StripContext.nofLeds(); i++) {
      if (this.colors[i]) {
        let color = this.colors[i];
        this.strip.set(i, color.red(), color.green(), color.blue(), color.alpha());
      }
    }

    this.strip.sync();
  }

  drawLine(x1, x2, color) {
    let start = Math.min(x1, x2);
    let stop = Math.max(x1, x2);

    let startLed = Math.floor(start / StripContext.mmPerLed());
    let stopLed = Math.ceil(stop / StripContext.mmPerLed());

    if (typeof this.firstRun == "undefined") {
      this.firstRun = true;
    }
    for (let i = startLed; i < stopLed; i++) {
      if (i >= 0) {
        // How much of current led i covered
        let ledColor = color;
        if (i === startLed || i === stopLed - 1) {
          let alpha = color.alpha() || 1;
          let factor = (Math.min(stop, (i + 1) * StripContext.mmPerLed()) - Math.max(i * StripContext.mmPerLed(), start)) / StripContext.mmPerLed();
          ledColor = color.alpha(alpha * factor);
        }

        this.set(i, ledColor);
      }
    }

    this.firstRun = false;
  }
}
