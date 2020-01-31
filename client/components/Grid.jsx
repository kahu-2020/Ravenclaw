import React from "react";
import Cell from "./Cell";
import Winner from './Winner'
const randomColour = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
let MessageArray = [
  "Sucker!",
  "Try again!",
  "Nope!",
  "Go fight a bear sized duck!",
  "I hope you dont kiss like you click",
  "With mouse skills like that who need friends",
  "you need some hand, eye, potato coordination training",
  "PO TAY TOE",
  "m!m(o.O)m!m",
  "uninstall Life noob",
  "Maybe you should play legend of legends it might be easier for you !",
  "Dont give up your day job",
  "Loooooossssseerrrrr",
  "Maybe sim brick is more your stlyle",
  "Clickly clickly",
  "Do Do do do do ... I'm lovin it",
  "Click Me click me as fast as you can you cant click me on the potato head man",
  "Zug Zug",
  "Dont click me, click a pushpop",
  "Up high down low, you can't click me I'm a potatoe bro",
  ""
];


class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theOne: 8,
      hasWon: false,
      message: "Click The Po-Tay-Toe",
      style: {
        color: randomColour()
      }
    };
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onMouseEnter() {
    console.log(this.state.theOne)
    this.setState({
      theOne: Math.ceil(Math.random() * 100),
      message: MessageArray[Math.ceil(Math.random() * MessageArray.length - 1)],
      style: {
        color: randomColour()
      }
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

        className="container">
        <div className="header">
          <h1 style={this.state.style}>{this.state.message} </h1>
        </div>
        {this.state.hasWon ? <Winner /> :
        this.renderGrid(10, this.state.theOne )}
      
      </div>
    );
  }
}

export default Grid;
