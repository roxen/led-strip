import express from 'express';
import SPI from "pi-spi";
import dotstar from "dotstar";
import Runner from "./Runner";
import Stage from "./Stage";
import StripContext from "./StripContext";

const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
  res.send({express: 'Hello From Express'});
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));


let startRunner = function () {
  if (process.platform === "linux") {

    const spi = SPI.initialize('/dev/spidev0.0');

    const ledStrip = new dotstar.Dotstar(spi, {
      length: StripContext.nofLeds()
    });

    const stripContext = new StripContext(ledStrip);

    const runner = new Runner(stripContext, new Stage());
    runner.start();
  }
};
startRunner();