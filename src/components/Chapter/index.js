import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './index.css';

import A from '../A';
import B from '../B';
import C from '../C';

class Chapter extends Component {
  constructor(props) {
    super(props)
    this.state = { depth: 0 }
    this.toggleDepth = this.toggleDepth.bind(this);
  }

  toggleDepth () {
    this.setState((prevState) => ({
      depth: prevState.depth === 1 ? 0 : 1
    }));
  }

  render() {
    const {nextChapter, fades, title} = this.props
    const depthClass = this.state.depth === 1 ? ' Chapter-depth1' : ''
    return (
      <div className="Chapter-viewport">
        <div className={`Chapter${depthClass}`}>
          <div className="Chapter-primary">
            <A nextChapter={nextChapter} title={title} fade={fades[0]}/>
          </div>
          <div className="Chapter-secondary">
            <B onClick={this.toggleDepth} fade={fades[1]} />
          </div>
          <div className="Chapter-tertiary">
            <C nextChapter={nextChapter} fade={fades[2]} />
          </div>
        </div>
      </div>
    )
  }
}

Chapter.PropTypes = {
  nextChapter: PropTypes.number,
  title: PropTypes.string,
  fades: PropTypes.arrayOf(PropTypes.number)
}

export default Chapter;
