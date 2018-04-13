import React from 'react';
import { Container, Row } from 'react-grid-system';
import SectionDescription from './Section Description.js';
import LineAgeHome from "./LineAgeHome.js";

//retrieving text data - paragraph and header - from json file
const result = require('../utils/data/houseparas.json');
const myText=result[2].dTextElements.text;
const myhead=result[2].dTextElements.heading;


class SectionD extends React.Component {


    render() {
      return (


<section className="section-d">
<Container>

  <Row>
    <SectionDescription paraText={myText} headText={myhead}/>
  </Row>


    <LineAgeHome/>


</Container>

      </section>
    )
  }
}

export default SectionD;
