import React, { Component } from "react";

export class Box2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgIsRed: true
    };
  }
  //asynchronous
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.toggleState();
  }

  toggleState() {
    this.setState(state => (state.bgIsRed = !state.bgIsRed));
  }
  render() {
    return (
      <>
        <div
          className="box"
          style={{
            backgroundColor: this.state.bgIsRed
              ? "var(--dk-blu)"
              : "var(--dk-yl)"
          }}
        >
          <p> inner box 2</p>
        </div>
        <button onClick={() => this.toggleState()}>change color</button>
      </>
    );
  }
}

export default Box2;
