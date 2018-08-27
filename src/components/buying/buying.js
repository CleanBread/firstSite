import React from 'react'

import './buying.css'

import ContainerOne from './containers/container-1/container-1'
import ContainerTwo from './containers/container-2/container-2'

class Buying extends React.Component {
    render() {
      return (
      <div className="buying-container">
        <div className="buying">
          <ContainerOne className="container-1"/>
          <ContainerTwo className="container-2"/>
        </div>
      </div>
      );
    }
  }
   
export default Buying;