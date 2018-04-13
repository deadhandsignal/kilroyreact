import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SectionDescription from './Section Description.js';
import HomelessFamilyChart from './HomelessFamilyChart.js';



//retrieving text data - paragraph and header - from json file
const result = require('../utils/data/houseparas.json');
const myText=result[1].bTextElements.text;
const myhead=result[1].bTextElements.heading;


class SectionB extends React.Component {



  render() {
    return (
<section className="section-b">
  <Container>

    <Row>

      <Col lg={6}>
        <SectionDescription paraText={myText} headText={myhead}/>
      </Col>

      <Col lg={6}>
        <HomelessFamilyChart title="welcome" subtitle="put something" />
      </Col>

    </Row>
  </Container>
</section>
    )
  }
}

export default SectionB;
