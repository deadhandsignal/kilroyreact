import React from 'react';
import { Link } from 'react-router-dom'

class MapLink extends React.Component {
  render() {
    return (
      <div>
        <Link to="/maphomeless">
          <span className="map-link">
          The crisis in your county...
          </span>
        </Link>
      </div>
    )
  }
}

export default MapLink;
