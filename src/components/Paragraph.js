import React from 'react';


class Paragraph extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.heading}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }
}

export default Paragraph;
