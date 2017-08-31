import React from 'react';
import { Link } from 'react-router-dom'
import Block from '../Block'
import './index.css';

const blocks = [...Array(5)]

const C = ({fade, nextChapter}) =>
<div className={`C fade-${fade}`}>
  <p className="C-label">Scroll me</p>
  {blocks.map((item, index)=> <div className="C-item" key={index}><Block /></div>)}
  <Link className="C-nav" to={`/${nextChapter}`}>To Chapter {nextChapter}</Link>
</div>

export default C;
