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
        height: 600 / props.size + "px",
        width: 600 / props.size + "px",
        backgroundColor: "#000000"
      },
      i: props.i,
      theOne: props.theOne
    };
  }
      //  if props.i == props.theOne then <smiley />
  render() {
    // console.log(this.state.i)
    // console.log(this.state.theOne)
    // return (
    //     <div style={this.state.styleOdd}></div>
    //   )
    
    if (this.state.i == this.state.theOne ) {
      return (
        <div style={this.state.styleOdd}></div>
      )
    } else {
      return (
        <div style={this.state.styleNormal}></div>
    );
    }

  }
}
export default Cell;
