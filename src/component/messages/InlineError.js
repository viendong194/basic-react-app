import React, { Component } from 'react';

class InlineError extends Component {
  render() {
    return (
      <p style={{color:"#ae5856"}}>{this.props.text}</p>
    );
  }
}

export default InlineError;