import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    if (this.props.opacity >= 0.2) {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>  
       {/* //Note: The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string */}
        <ColorBox opacity={this.props.opacity - 0.1} />
      </div>
    )
  } else {
    return null
  }
  }
}

