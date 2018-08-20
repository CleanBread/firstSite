import React from 'react'

import './buying.css'

import Container_1 from './containers/container-1/container-1'
import Container_2 from './containers/container-2/container-2'

class Buying extends React.Component {
    render() {
      return (
      <div className="buying">
        <Container_1 className="container-1"/>
        <Container_2 className="container-2"/>
      </div>
      );
    }
  }
   
export default Buying;