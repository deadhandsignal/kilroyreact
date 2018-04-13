import React from 'react';
import { Container, Col } from 'react-grid-system';
import SectionDescription from './Section Description.js';



/* I left behind some of my testing and debugging code considering I'm being assessed
I obviously would not normally do this :)

name = {data.name} bc={data.burgerColor} - for testing
<Charter {...data} /> if you want to pass data through from here

//var json = require('./data.json'); (with path!)
//console.log(myText);
for (var i=0; i<result.length; i++)
    for (var name in result[i]) {
        console.log("Item name: "+name);
        console.log("T: "+result[i][name].text);
        console.log("TP: "+result[i][name].textposition);
    } <Laptop/> */





//retrieving text data - paragraph and header - from json file
const result = require('../utils/data/houseparas.json');
const myText=result[0].aTextElements.text;
const myhead=result[0].aTextElements.heading;


class SectionA extends React.Component {
  render() {
    return (
      <section className="section-a">
        <Container>
          <Col>

            <SectionDescription paraText={myText} headText={myhead}/>

          </Col>
        </Container>
      </section>
    )
  }
}


export default SectionA;
