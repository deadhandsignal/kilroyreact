import React from 'react';
import { Row} from 'react-grid-system';
import homeM from './homeless-man.jpg';


class Streetpic extends React.Component {
  render() {
    return (
      <Row>
        <div>
        <img className="streetpic1" alt = "Homlessness crisis in the streets" height="442" width="542" src={homeM}/>
        </div>​​​​​​​​​​
      </Row>
    )
  }
}

export default Streetpic;
