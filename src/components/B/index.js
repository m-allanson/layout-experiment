import React from 'react';
import './index.css';

import Block from '../Block'

const blocks = [...Array(50)]

const B = ({fade, onClick}) =>
  <div className={`B fade-${fade}`} onClick={onClick}>
    <p className="B-label">Click or scroll me</p>
    {blocks.map((item, index)=> <div className="B-item" key={index}><Block /></div>)}
  </div>

export default B;
