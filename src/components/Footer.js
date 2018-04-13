import React from 'react';

import { Container, Row } from 'react-grid-system';
import HeaderAction from './HeaderAction.js';
import MapLink from "./MapLink.js";

class Footer extends React.Component
{ render()
  { return (
<section className="footer">

  <Container>
    <Row>
      <HeaderAction title={this.props.title} subtitle={this.props.subtitle}/>
    </Row>
    <MapLink/>
  </Container>

</section>

)
  }
}

export default Footer;
