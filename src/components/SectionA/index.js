import React from 'react';
import { Link } from 'react-router-dom'
import './index.css';

const SectionA = ({fade, title, nextChapter}) =>
    <div className={`A fade-${fade}`}>
        <h1 className="A-title">{title}</h1>
        <Link to={`/${nextChapter}`}>To Chapter {nextChapter}</Link>
    </div>

export default SectionA;
