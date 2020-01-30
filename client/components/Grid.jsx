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

const Grid = props => {
  let size = createGrid(10, <Cell size={10} />);

  return <div className="container">{size}</div>;
};

export default Grid;
