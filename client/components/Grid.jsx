import React from "react";
import Cell from "./Cell";

// const Grid = props => {
//   const newArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
//   return (
//       <div className="container">
//         <Cell />
//     </div>
//   );
// };
// function displayGrid(grid) {
//   let displayRow = "";
//   for (let i = 0; i < grid.length; i++) {
//     let col = grid;
//     for (let j = 0; j < col.length; j++) {
//       displayRow += col[i][j] + "";
//     }
//   }
//   console.log(displayRow)
//   return displayRow; // I need to be able to breakreturn here
// }

function createGrid(size, content) {
  let grid = [];
  for (var i = 0; i < size; i++) {
    grid[i] = new Array(size).fill(content);
  }
  console.log(grid);
  return grid;
}
// let size = createGrid(10, <Cell size={10} theOne={this.state.theOne}/>);

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theOne: 8
    };
    this.onMouseEnter = this.onMouseEnter.bind(this)
  }

  onMouseEnter() {
    console.log(this.state.theOne)
    this.setState({
      theOne: Math.ceil(Math.random() * 100)
      
    })
  }

  renderGrid(size, theOne) {
    let count = 0;
    let grid = [];
    // for (var i = 0; i < size; i++) {
    //   grid[i] = new Array(size).fill(
    //     <Cell size={size} i={i} theOne={theOne} />
    //   );
    // }

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        count++;
        grid.push(<Cell size={size} i={count} theOne={theOne} handleMouseOver = {this.onMouseEnter}/>);
      }
    }
    return grid;
  }

  render() {
    return (
      <div 
      // onMouseOver={this.onMouseEnter}

      className="container">{this.renderGrid(10, this.state.theOne)}
      
      </div>
    );
  }
}

export default Grid;
