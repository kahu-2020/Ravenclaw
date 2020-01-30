import React from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleNormal: {
        height: 600 / props.size + "px",
        width: 600 / props.size + "px",
        backgroundColor: "#CCCCCC",
      },
      styleOdd: {
        height: "150px",
        width: "150px",
        backgroundColor: "#000000"
      }
    };
  }

  render() {
    return <div style={this.state.styleNormal} />;
  }
}
export default Cell;
