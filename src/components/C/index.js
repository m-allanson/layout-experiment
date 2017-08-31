import React, { Component } from 'react';
import './index.css';
import Block from '../Block'

const blocks = [...Array(20)]

class C extends Component {
  render() {
    return (
      <div className="C">
        {blocks.map((item, index)=> <div className="C-item" key={index}><Block /></div>)}
      </div>
    );
  }
}

export default C;
