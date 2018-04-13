import React from 'react';
import {  Col } from 'react-grid-system';




//const result = require('../../../utils/data/houseparas.json');
//const myText=result[0].aTextElements.text;
//const myhead=result[0].aTextElements.heading;



class SectionDescription extends React.Component {


  render() {
    return (
      <Col >
        <div>
          <h4 className="heading">{this.props.headText}</h4>
        </div>
        <div>
          <hr className="divider"/>
        </div>
         <p className="paragraph">{this.props.paraText}</p>

      </Col>
    )
  }
}

export default SectionDescription;
