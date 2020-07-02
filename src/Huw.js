import React, { Component } from "react";
import { Scale } from "./Scale";
import { Width } from "./Width";
import { Canvas } from "./Canvas";
import { Colors } from "./Colors";
import { generateRandomValues, generateLinearValues } from "./utils/generate";
import { HuwStyles, ColorStyles } from "./Styles";

export class Huw extends Component {
  state = { color: "", colors: [], scale: 2, width: 256 };

  hover = (rgbValue) => {
    this.setState({ color: rgbValue });
  };

  setColors = (type) => {
    if (type === "linear") {
      this.setState({ colors: generateLinearValues() });
    }
    if (type === "random") {
      this.setState({ colors: generateRandomValues() });
    }
  };

  componentDidMount() {
    this.setState({ colors: generateRandomValues() });
  }

  render() {
    return (
      <>
        <HuwStyles>
          <Colors setColors={this.setColors} />
          <Scale
            setScale={(scale) => {
              this.setState({ scale: scale });
            }}
            scale={this.state.scale}
          />
          <Width
            setWidth={(width) => {
              this.setState({ width: width });
            }}
            width={this.state.width}
          />
          {this.state.color && (
            <ColorStyles color={`${this.state.color}`}>
              Color: {this.state.color}
            </ColorStyles>
          )}
        </HuwStyles>
        <Canvas
          width={this.state.width}
          scale={this.state.scale}
          colors={this.state.colors}
          hover={this.hover}
        />
      </>
    );
  }
}
