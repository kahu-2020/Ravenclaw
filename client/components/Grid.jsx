import React from "react";
import Cell from "./Cell";
import Winner from './Winner'



class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theOne: 8,
      hasWon: false
    };
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onMouseEnter() {
    console.log(this.state.theOne)
    this.setState({
      theOne: Math.ceil(Math.random() * 100)
      
    })
  }

  onClick() {console.log('hi')
    this.setState({
      hasWon: true
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
        grid.push(<Cell size={size} i={count} theOne={theOne} handleClickEvent = {this.onClick} handleMouseOver = {this.onMouseEnter}/>);
      }
    }
    return grid;
  }

  render() {
    return (
      <div 
      // onMouseOver={this.onMouseEnter}

      className="container">{this.state.hasWon ? <Winner/> :
        this.renderGrid(10, this.state.theOne )}
      
      </div>
    );
  }
}

export default Grid;
