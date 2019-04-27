import React, { Component } from 'react';
import '../helpers/arrayShuffle.js';
import './swatch.css'


class Square extends Component {
    render() {
      var squareStyle = {
        height: 150,
        backgroundColor: this.props.color,
  
      };
        return (
        <div style={squareStyle} className="swatchSquareStyle">
        </div>
      );
    }
  }

  class Label extends Component {
    render() {
      var labelStyle = {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        padding: 13,
        margin: 0
      };
      return (
        <div style={labelStyle}>{this.props.color}</div>
      );
    }
  }

  export class Swatch extends Component {
    constructor (props) {
        super(props);
        this.state = {
          color: '#DB0A5B'
        };

        // This binding is needed to make 'this' work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.setState( {
            color:  '#'+Math.random().toString(16).substr(-6).toUpperCase()
        });

        document.querySelector('#swatchDiv').classList.add('swatchWobble');
        document.querySelector('#swatchDiv').classList.remove('swatchWobble');
    }
  
    render() {
      var swatchStyle = {
        height: 200,
        width: 150,
        padding: 0,
        borderRadius: 4,
        backgroundColor: "#FFF",
        WebkitFilter: "drop-shadow(0px 0px 4px #666)",
        filter: "drop-shadow(0px 0px 4px #666)"
      };

      var buttonStyle = {
          marginTop: 10
      }
      
      return (
        <div>
            <div id='swatchDiv' style={swatchStyle}>
                <Square color={this.state.color} />
                <Label color={this.state.color} />  {/*Equivalent to 'color=blah' in this case where props contains only color */}
            </div>
            <div style={buttonStyle}>
                <button className="btn btn-primary" onClick={this.handleClick}>Change Colour</button>
            </div>
        </div>
      );
    }
  }

