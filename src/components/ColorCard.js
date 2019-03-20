import React, { Component } from 'react';

class ColorCard extends Component {

  render() {

    const gradient = {
      backgroundImage: `linear-gradient(135deg, ${this.props.colorFirst} 10%, ${this.props.colorSecond} 100%)`
    }

    const colorFrom = {
      color: `${this.props.colorFirst}`
    }

    const colorTo = {
      color: `${this.props.colorSecond}`
    }

    return(

      <div className="card">
        <div className="card-gradient" style={gradient}></div>
        <div className="card-description">
          <div className="card-color-from" style={colorFrom}>{this.props.colorFirst}</div>
          <div className="card-color-to" style={colorTo}>{this.props.colorSecond}</div>
        </div>
      </div>
    )
  }
}

export default ColorCard;