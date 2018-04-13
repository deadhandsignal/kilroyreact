import React from 'react';
import { Row } from 'react-grid-system';
import Branding from './Branding.js';
import MapLink from "./MapLink.js";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Row>
            <Branding/>

    </Row>
      <MapLink/>


      </div>
    )
  }
}


export default Navigation;
