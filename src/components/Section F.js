import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SectionDescription from './Section Description.js';
import BarHomelessProfile from './BarHomelessProfile.js';


//retrieving text data - paragraph and header - from json file
const result = require('../utils/data/houseparas.json');
const myText=result[4].fTextElements.text;
const myhead=result[4].fTextElements.heading;



class SectionF extends React.Component {

  render() {
    return (
      <section className="section-f">
<Container>

  <Row>
    <Col lg={6}>
      <SectionDescription paraText={myText} headText={myhead}/>
    </Col>

    <Col lg={6}>
      <BarHomelessProfile/>
    </Col>

  </Row>
  {<p> &nbsp;&nbsp;&nbsp;&nbsp;<font size="2">Data Source: <a href="http://www.housing.gov.ie/housing/homelessness/other/homelessness-data">Department of Housing Planning Community and Local Government</a></font></p>}



</Container>
      </section>
    )
  }
}

export default SectionF;
