import React, {Component} from "react";
import Color from "color";
import StripContext from "../shared/StripContext";

export default class LedStrip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };

    this.colors = [];
  }

  set(index, r, g, b, a) {
    this.colors[index] = Color.rgb(r, g, b, a);
  }

  sync() {
    this.setState({
      colors: this.colors
    });
  }

  clear() {
    this.colors = [];
    this.setState({
      colors: this.colors
    });
  }

  render() {
    var leds = [];
    for (let i = 0; i < StripContext.nofLeds(); i++) {
      let color = "lightgray";
      if (this.state.colors[i]) {
        color = this.state.colors[i].rgb().string();
      }
      let style = {
        background: color
      };
      leds.push(
        <div key={i} style={style}></div>
      );
    }

    return (
      <div id="strip">{leds}</div>
    );
  }
}
