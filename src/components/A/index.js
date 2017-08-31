import React from 'react';
import { Link } from 'react-router-dom'
import './index.css';

const A = ({fade, title, nextChapter}) =>
    <div className={`A fade-${fade}`}>
        <h1 className="A-title">{title}</h1>
        <Link to={`/${nextChapter}`}>To Chapter {nextChapter}</Link>
    </div>

export default A;
