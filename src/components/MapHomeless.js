import React from 'react';


import Header from './Header.js';
import Footer from './Footer.js';

class MapHomeless extends React.Component {
  render() {
    return (
      <div className="maphomeless">
        <Header messages={true} title={"Interactive Mapping Component Coming Soon!"} subtitle={"User will be able to choose county and view housing/homeless stats"}/>
        <Footer/>
      </div>
    )
  }
}

export default MapHomeless;
