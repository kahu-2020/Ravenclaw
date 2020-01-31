import React from "react";
import Grid from './Grid'
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
    };
    
  }
  
  render() {

    if (this.props.i == this.props.theOne ) {
      return (
        <div style={this.state.styleOdd} onMouseOver={this.props.handleMouseOver }></div>
        
      )
    } else {
      return (
        <div style={this.state.styleNormal}></div>
    );
    }

  }
}
export default Cell;
