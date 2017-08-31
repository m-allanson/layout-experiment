import React, { Component } from 'react';
import './index.css';

import Block from '../Block'

const blocks = [...Array(50)]

class B extends Component {
  render() {
    return (
      <div className="B">
        {blocks.map((item, index)=> <div className="B-item" key={index}><Block /></div>)}
      </div>
    );
  }
}

export default B;
