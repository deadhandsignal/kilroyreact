import React from 'react';


/*Title and subtitle were really for me to start learning how JSX worked their
practicable use is questionable*/

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
      </div>
    )
  }
}
export default Title;
