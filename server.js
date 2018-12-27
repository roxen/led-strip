import express from 'express';
import RunnerFactory from './RunnerFactory'

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


let startRunner = function() {
  console.log("platform: " + process.platform);
  if (process.platform === "linux") {
    let runnerFactory = new RunnerFactory();
    runnerFactory.start();
  }
};
startRunner();