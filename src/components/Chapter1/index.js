import React from 'react';

import A from '../A';
import B from '../B';
import C from '../C';
import Chapter from '../Chapter'

const Chapter1 = (props) =>
  <Chapter
    A={<A fade="1"/>}
    B={<B fade="2"/>}
    C={<C fade="3"/>}
  />


export default Chapter1;
