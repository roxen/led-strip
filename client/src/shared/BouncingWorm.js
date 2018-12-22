export default class BouncingWorm extends StripObject {
  // Length in nof leds here
  constructor(startPosition, speed, length, color) {
    super();
    this.position = startPosition;
    this.speed = speed;
    this.length = length;
    this.color = color;
  }

  update(progress) {
    this.position += progress * this.speed / 1000;
    if (this.position > STRIP_LENGTH + this.length * MM_PER_LED || this.position < 0) {
      this.speed = -this.speed;
    }
  }

  draw(stripContext) {
    let ledNo = stripContext.mapPositionToLedNo(this.position);
    for (let i = 0; i < this.length; i++) {
      stripContext.setPixelColor(ledNo + i - this.length, this.color.red, this.color.green, this.color.blue);
    }
  }
}