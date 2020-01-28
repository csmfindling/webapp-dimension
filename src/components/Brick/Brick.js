import React from 'react';
import './Brick.css';

class Brick extends React.Component {
  render() {
    const animation_property = this.props.animation ? 'activate' : 'reset';
    const selected = (this.props.noFeedback==='') ? 'selected' : 'notSelected'
    return (      
      <div className="container">
       <img className={"symbol " + animation_property + " " + selected} src={this.props.symbol} alt='symbol' onClick={() => this.props.symbolClicked()}/>
      <span className={"feedback" + this.props.noFeedback}> {this.props.feedback} </span>
      </div>
    );
  }
}

export default Brick;
