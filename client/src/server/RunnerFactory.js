import dotstar from 'dotstar';
import SPI from 'pi-spi';
import StripContext from './StripContext';
import Runner from './Runner';

const spi = SPI.initialize('/dev/spidev0.0');
const ledStripLength = 144;

const ledStrip = new dotstar.Dotstar(spi, {
  length: ledStripLength
});

let stripContext = new StripContext(ledStrip);

export default class RunnerFactory {

  start() {
    let runner = new Runner(stripContext);
    runner.start();
  }
}