import React from 'react';
import './index.css';
import Block from '../Block'

const blocks = [...Array(20)]

const C = ({fade}) =>
<div className={`C fade-${fade}`}>
  {blocks.map((item, index)=> <div className="C-item" key={index}><Block /></div>)}
</div>

export default C;
