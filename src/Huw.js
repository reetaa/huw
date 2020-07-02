import React, { Component } from "react";
import styled from "styled-components";
import { Scale } from "./Scale";
import { Width } from "./Width";
import { Canvas } from "./Canvas";
import { generateRandomValues } from "./utils/generate";

const HuwStyles = styled.div`
  position: fixed;
`;

const H3Styles = styled.h3.attrs((props) => ({
  style: {
    color: props.color,
    background: "rgba(255, 255, 255, 0.9)",
    padding: "1em",
  },
}))``;

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
        <HuwStyles>
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
            <H3Styles color={`${this.state.color}`}>
              Color: {this.state.color}
            </H3Styles>
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
