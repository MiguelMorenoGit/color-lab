import React, { Component } from 'react';
import './App.css';
import ColorCard from './components/ColorCard';
import colors from './data/colors';

class App extends Component {

  renderList () {
    return colors.map((item,index)=>{
      return <ColorCard key={`id-${index}`} colorFirst={item[0]} colorSecond={item[1]} />
    })
  }

  render() {
    return (
      <div className="App">
        {this.renderList()}
      </div>
    );
  }
}

export default App;
