import React, { createRef } from "react";

export class Canvas extends React.Component {
  ref = createRef();

  hover = (e) => {
    let i =
      Math.floor(e.offsetY / this.props.scale) * this.props.width +
      Math.floor(e.offsetX / this.props.scale);
    // There's a race condition where mousemove is called with coordinates outside the canvas
    if (i < 0 || i > this.props.colors.length - 1) return;
    if (!this.ref.current) return;
    const ctx = this.ref.current.getContext("2d");
    let sample = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;
    this.props.hover(`rgb(${sample[0]},${sample[1]},${sample[2]})`);
  };

  componentDidMount() {
    let canvas = this.ref.current;
    canvas.addEventListener("mousemove", this.hover);
    this.drawCanvas();
  }

  componentDidUpdate() {
    this.drawCanvas();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.width !== this.props.width) return true;
    if (nextProps.scale !== this.props.scale) return true;
    if (nextProps.colors !== this.props.colors) return true;
    if (nextProps.hover !== this.props.hover) return true;
    return false;
  }

  drawCanvas() {
    let canvas = this.ref.current;
    let ctx = canvas.getContext("2d");
    for (let y = 0; y < this.props.colors.length / this.props.width; y++) {
      for (let x = 0; x < this.props.width; x++) {
        let i = y * this.props.width + x;
        ctx.fillStyle = `rgb(${this.props.colors[i][0]},${this.props.colors[i][1]},${this.props.colors[i][2]})`;
        ctx.fillRect(
          x * this.props.scale,
          y * this.props.scale,
          this.props.scale,
          this.props.scale
        );
      }
    }
  }

  componentWillUnmount() {
    let canvas = this.ref.current;
    canvas.removeEventListener("mousemove", this.hover);
  }

  render() {
    return (
      <canvas
        ref={this.ref}
        width={this.props.width * this.props.scale}
        height={
          (this.props.colors.length * this.props.scale) / this.props.width
        }
      ></canvas>
    );
  }
}
