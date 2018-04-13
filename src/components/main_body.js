import React from 'react';


import Header from './Header.js';
import SectionA from './Section A.js';
import SectionB from './Section B.js';
import SectionC from './Section C.js';
import SectionD from './Section D.js';
import SectionE from './Section E.js';
import SectionF from './Section F.js';

import Footer from './Footer.js';


  //<Footer/>

class MainBody extends React.Component {
  render() {
    return (


      <div className="main_body">


        <Header  title={"There's no place called home."} subtitle={"A closeup on Ireland's deepening housing crisis."}/>
        <SectionA/>
        <SectionB/>
        <SectionC/>
        <SectionD/>
        <SectionE/>
        <SectionF/>
        <Footer title={"\"10,000 homeless is a national scandal\" -"} subtitle={"Homeless campaigner, Fr. Peter McVerry."}/>



      </div>


    )
  }
}

export default MainBody;
