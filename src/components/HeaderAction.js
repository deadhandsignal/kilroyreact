import React from 'react';
import { Col } from 'react-grid-system';
import Title from './Title.js';
import Subtitle from './Subtitle.js';


class HeaderAction extends React.Component {
  render() {
    return (
      <Col lg={12}>
        <Title title={this.props.title}/>
        <Subtitle subtitle={this.props.subtitle}/>

      </Col>
    )
  }
}

export default HeaderAction;
