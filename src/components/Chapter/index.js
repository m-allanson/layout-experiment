import React from 'react';

import './index.css';

const Chapter = (props) =>
  <div className="Chapter-viewport">
    <div className="Chapter">
      <div className="Chapter-primary">
        {props.A}
      </div>
      <div className="Chapter-secondary">
        {props.B}
      </div>
      <div className="Chapter-tertiary">
        {props.C}
      </div>
    </div>
  </div>


export default Chapter;
