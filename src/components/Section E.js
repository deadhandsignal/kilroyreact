import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SectionDescription from './Section Description.js';
import homel from './househomeless.jpg';
//retrieving text data - paragraph and header - from json file
const result = require('../utils/data/houseparas.json');
const myText=result[3].eTextElements.text;
const myhead=result[3].eTextElements.heading;


class SectionE extends React.Component {


    render() {
      return (


<section className="section-e">
<Container>



<Row>

  <Col md={8}>
    <SectionDescription paraText={myText} headText={myhead}/>
  </Col>

  <Col md={4}>
    {<figure>
        <img src={homel} className="househomelesspic" alt="Protestors march" height="370" width="330" />
        <figcaption><font size="2"><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Demonstrators on O'Connell Street - April 11 </i> </font></figcaption>
    </figure>
  }



  </Col>

</Row>

</Container>

      </section>
    )
  }
}

export default SectionE;
