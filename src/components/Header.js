import React from 'react';
import { Container, Row } from 'react-grid-system';
import Navigation from './Navigation.js';
import HeaderAction from './HeaderAction.js';


class Header extends React.Component {
  render() {
    return (
      <section className="header">
        <Container>
          <Row>
            <Navigation/>
          </Row>

          <Row>
            <HeaderAction title={this.props.title} subtitle={this.props.subtitle}/>
          </Row>

        </Container>
      </section>
    )
  }
}
export default Header;
