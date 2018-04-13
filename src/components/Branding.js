import React from 'react';
import { Link } from 'react-router-dom';
import homeB from './Branding.svg';


//So that I could use the react router and once fully built out can redirect to my blog

class Branding extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <img className="branding" alt= "dead hand signal" height= "110" width= "110" src={homeB} />
          </Link>
        </div>
      </div>
    )
  }
}

export default  Branding;
