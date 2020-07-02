import React, { Component } from "react";
import { Scale } from "./Scale";
import { Width } from "./Width";
import { Canvas } from "./Canvas";
import { generateRandomValues } from "./utils/generate";

export class Huw extends Component {
  state = { color: "", colors: [], scale: 3, width: 256 };

  hover = (rgbValue) => {
    this.setState({ color: rgbValue });
  };

  componentDidMount() {
    this.setState({ colors: generateRandomValues() });
  }

  render() {
    return (
      <>
        <div style={{ position: "fixed" }}>
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
            <h3
              style={{
                color: `${this.state.color}`,
                background: `rgba(255, 255, 255, 0.9)`,
                padding: "1em",
              }}
            >
              Color: {this.state.color}
            </h3>
          )}
        </div>
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
